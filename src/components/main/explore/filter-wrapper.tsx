'use client'
import React, { useEffect } from 'react'
import FilterBody from './filter-body'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
  categories: ICategory[]
}

const FilterWrapper = ({ categories }: Props) => {
  const { back } = useRouter()
  const searchParams = useSearchParams()
  const isShowDrawer = searchParams.get('filter') === 'true'
  const handleCloseDrawer = () => {
    back()
  }

  useEffect(() => {
    if (isShowDrawer) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isShowDrawer])

  return (
    <section
      className={`fixed left-0 z-50 w-full h-full bg-primary2 bg-opacity-40 flex flex-col justify-end transform transition-all ease-linear duration-300 ${
        isShowDrawer ? ' bottom-0' : 'bottom-[-100%]'
      } `}
    >
      <div className="bg-primary h-[87%] rounded-t-3xl overflow-y-auto pb-10">
        <div className="px-5">
          <div onClick={handleCloseDrawer} className="border-primary2 border-b-3 mt-4 mx-auto w-9"></div>
          <div className="my-7 flex items-center justify-between">
            <p className="text-white font-bold">Filter</p>
            <button className="text-[#AF7500] font-bold">Reset</button>
          </div>
          <FilterBody categories={categories} />
        </div>
      </div>
    </section>
  )
}

export default FilterWrapper
