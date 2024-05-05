import React from 'react'
import FilterBody from './filter-body'

interface Props {
  categories: ICategory[]
}

const FilterWrapperDekstop = ({ categories }: Props) => {
  return (
    <section className="hidden lg:flex sticky top-24 flex-col gap-10 ">
      <h1 className="font-bold text-3xl border-b-3 border-b-[#B57B0F] text-primary w-fit">Filter Produk</h1>
      <div className="custom-shadow rounded-md px-5 pt-5 pb-10">
        <FilterBody categories={categories} />
      </div>
    </section>
  )
}

export default FilterWrapperDekstop
