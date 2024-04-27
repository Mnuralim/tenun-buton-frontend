import CategorySection from '@/components/main/category-section'
import DiscountBanner from '@/components/main/discount-banner'
import HeroSection from '@/components/main/hero-section'
import Latest from '@/components/main/latest'
import BestSeller from '@/components/main/best-seller'
import Catalog from '@/components/main/catalog'
import React from 'react'

const Page = () => {
  return (
    <main className="mb-10">
      <HeroSection />
      <CategorySection />
      <DiscountBanner />
      <Catalog />
      <Latest />
      <BestSeller />
    </main>
  )
}

export default Page
