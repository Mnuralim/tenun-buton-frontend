import type { Metadata } from 'next'
import { Inria_Serif } from 'next/font/google'
import './globals.css'
import Header from '@/components/landing-page/header'
import Footer from '@/components/footer'
import Providers from './provider'
import NotificationContainer from '@/components/notification-container'

const inriaSerif = Inria_Serif({ subsets: ['latin'], weight: ['400', '300', '700'] })

export const metadata: Metadata = {
  title: 'Landing page',
  description: 'Selamat datang di tenunbuton.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-primary2">
      <body className={`${inriaSerif.className}`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <NotificationContainer />
        </Providers>
      </body>
    </html>
  )
}
