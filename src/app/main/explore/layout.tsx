import type { Metadata } from 'next'
import Header from '@/components/main/header'

export const metadata: Metadata = {
  title: 'Eksplor',
  description: 'Selamat datang di tenunbuton.com',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
