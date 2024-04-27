'use client'
import React from 'react'
import * as Icons from '@/components/icons'
import { Image, Link } from '@nextui-org/react'
import { Link as Scroll } from 'react-scroll'
import NextLink from 'next/link'

const DekstopNavbar = () => {
  return (
    <nav className="items-center justify-between hidden w-full px-5 py-5 mx-auto lg:flex max-w-7xl ">
      <NextLink href={'/'}>
        <Image src="/logo/logo.png" alt="logo" />
      </NextLink>
      <div className="flex items-center gap-5 lg:gap-10">
        <Link
          as={Scroll}
          to="home"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          className="font-bold cursor-pointer lg:text-xl"
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
          className="font-bold cursor-pointer lg:text-xl"
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
          className="font-bold cursor-pointer lg:text-xl"
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
          className="font-bold cursor-pointer lg:text-xl"
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
          className="font-bold cursor-pointer lg:text-xl"
        >
          Kontak
        </Link>
      </div>
      <div className="flex items-center gap-7">
        <div className="items-center gap-2 md:hidden lg:flex">
          <Icons.searchIcon />
          <Icons.PhoneIcon />
          <Icons.InstagramIcon />
        </div>
        <NextLink href={'/auth/login'} className="px-5 py-1 font-bold text-white rounded-lg bg-primary lg:text-base">
          Login
        </NextLink>
      </div>
    </nav>
  )
}

export default DekstopNavbar
