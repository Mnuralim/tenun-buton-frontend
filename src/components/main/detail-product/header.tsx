'use client'
import React, { useEffect, useRef, useState } from 'react'
import * as Icons from '@/components/icons'
import { useRouter } from 'next/navigation'

const DetailHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const [scrolling, setScrolling] = useState<boolean>(false)
  const { back } = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  return (
    <nav
      className={`flex items-center justify-between px-3 sticky top-0 z-50 py-5 custom-shadow lg:hidden ${
        scrolling ? 'bg-primary2' : 'bg-primary'
      }`}
    >
      <Icons.ArrowBackIcon2
        width={20}
        height={20}
        props={{
          svgProps: {
            className: 'w-5 h-5',
            onClick: () => back(),
          },
          pathProps: { className: scrolling ? 'fill-primary' : 'fill-primary2' },
        }}
      />
      <div className="flex items-center gap-2">
        <Icons.BookmarkBorderIcon
          props={{
            svgProps: {
              className: 'w-5 h-5',
            },
            pathProps: {
              className: scrolling ? 'fill-primary' : 'fill-primary2',
            },
          }}
        />
        <Icons.ShareIcon
          props={{
            svgProps: {
              className: 'w-5 h-5',
            },
            pathProps: {
              className: scrolling ? 'fill-primary' : 'fill-primary2',
            },
          }}
        />
        <Icons.HamburgerIcon2
          props={{
            svgProps: {
              className: 'w-5 h-5',
            },
            lineProps: {
              className: scrolling ? 'stroke-primary' : 'stroke-primary2',
            },
          }}
        />
      </div>
    </nav>
  )
}

export default DetailHeader
