import ListMenu from '@/components/account/list-menu'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Akun',
  description: 'Selamat datang di tenunbuton.com',
}

export default async function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="mx-auto max-w-[1260px] w-full lg:bg-[#F3F3F3] mt-5 mb-20 lg:mt-16 lg:rounded-[10px] lg:shadow-custom-shadow lg:grid  lg:grid-cols-5 ">
        <div className="col-span-4 my-5 lg:border-l-3 lg:order-2 border-l-primary2">{children}</div>
        <div className="col-span-1 lg:order-1">
          <ListMenu />
        </div>
      </div>
    </>
  )
}
