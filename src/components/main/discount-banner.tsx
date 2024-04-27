import React from 'react'

const DiscountBanner = () => {
  return (
    <section className="mt-10 lg:mt-20">
      <div className="relative">
        <div className="bg-[url('/img/discount-banner.png')] w-full h-[109px] md:h-[150px] lg:h-[371px] bg-center bg-cover justify-center flex-col flex items-center">
          <p className="text-[#F3F3F3] z-20 text-xl font-bold md:text-2xl lg:text-[53px] lg:leading-[63.55px]">
            Dapatkan Potongan
          </p>
          <p className="text-[#F3F3F3] z-20 text-xl font-bold lg:text-[120px] md:text-2xl lg:leading-[130px]">50%</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-40"></div>
      </div>
    </section>
  )
}

export default DiscountBanner
