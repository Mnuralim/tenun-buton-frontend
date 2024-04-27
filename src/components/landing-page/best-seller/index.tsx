'use client'
import ProductCard from '@/components/product-card'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as data from '@/data/landing-page'
import 'swiper/css'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'
const Index = () => {
  return (
    <motion.section
      variants={slideIn('left', 'tween', 0.5, 1)}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
      id="best-seller"
      className="mt-10 md:mt-20 max-w-7xl mx-auto px-5"
    >
      <h1 className="mb-7 md:mb-10 font-bold text-sm leading-[16.79px] text-primary md:text-[40px]">Paling diminati</h1>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          breakpoints={{
            320: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 2.8,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {data.products.map((data, index) => (
            <SwiperSlide key={index}>
              <div>
                <ProductCard
                  {...data}
                  width={{
                    sm: '115px',
                    md: '150px',
                    lg: '350px',
                  }}
                  height={{
                    sm: '138px',
                    md: '180px',
                    lg: '441px',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-1/3 border-b-2 border-primary mt-6 mx-auto md:mt-12 md:border-b-3"></div>
    </motion.section>
  )
}

export default Index
