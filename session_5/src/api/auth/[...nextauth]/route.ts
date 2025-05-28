// app/api/auth/[...nextauth]/route.ts (untuk App Router)
// atau pages/api/auth/[...nextauth].ts (untuk Pages Router)

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (
          credentials?.email === "test@example.com" &&
          credentials?.password === "password"
        ) {
          return { id: "1", name: "Test User", email: "test@example.com"};
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // opsional, jika punya custom signin page
  },
  session: {
    strategy: 'jwt', // atau 'database' jika menyimpan sesi di DB
  },
  secret: process.env.AUTH_SECRET, // pastikan ini diatur di .env
  });
export { handler as GET, handler as POST }; // untuk App Router (Next.js 13+)
// export default handler; // jika menggunakan Pages Router (Next.js <13)
