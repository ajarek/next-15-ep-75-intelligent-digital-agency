import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { User } from "@/lib/models"
import connectToDb from "@/lib/connectToDb"
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        await connectToDb()

        try {
          const user = await User.findOne({ email: credentials.email })

          if (
            user &&
            (await bcrypt.compare(
              credentials.password as string,
              user.password
            ))
          ) {
            return user
          }
        } catch (err) {
          throw new Error(err instanceof Error ? err.message : String(err))
        }

        return null
      },
    }),
  ],
})
