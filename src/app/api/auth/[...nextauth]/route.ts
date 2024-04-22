import { signin } from "@/lib/fetch/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  
  providers: [
    CredentialsProvider({
      name: "Credentials",
      
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {

        if (!credentials?.email) return null;

        const res = await signin({
          email: credentials.email,
          password: credentials.password,
        });

        if (!res) return null;

        const user = res.user;
        const token = res.token;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };
