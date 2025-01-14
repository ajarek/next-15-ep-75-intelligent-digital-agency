/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { Session, User as NextAuthUser } from 'next-auth'
import JWT from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from '@/lib/models'
import connectToDb from '@/lib/connectToDb'
import bcrypt from 'bcryptjs'

interface UserWithId extends NextAuthUser {
  id: string
  isAdmin: boolean
  img: string
  username: string
}

const authOptions: any = {
  pages: {
    error: '/login',
  },
  theme: {
    // colorScheme: 'auto',
    // brandColor: '#0E78F9',
    logo: '/images/logo.jpg',
    // buttonText: '#ffffff',
  },
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
            return user as UserWithId
          }
          return null
        } catch (err) {
          throw new Error(err instanceof Error ? err.message : String(err))
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: typeof JWT; user?: NextAuthUser }) {
      if (user) {
        const userWithId = user as UserWithId
        return {
          ...token,
          id: userWithId.id,
          name: userWithId.username,
          admin: userWithId.isAdmin,
          image: userWithId.img,
        }
      }
      return token
    },
    async session({ session, token }: { session: Session; token: typeof JWT }) {
      return {
        ...session,
        user: {
          ...session.user,

          name: token.name,
        },
      }
    },
    async redirect({ baseUrl }: { baseUrl: string }) {
      return `${baseUrl}`
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
}

export const {
  auth,
  handlers: { GET, POST },signIn,signOut
} = NextAuth(authOptions)
