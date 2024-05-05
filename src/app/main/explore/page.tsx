import React from 'react'
import CategorySection from '@/components/main/category-section'
import DiscountBanner from '@/components/main/discount-banner'
import HeroSection from '@/components/main/hero-section'
import FilterButton from '@/components/main/explore/filter-button'
import FilterWrapperForMobile from '@/components/main/explore/filter-wrapper-mobile'
import { getAllCategories } from '@/lib/fetch/category'
import FilterWrapperDekstop from '@/components/main/explore/filter-wrapper-dekstop'
import { getAllProducts } from '@/lib/fetch/product'
import ProductList from '@/components/main/explore/product-list'
import SortButton from '@/components/main/explore/sort-button'

const Page = async () => {
  const categories = await getAllCategories()
  const products = await getAllProducts()
  return (
    <main className="mb-10">
      <HeroSection />
      <CategorySection />
      <DiscountBanner />
      <div className="flex items-center mt-10">
        <FilterButton />
        <div className="lg:hidden">
          <SortButton />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 lg:mt-20 gap-10 px-3 max-w-7xl mx-auto ">
        <div className="lg:col-span-1 hidden lg:block">
          <FilterWrapperDekstop categories={categories} />
        </div>
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mt-4 lg:mt-0 mb-4 lg:mb-10">
            <p className="text-sm text italic lg:text-xl">Menampilkan {products.length} produk dari total 200 produk</p>
            <div className="hidden lg:block h-full">
              <SortButton />
            </div>
          </div>
          <ProductList products={products} />
        </div>
      </div>
      <FilterWrapperForMobile categories={categories} />
    </main>
  )
}

export default Page
