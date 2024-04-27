import React from 'react'
import CategorySection from '@/components/main/category-section'
import DiscountBanner from '@/components/main/discount-banner'
import HeroSection from '@/components/main/hero-section'
import FilterButton from '@/components/main/explore/filter-button'
import FilterWrapper from '@/components/main/explore/filter-wrapper'
import { getAllCategories } from '@/lib/fetch/category'

const Page = async () => {
  const categories = await getAllCategories()
  return (
    <main className="mb-10">
      <HeroSection />
      <CategorySection />
      <DiscountBanner />
      <FilterButton />
      <FilterWrapper categories={categories} />
    </main>
  )
}

export default Page
