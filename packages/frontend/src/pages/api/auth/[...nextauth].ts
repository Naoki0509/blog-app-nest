import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from 'database'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 10 * 60,
  },

  jwt: {
    maxAge: 60 * 3,
  },
}

export default NextAuth(nextAuthOptions)
