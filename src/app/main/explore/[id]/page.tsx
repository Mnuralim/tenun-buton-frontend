import Detail from '@/components/main/detail-product/detail'
import ProductImage from '@/components/main/detail-product/product-image'
import RelatedProduct from '@/components/main/detail-product/related-product'
import Review from '@/components/main/detail-product/review'
import { getAllProducts, getProductById } from '@/lib/fetch/product'
import React from 'react'

interface Props {
  params: {
    id: string
  }
}

const Page = async ({ params }: Props) => {
  const product = await getProductById(params.id)
  const products = await getAllProducts()
  if (!product) return <div>Product not found</div>
  return (
    <main className="mb-20">
      <section className="grid mx-auto pt-5 gap-y-10 lg:mt-14 md:grid-cols-2 max-w-7xl lg:px-5">
        <ProductImage images={product.images} thumbnail={product.thumbnail} />
        <Detail product={product} />
      </section>
      <div className="lg:pb-8 lg:border-b-[#B0B0B0] lg:border-b-2 border-opacity-10 w-full"></div>
      <Review product={product} />
      <RelatedProduct products={products} />
    </main>
  )
}

export default Page
