import { signin } from "@/lib/fetch/auth";
import { getUser } from "@/lib/fetch/users";
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
        console.log(credentials);

        // Verifica que el correo electrónico esté presente antes de hacer la consulta
        if (!credentials?.email) {
          return null;
        }

        const res = await signin({
          email: credentials.email,
          password: credentials.password,
        });

        console.log("login fetch", res);

        if (!res) return null;

        const user = await getUser(res.data.id);

        if (!user) return null;

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
