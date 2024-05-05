import Link from 'next/link'
import React from 'react'
import * as Icons from '@/components/icons'
import ProductCard from '@/components/product-card'
import * as fetch from '@/lib/fetch/product'

const Index = async () => {
  const products = await fetch.getAllProducts()
  return (
    <section className="px-3 mx-auto mt-10 lg:mt-20 max-w-7xl">
      <div className="flex items-center justify-between my-5">
        <h1 className="font-bold text-primary lg:text-3xl">Paling Diminati</h1>
        <div className="flex items-center gap-1">
          <Link href={'/'} className="text-sm text-[#727272] font-bold lg:text-xl">
            Lihat semua
          </Link>
          <Icons.ArrowRight className="w-4 lg:w-5" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-7 lg:gap-5 md:grid-cols-4 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            width={{
              sm: 'full',
            }}
            height={{
              sm: '138px',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Index
