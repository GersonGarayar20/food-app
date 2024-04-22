import { login } from "@/lib/fetch/auth";
import { getServerSession } from "next-auth";
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

        const res = await login({
          email: credentials.email,
          password: credentials.password,
        });

        if (!res)
          throw new Error(
            "Credenciales incorrectas. Revisa e intenta de nuevo."
          );

        const user = res.user;
        console.log("🚀 ~ authorize ~ user:", user);
        const token = res.token;

        return {
          id: user.id,
          name: user.name,
          image: user.image,
          email: user.email,
          accessToken: token,
          userId: user.id,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.userId;
        token.accessToken = user.accessToken; // Pasamos el accessToken al token JWT
      }
      return token;
    },
    async session({ session, token }: any) {
      // Pasamos el accessToken a la sesión para usarlo en el cliente
      session.accessToken = token.accessToken;
      session.userId = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const getAuthSession = () => getServerSession(authOptions);
