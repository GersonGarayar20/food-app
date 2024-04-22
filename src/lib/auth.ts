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
        user.accessToken=res.token
          
        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token,user }: any) {
      
      return {...token,...user};
    },
    async session({ session, token }: any) {
      
      session.user=token
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const getAuthSession = () => getServerSession(authOptions);
