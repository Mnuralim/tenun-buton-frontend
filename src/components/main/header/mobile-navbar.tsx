'use client'
import React, { useEffect, useRef, useState } from 'react'
import * as Icons from '@/components/icons'
import DarkLogo from '../../../../public/logo/logo-dark'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { SubMenu } from './sub-menu'
import NextLink from 'next/link'

interface Props {
  scrolling: boolean
  isLoggedIn: boolean
}

const MobileNavbar = ({ scrolling, isLoggedIn }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

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
  })

  return (
    <nav className="lg:hidden px-5 py-3 flex justify-between items-center">
      <Icons.HamburgerIcon
        props={{
          svgProps: { onClick: toggleMenu },
          lineProps: { className: scrolling ? 'stroke-primary' : 'stroke-primary2' },
        }}
      />
      {scrolling ? (
        <DarkLogo />
      ) : (
        <Image src={'/logo/white-logo.png'} alt="logo" width={20000} height={20000} className="w-[90px] object-cover" />
      )}
      <div className="flex items-center gap-2">
        <Icons.searchIcon
          props={{
            svgProps: {
              className: 'w-5 h-5',
            },
            pathProps: {
              className: scrolling ? 'fill-primary' : 'fill-primary2',
            },
          }}
        />
        {isLoggedIn ? (
          <div className="relative">
            <div
              onClick={() => setShowSubmenu((prev) => !prev)}
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                scrolling ? 'bg-primary' : 'bg-primary2'
              }`}
            >
              <Icons.PersonIcon
                props={{
                  pathProps: {
                    className: scrolling ? 'fill-primary2' : 'fill-primary',
                  },
                }}
              />
            </div>
            <div className="absolute top-6 right-2">
              <SubMenu showSubmenu={showSubmenu} setShowSubmenu={setShowSubmenu} />
            </div>
          </div>
        ) : (
          <NextLink href="/auth/login">
            <Icons.SignInIcon
              props={{
                pathProps: {
                  className: scrolling ? 'fill-primary' : 'fill-primary2',
                },
              }}
            />
          </NextLink>
        )}
      </div>
      <div
        className={`fixed h-screen w-full bg-black/30 backdrop-blur-sm left-0 top-0 inset-0 z-50 overflow-y-auto transform transition-all ease-linear duration-300 ${
          isOpen ? 'left-0' : 'left-[-100%]'
        }`}
      >
        <div ref={menuRef} className="absolute h-full bg-primary w-5/6 flex flex-col p-3">
          <div className="absolute top-7 right-5">
            <Icons.CloseIcon
              props={{
                svgProps: {
                  onClick: toggleMenu,
                },
                pathProps: {
                  className: 'fill-[#F3F3F3]',
                },
              }}
            />
          </div>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="flex items-center gap-3 p-4 group"
          >
            <Icons.HouseIcon
              props={{
                svgProps: {
                  className: 'w-7 h-7',
                },
                pathProps: {
                  className: 'fill-[#F3F3F3] group-hover:fill-[#C3C3C3]',
                },
              }}
            />
            <p className="text-[#F3F3F3] group-hover:text-[#C3C3C3]">Beranda</p>
          </Link>
          <Link
            to="why-us"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex items-center gap-3 p-4 group"
          >
            <Icons.DashboardIcon
              props={{
                svgProps: {
                  className: 'w-7 h-7',
                },
                pathProps: {
                  className: 'fill-[#F3F3F3] group-hover:fill-[#C3C3C3]',
                },
              }}
            />
            <p className="text-[#F3F3F3] group-hover:text-[#C3C3C3]">Kenapa Kami</p>
          </Link>
          <Link
            to="best-seller"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex items-center gap-3 p-4 group"
          >
            <Icons.StorefrontIcon
              props={{
                svgProps: {
                  className: 'w-7 h-7',
                },
                pathProps: {
                  className: 'fill-[#F3F3F3] group-hover:fill-[#C3C3C3]',
                },
              }}
            />
            <p className="text-[#F3F3F3] group-hover:text-[#C3C3C3]">Produk</p>
          </Link>
          <Link
            to="about-us"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex items-center gap-3 p-4 group"
          >
            <Icons.DashboardIcon
              props={{
                svgProps: {
                  className: 'w-7 h-7',
                },
                pathProps: {
                  className: 'fill-[#F3F3F3] group-hover:fill-[#C3C3C3]',
                },
              }}
            />
            <p className="text-[#F3F3F3] group-hover:text-[#C3C3C3]">Tentang Kami</p>
          </Link>
          <Link
            to="testimoni"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex items-center gap-3 p-4 group"
          >
            <Icons.InboxIcon
              props={{
                svgProps: {
                  className: 'w-7 h-7',
                },
                pathProps: {
                  className: 'fill-[#F3F3F3] group-hover:fill-[#C3C3C3]',
                },
              }}
            />
            <p className="text-[#F3F3F3] group-hover:text-[#C3C3C3]">Testimoni</p>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="flex items-center gap-3 p-4 group"
          >
            <Icons.InboxIcon
              props={{
                svgProps: {
                  className: 'w-7 h-7',
                },
                pathProps: {
                  className: 'fill-[#F3F3F3] group-hover:fill-[#C3C3C3]',
                },
              }}
            />
            <p className="text-[#F3F3F3] group-hover:text-[#C3C3C3]">Kontak</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavbar
