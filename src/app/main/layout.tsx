import type { Metadata } from 'next'
import Header from '@/components/main/header'
import { auth } from '@/auth'

export const metadata: Metadata = {
  title: 'Beranda',
  description: 'Selamat datang di tenunbuton.com',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <div className="w-full h-full">
      <Header isLoggedIn={!!session} />
      {children}
    </div>
  )
}
