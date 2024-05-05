import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eksplor',
  description: 'Selamat datang di tenunbuton.com',
}

export default async function ExploreLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
