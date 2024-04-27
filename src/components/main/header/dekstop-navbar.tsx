'use client'
import React, { useState } from 'react'
import * as Icons from '@/components/icons'
import { Image, Link } from '@nextui-org/react'
import { Link as Scroll } from 'react-scroll'
import NextLink from 'next/link'
import { SubMenu } from './sub-menu'

interface Props {
  scrolling: boolean
  isLoggedIn: boolean
}

const DekstopNavbar = ({ scrolling, isLoggedIn }: Props) => {
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false)

  return (
    <nav className="items-center justify-between hidden w-full px-5 py-5 mx-auto lg:flex max-w-7xl ">
      <NextLink href={'/'}>
        <Image src="/logo/logo.png" alt="logo" hidden={!scrolling} className="w-[180px] h-[36.73px]" />
        <Image src={'/logo/white-logo.png'} alt="logo" hidden={scrolling} className="w-[180px] h-[36.73px]" />
      </NextLink>
      <div className="flex items-center gap-5 lg:gap-10">
        <Link
          as={Scroll}
          to="home"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          className={`font-bold cursor-pointer lg:text-xl ${scrolling ? 'text-primary' : 'text-white'}`}
        >
          Beranda
        </Link>
        <Link
          as={Scroll}
          to="why-us"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`font-bold cursor-pointer lg:text-xl ${scrolling ? 'text-primary' : 'text-white'}`}
        >
          Kenapa Kami
        </Link>
        <Link
          as={Scroll}
          to="best-seller"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`font-bold cursor-pointer lg:text-xl ${scrolling ? 'text-primary' : 'text-white'}`}
        >
          Produk
        </Link>
        <Link
          as={Scroll}
          to="about-us"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`font-bold cursor-pointer lg:text-xl ${scrolling ? 'text-primary' : 'text-white'}`}
        >
          Tentang Kami
        </Link>
        <Link
          as={Scroll}
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`font-bold cursor-pointer lg:text-xl ${scrolling ? 'text-primary' : 'text-white'}`}
        >
          Kontak
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="items-center gap-2 md:hidden lg:flex">
          <Icons.searchIcon
            props={{
              pathProps: {
                className: scrolling ? 'fill-primary' : 'fill-white',
              },
            }}
          />
          <Icons.ShoppingCartIcon
            props={{
              pathProps: {
                className: scrolling ? 'fill-primary' : 'fill-white',
              },
            }}
          />
          <Icons.NotificationIcon
            props={{
              pathProps: {
                className: scrolling ? 'fill-primary' : 'fill-white',
              },
            }}
          />
        </div>
        {isLoggedIn ? (
          <div className="relative">
            <div
              onClick={() => setShowSubmenu((prev) => !prev)}
              className={`w-7 h-7 rounded-full flex items-center justify-center cursor-pointer ${
                scrolling ? 'bg-primary' : 'bg-primary2'
              }`}
            >
              <Icons.PersonIcon
                props={{
                  svgProps: {
                    className: 'w-5 h-5',
                  },
                  pathProps: {
                    className: scrolling ? 'fill-primary2' : 'fill-primary',
                  },
                }}
              />
            </div>
            <div className="absolute top-8 right-2">
              <SubMenu showSubmenu={showSubmenu} setShowSubmenu={setShowSubmenu} />
            </div>
          </div>
        ) : (
          <NextLink href={'/auth/login'} className="px-5 py-1 font-bold text-white rounded-lg bg-primary lg:text-base">
            Login
          </NextLink>
        )}
      </div>
    </nav>
  )
}

export default DekstopNavbar
