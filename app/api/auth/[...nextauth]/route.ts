import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/api/prismaClient";
import { comparePassword } from "@/lib";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          }
        });
        if (!user) {
          return null;
        }
        const valid = await comparePassword(credentials!.password, user.password);
        if (!valid) {
          return null;
        }
        return user;
      }

    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({token, user}) {
      if (user) token.user = user;
      return token;
    },
    async session({session, token}) {
      session.user = token.user as any;
      return session;
    }
  }
});

export { handler as GET, handler as POST};