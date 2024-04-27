import React from 'react'
import * as Icons from '@/components/icons'
import CategorySwiper from './category-swiper'
import { getAllCategories } from '@/lib/fetch/category'

const CategorySection = async () => {
  const categories = await getAllCategories()
  return (
    <section className="mt-10 lg:mt-20">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <div className="pl-3 min-w-[50%] md:min-w-[30%] md:">
          <h1 className="font-bold text-primary md:text-xl lg:text-3xl min-w-full">
            Belanja <br />
            <span className="border-b-2 border-b-[#B57B0F]">Berdasarkan</span> Kategori
          </h1>
          <div className="flex gap-1 items-center mt-2 lg:mt-4">
            <Icons.StorefrontIcon
              props={{
                svgProps: {
                  className: 'w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16',
                },
                pathProps: {
                  className: 'fill-black',
                },
              }}
            />
            <p className="text-[10px] leading-[11px] text-[#9B9B9B] md:text-sm lg:text-2xl lg:leading-[28px]">
              80+
              <br />
              Produk unik
            </p>
          </div>
        </div>
        <CategorySwiper categories={categories} />
      </div>
    </section>
  )
}

export default CategorySection
