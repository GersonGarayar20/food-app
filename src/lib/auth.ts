import { signin } from "@/lib/fetch/auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials?.email || !credentials?.password)
          throw new Error("Correo o contraseña faltantes.");

        const res = await signin({
          email: credentials.email,
          password: credentials.password,
        });

        if (!res)
          throw new Error(
            "Credenciales incorrectas. Revisa e intenta de nuevo."
          );

        const user = res.user;
        const token = res.token;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          accessToken: token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.accessToken = user.accessToken; // Pasamos el accessToken al token JWT
      }
      return token;
    },
    async session({ session, token }: any) {
      // Pasamos el accessToken a la sesión para usarlo en el cliente
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
