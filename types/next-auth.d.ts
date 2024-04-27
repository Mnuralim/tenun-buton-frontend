import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string | null
      email: string | null
      image: string | null
      mobile: string | null
      username: string | null
      village: string | null
      subdistrict: string | null
      postalCode: string | null
      city: string | null
      province: string | null
      country: string | null
      address: string | null
      accessToken: string
    }
  }
}
