import Google from '@auth/core/providers/google'
import CredentialProvider from '@auth/core/providers/credentials'
import NextAuth, { NextAuthConfig } from 'next-auth'
import * as actions from '@/actions'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  throw new Error('GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be provided')
}

const nextAuthOptions: NextAuthConfig = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null
        }

        const response = await actions.loginCredentials({
          email: credentials.email as string,
          password: credentials.password as string,
        })
        const data = await response.json()
        const user = await data.data

        if (!response.ok) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          username: user.username,
          accessToken: user.accessToken,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && account.provider === 'google') {
        const response = await actions.loginGoogle(account.id_token as string)
        if (response.ok) {
          const resParsed = await response.json()
          const data = await resParsed.data
          token.accessToken = data.accessToken
          user.id = data.id
        }
      }
      return { ...token, ...user }
    },
    async session({ session, token }) {
      if (token.accessToken) {
        session.user.accessToken = token.accessToken as string
        session.user.id = token.id as string
      }

      return session
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(nextAuthOptions)
