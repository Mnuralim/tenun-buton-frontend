'use client'
import * as Icons from '@/components/icons'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'
import CategoryCard from './category-card'

interface Props {
  categories: ICategory[]
}

const CategorySwiper = ({ categories }: Props) => {
  return (
    <div className="w-full h-20 relative">
      <div className="absolute w-full h-full flex items-center justify-center">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            350: {
              slidesPerView: 1.4,
              spaceBetween: 5,
            },
            425: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2.8,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 1.7,
              spaceBetween: 5,
            },
            1280: {
              slidesPerView: 2.5,
              spaceBetween: 5,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div>
                <CategoryCard {...category} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default CategorySwiper
