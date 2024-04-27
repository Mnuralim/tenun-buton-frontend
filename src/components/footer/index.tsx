'use client'
import Image from 'next/image'
import React from 'react'
import * as Icons from '@/components/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Index = () => {
  const pathname = usePathname()
  if (pathname.startsWith('/auth')) {
    return null
  }

  return (
    <footer className="bg-primary pt-5 px-5 md:pt-7">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-8 justify-between ">
        <div className="lg:w-1/4">
          <div>
            <Image
              src={'/logo/white-logo.png'}
              alt="logo"
              width={20000}
              height={20000}
              className="w-28 object-cover md:w-44"
            />
          </div>
          <div className="flex items-center gap-3 mt-3">
            <div className="w-4 h-4 md:w-7"></div>
            <Icons.InstagramIcon iconColor="#fff" />
            <Icons.FacebookIcon iconColor="#fff" />
            <Icons.WhatsappIcon iconColor="#fff" />
          </div>
        </div>
        <div className="lg:w-1/4 flex flex-col text-[#F3F3F3] gap-3">
          <h1 className="text-sm font-bold leading-[16.79px] md:text-2xl md:leading-[28.78px]">PANDUAN PEDAGANG</h1>
          <Link href={'/'} className="text-xs leading-[14.39px] md:text-base md:leading-[19.18px]">
            Cara Pendaftaran
          </Link>
          <Link href={'/'} className="text-xs leading-[14.39px] md:text-base md:leading-[19.18px]">
            Syarat dan Ketentuan
          </Link>
          <Link href={'/'} className="text-xs leading-[14.39px] md:text-base md:leading-[19.18px]">
            Keunggulan Bergabung
          </Link>
          <Link href={'/'} className="text-xs leading-[14.39px] md:text-base md:leading-[19.18px]">
            Panduan Pedagang
          </Link>
        </div>
        <div className="lg:w-1/4 flex flex-col text-[#F3F3F3] gap-3">
          <h1 className="text-sm font-bold leading-[16.79px] md:text-2xl md:leading-[28.78px]">PANDUAN PEMBELI</h1>
          <Link href={'/'} className="text-xs leading-[14.39px] md:text-base md:leading-[19.18px]">
            Cara Pendaftaran
          </Link>
          <Link href={'/'} className="text-xs leading-[14.39px] md:text-base md:leading-[19.18px]">
            Syarat dan Ketentuan
          </Link>
          <Link href={'/'} className="text-xs leading-[14.39px] md:text-base md:leading-[19.18px]">
            Keunggulan Berbelanja
          </Link>
          <Link href={'/'} className="text-xs leading-[14.39px] md:text-base md:leading-[19.18px]">
            Panduan Pembeli
          </Link>
        </div>
        <div className="lg:w-1/4 flex flex-col text-[#F3F3F3] gap-3">
          <h1 className="text-sm font-bold leading-[16.79px] md:text-2xl md:leading-[28.78px]">Selamat Berbelanja!</h1>
          <div className="grid grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-4">
            <Image
              src={'/img/bri.png'}
              alt="logo"
              width={20000}
              height={20000}
              className="w-full h-full aspect-video"
            />
            <Image
              src={'/img/bni.png'}
              alt="logo"
              width={20000}
              height={20000}
              className="w-full h-full aspect-video"
            />
            <Image
              src={'/img/mandiri.png'}
              alt="logo"
              width={20000}
              height={20000}
              className="w-full h-full aspect-video"
            />
            <Image
              src={'/img/bca.png'}
              alt="logo"
              width={20000}
              height={20000}
              className="w-full h-full aspect-video"
            />
            <Image
              src={'/img/btn.png'}
              alt="logo"
              width={20000}
              height={20000}
              className="w-full h-full aspect-video"
            />
            <Image
              src={'/img/permata.png'}
              alt="logo"
              width={20000}
              height={20000}
              className="w-full h-full aspect-video"
            />
            <Image
              src={'/img/jago.png'}
              alt="logo"
              width={20000}
              height={20000}
              className="w-full h-full aspect-video"
            />
            <Image
              src={'/img/bank-jatim.png'}
              alt="logo"
              width={20000}
              height={20000}
              className="w-full h-full aspect-video"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-[#F3F3F3] text-sm border-t-2 border-white mt-4 py-3 md:text-xl md:mt-6">
        Copyright © 2024 Tenun Buton byMyTenun
      </p>
    </footer>
  )
}

export default Index
