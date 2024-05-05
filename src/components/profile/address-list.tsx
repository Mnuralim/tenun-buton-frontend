import React, { useEffect, useRef } from 'react'

interface Props {
  addresses: IAddress[]
  showSubmenu: boolean
  setShowSubmenu: React.Dispatch<React.SetStateAction<boolean>>
  handleDefaultAddress: (id: string) => void
  currentAddress: string
}

export const Addresslist = ({
  addresses,
  setShowSubmenu,
  showSubmenu,
  handleDefaultAddress,
  currentAddress,
}: Props) => {
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

  const handleSelectDefaultAddress = (id: string) => {
    handleDefaultAddress(id)
    setShowSubmenu(false)
  }

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
      className="w-full custom-shadow rounded-[10px] border border-primary bg-primary2 py-3 gap-1 px-1 flex flex-col"
    >
      <h1 className="text-sm font-bold text-primary lg:text-base">Pilih alamat pengiriman</h1>
      {addresses.map((address) => (
        <button
          key={address.id}
          onClick={() => handleSelectDefaultAddress(address.id)}
          className={currentAddress === address.id ? 'bg-primary' : ''}
        >
          <p
            className={`text-xs  px-1 line-clamp-1 text-start lg:text-sm ${
              currentAddress === address.id ? 'text-white' : 'text-[#393939]'
            }`}
          >
            {address.postal_code}, {address.village}, {address.subdistrict}, {address.city}, {address.province}
          </p>
        </button>
      ))}
    </div>
  )
}
