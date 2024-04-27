import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="bg-primary mobile-nav-shadows rounded-b-2xl overflow-hidden mobile-nav-shadows">
        <div className="relative w-full h-auto lg:max-h-[calc(100vh-77px)] aspect-[1.51/1] max-w-7xl mx-auto">
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[2px] items-center">
            <h1 className="font-bold leading-[16.79px] text-white text-sm md:text-xl lg:text-[40px] lg:leading-[50px]">
              Temukan
            </h1>
            <h1 className="font-bold leading-[16.79px] text-white text-sm md:text-xl lg:text-[40px] lg:leading-[50px]">
              Koleksi Paling Baru
            </h1>
            <button className="py-2 px-5 bg-white text-primary rounded-md text-[9px] mt-2 md:text-sm lg:text-xl lg:mt-4">
              Mulai Belanja
            </button>
          </div>
          <div className="absolute left-0 bottom-0 h-full w-full flex flex-col justify-end">
            <Image src={'/img/Expict merah.png'} alt="hero" width={20000} height={20000} className="w-[40%] h-[73%]" />
          </div>
          <div className="absolute right-0 bottom-0 h-full w-full flex flex-col justify-end items-end">
            <Image
              src={'/img/Expict coklat.png'}
              alt="hero"
              width={20000}
              height={20000}
              className="w-[28.5%] h-[48%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
