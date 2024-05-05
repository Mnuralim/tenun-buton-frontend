import ProductCard from '@/components/product-card'
import React from 'react'

interface Props {
  products: IProduct[]
}

const ProductList = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-3 lg:gap-7">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          width={{
            sm: 'full',
          }}
        />
      ))}
    </div>
  )
}

export default ProductList
