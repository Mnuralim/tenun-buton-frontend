'use client'
import * as Icons from '@/components/icons'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as data from '@/data/landing-page'
import 'swiper/css'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'
import CatalogCard from './catalog-card'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'

const Carousel = () => {
  return (
    <div className="w-full">
      <motion.div
        viewport={{ once: true }}
        variants={slideIn('right', 'tween', 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="relative w-full h-full"
      >
        <div className="absolute w-full z-20 max-w-[65%] lg:max-w-[94%] left-[35%] top-0 lg:left-[6%] lg:top-1/2 lg:-translate-y-1/2 ">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              350: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              425: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.8,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
            }}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {data.calaogData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="pt-6">
                  <CatalogCard {...data} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full h-20 mt-3">
            <div className="flex items-center gap-2">
              <Icons.ArrowLeft className="lg:w-[40px] lg:h-[40px]" />
              <Icons.ArrowRight className="lg:w-[40px] lg:h-[40px]" />
            </div>
          </div>
          <div className="absolute top-0 -left-7 lg:-top-4 lg:-left-10">
            <Icons.Eclipse className="lg:w-[165px] lg:h-[150px]" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Carousel
