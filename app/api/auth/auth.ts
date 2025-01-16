/* eslint-disable @typescript-eslint/no-explicit-any */

import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from '@/lib/models'
import connectToDb from '@/lib/connectToDb'
import bcrypt from 'bcryptjs'

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: 'Credential',
      credentials: {
        username: { type: 'text', required: true },
        password: { type: 'password', required: true },
      },
      async authorize(credentials) {
        await connectToDb()
        const username = credentials?.username ?? ''
        const password = credentials?.password ?? ''

        if (typeof username !== 'string' || typeof password !== 'string') {
          throw new Error('Invalid credentials')
        }

        try {
          const user = await User.findOne({ username })
          if (user && (await bcrypt.compare(password, user.password))) {
            return user as User
          }
          return null
        } catch (err) {
          throw new Error(err instanceof Error ? err.message : String(err))
        }
      },
    }),
  ],
 
  secret: process.env.AUTH_SECRET,
  session: {strategy: 'jwt', maxAge: 30 * 24 * 60 * 60}, // 30 days
}

export const { auth, handlers: { GET, POST }, signIn, signOut } = NextAuth(authOptions)
