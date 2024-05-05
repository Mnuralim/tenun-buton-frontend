import React, { useEffect, useRef } from 'react'
import * as Icons from '@/components/icons'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

interface Props {
  showSubmenu: boolean
  setShowSubmenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const SubMenu = ({ showSubmenu, setShowSubmenu }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowSubmenu(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      if (showSubmenu) {
        setShowSubmenu(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  if (!showSubmenu) return null
  return (
    <div
      ref={menuRef}
      className="w-32 lg:w-44 custom-shadow rounded-[10px] border border-primary bg-primary2 py-2 px-1 flex flex-col"
    >
      <Link href={'/main/account'} className="flex items-center gap-1 hover:bg-[#C6C6C6] py-1 rounded px-1">
        <Icons.PersonIcon
          props={{
            svgProps: {
              className: 'w-[22px] h-[22px]',
            },
            pathProps: {
              className: 'fill-primary',
            },
          }}
        />
        <p className="text-sm lg:text-lg text-primary">Akun</p>
      </Link>
      <Link href={'/main/account'} className="flex items-center gap-1 hover:bg-[#C6C6C6] py-1 rounded px-1">
        <Icons.ShoppingCartIcon />
        <p className="text-sm lg:text-lg text-primary">Keranjang</p>
      </Link>
      <Link href={'/main/account'} className="flex items-center gap-1 hover:bg-[#C6C6C6] py-1 rounded px-1">
        <Icons.NotificationIcon />
        <p className="text-sm lg:text-lg text-primary">Notifikasi</p>
      </Link>
      <div
        onClick={() => signOut()}
        className="flex items-center gap-1 ml-1 cursor-pointer hover:bg-[#C6C6C6] py-1 rounded px-1"
      >
        <Icons.SignInIcon
          props={{
            svgProps: {
              className: 'w-[18px] h-[18px] transform -scale-x-100',
            },
            pathProps: {
              className: 'fill-primary',
            },
          }}
        />
        <p className="text-sm lg:text-lg text-primary">Keluar</p>
      </div>
    </div>
  )
}
