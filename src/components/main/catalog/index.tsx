import React from 'react'
import * as data from '@/data/landing-page'
import CatalogCard from '@/components/landing-page/home/catalog-card'

const Index = () => {
  return (
    <section className="mt-10 lg:mt-20 px-3 max-w-7xl mx-auto">
      <div className="flex justify-between items-center my-5">
        <h1 className="text-primary font-bold lg:text-3xl">Katalog</h1>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4 lg:gap-10">
        {data.calaogData.map((data, index) => (
          <CatalogCard key={index} {...data} />
        ))}
      </div>
    </section>
  )
}

export default Index
