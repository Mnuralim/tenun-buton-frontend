'use client'
import Link from 'next/link'
import React from 'react'
import * as Icons from '@/components/icons'
import { usePathname } from 'next/navigation'
import useScreenSize from './hook/screen'

const menu = [
  {
    id: 1,
    title: 'Profil',
    link: '/main/account/profile',
    description: 'Atur biodata diri, dan alamat pengiriman',
  },
  {
    id: 2,
    title: 'Notifikasi',
    link: '/main/account/notification',
    description: 'Atur berbagai jenis notifikasi',
  },
  {
    id: 3,
    title: 'Wishlist',
    link: '/main/account/wishlist',
    description: 'Atur produk kesukaanmu',
  },
  {
    id: 4,
    title: 'Pesanan',
    link: '/main/account/order',
    description: 'Lihat semua pesananmu',
  },
  {
    id: 5,
    title: 'Lacak Pesanan',
    link: '/main/account/track-order',
    description: 'Lacak pesananmu',
  },
  {
    id: 6,
    title: 'Penjualan Saya',
    link: '/main/account/sales',
    description: 'Lihat semua penjualanmu',
  },
]

const ListMenu = () => {
  const pathname = usePathname()
  const screenSize = useScreenSize()

  if (screenSize.width && screenSize.width < 768 && menu.some((item) => pathname.startsWith(item.link))) return null

  return (
    <aside className="flex flex-col justify-between gap-4 mx-5 lg:mx-2 h-full">
      <div className="flex flex-col px-3 border border-black border-opacity-15 shadow-custom-shadow rounded-[10px] lg:border-none lg:shadow-none py-3">
        <h1 className="mb-2 text-lg font-bold lg:hidden text-primary">Pengaturan Akun</h1>
        {menu.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className={`lg:py-1 py-2 group lg:hover:bg-primary lg:px-3 rounded-[10px] ${
              pathname === item.link ? 'lg:bg-primary lg:text-white' : ''
            } lg:hover:text-white`}
          >
            <span
              className={` text-base lg:text-xl font-bold block -mb-2 lg:mb-0 lg:group-hover:text-white ${
                pathname === item.link ? 'lg:text-white text-primary' : 'text-[#393939]'
              }  `}
            >
              {item.title}
            </span>
            <span className="lg:hidden text-xs text-[#393939] ">{item.description}</span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-center gap-4 mb-5 lg:px-3 lg:gap-0">
        <div className="flex group lg:hover:bg-primary lg:text-xl lg:hover:text-white justify-between px-3 border border-black border-opacity-15 shadow-custom-shadow rounded-[10px] lg:border-none lg:shadow-none py-3 lg:py-1 text-primary lg:text-[#393939] text-base font-bold">
          Pengaturan
        </div>
        <div className="flex group lg:hover:bg-primary lg:text-xl lg:hover:text-white  justify-between px-3 border border-black border-opacity-15 shadow-custom-shadow rounded-[10px] lg:border-none lg:shadow-none py-3 lg:py-1 text-primary lg:text-[#393939] text-base font-bold">
          Kebijakan & Privasi
        </div>
        <div className="flex group lg:hover:bg-primary lg:text-xl lg:hover:text-white items-center gap-2 px-3 border border-black border-opacity-15 shadow-custom-shadow rounded-[10px] lg:border-none lg:shadow-none py-3 lg:py-1 text-primary lg:text-[#393939] text-base font-bold">
          <Icons.SignInIcon
            props={{
              svgProps: {
                className: 'rotate-180 lg:hidden',
              },
              pathProps: {
                className: 'lg:fill-[#393939] fill-primary',
              },
            }}
          />
          Keluar
        </div>
      </div>
    </aside>
  )
}

export default ListMenu
