import { auth } from '@/auth'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const session = await auth()

  return {
    title: `Profile | ${session?.user.email?.split('@')[0]}` || 'Profile',
    description: 'Profile',
  }
}

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
