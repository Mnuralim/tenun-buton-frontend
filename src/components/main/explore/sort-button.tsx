'use client'
import React, { useEffect, useRef, useState } from 'react'
import * as Icons from '@/components/icons'

const sortItems = [
  {
    id: 'latest',
    name: 'Paling baru',
  },
  {
    id: 'best-seller',
    name: 'Paling diminati',
  },
  {
    id: 'expensive',
    name: 'Harga termahal',
  },
  {
    id: 'cheapest',
    name: 'Harga termurah',
  },
]

const SortButton = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      if (showMenu) {
        setShowMenu(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showMenu])

  return (
    <div className="relative flex items-center gap-2">
      <button className="hidden lg:block text-xl font-bold text-[#932C14]">Reset</button>
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="flex items-center w-fit gap-2 rounded px-2 py-2 bg-primary"
      >
        <Icons.FilterListIcon />
      </button>
      <div
        ref={menuRef}
        className={`absolute top-[calc(100%+10px)] right-0 w-[150px] lg:w-[250px] custom-shadow bg-primary2 border border-primary transform transition-all ease-soft-spring duration-200 rounded-[10px] flex flex-col items-start p-2 ${
          showMenu ? 'opacity-100 z-50' : 'opacity-0 -z-50'
        }`}
      >
        {sortItems.map((item) => (
          <button
            key={item.id}
            className="py-1 text-sm lg:text-lg text-primary w-full text-start hover:bg-[#C6C6C6] rounded px-2"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SortButton
