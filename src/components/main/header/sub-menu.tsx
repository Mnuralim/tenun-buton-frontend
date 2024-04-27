import React, { useEffect, useRef } from 'react'
import * as Icons from '@/components/icons'
import { signOut } from 'next-auth/react'

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
    <div ref={menuRef} className="w-32 shadow-large rounded-sm bg-primary2 p-2 flex flex-col gap-2">
      <div className="flex items-center gap-1">
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
        <p>Akun</p>
      </div>
      <div className="flex items-center gap-1">
        <Icons.ShoppingCartIcon />
        <p>Keranjang</p>
      </div>
      <div className="flex items-center gap-1">
        <Icons.NotificationIcon />
        <p>Notifikasi</p>
      </div>
      <div onClick={() => signOut()} className="flex items-center gap-1 ml-1 cursor-pointer">
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
        <p>Keluar</p>
      </div>
    </div>
  )
}
