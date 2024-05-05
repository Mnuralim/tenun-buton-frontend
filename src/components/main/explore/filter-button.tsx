import React from 'react'
import * as Icons from '@/components/icons'
import Link from 'next/link'

const FilterButton = () => {
  return (
    <div className="lg:hidden">
      <Link
        href={'/main/explore/?filter=true'}
        scroll={false}
        className="flex items-center w-fit gap-2 rounded px-2 py-2 bg-primary mx-3"
      >
        <Icons.TuneIcon />
        <span className="text-white text-sm">Filter Produk</span>
      </Link>
    </div>
  )
}

export default FilterButton
