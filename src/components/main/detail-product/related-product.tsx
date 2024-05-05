'use client'
import ProductCard from '@/components/product-card'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'

interface Props {
  products: IProduct[]
}
const RelatedProduct = ({ products }: Props) => {
  return (
    <section className="mt-10 md:mt-20 max-w-7xl mx-auto px-5">
      <h1 className="text-primary font-bold text-lg lg:text-3xl mb-5">Produk terkait</h1>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 2.3,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 2.6,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4.1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {products.map((data) => (
            <SwiperSlide key={data.id}>
              <ProductCard
                {...data}
                width={{
                  sm: 'full',
                  md: 'full',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default RelatedProduct
