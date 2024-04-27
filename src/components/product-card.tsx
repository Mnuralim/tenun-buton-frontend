import React from 'react'
import * as Icons from '@/components/icons'

interface Props {
  name: string
  thumbnail: string
  ratting: number
  price: number
  isBookmarked?: boolean
  width?: {
    sm?: string
    md?: string
    lg?: string
    xl?: string
  }
  height?: {
    sm?: string
    md?: string
    lg?: string
    xl?: string
  }
}

const ProductCard = ({ name, price, thumbnail, isBookmarked, height, width }: Props) => {
  return (
    <div
      className={`w-[${width?.sm}] aspect-[5/5] border-2 md:w-[${width?.md || width?.sm}] md:h-[${
        height?.md || height?.sm
      }] border-primary rounded-[9px] product-card-shadows border-b-8 md:border-3 border-b-primary lg:border-b-[18px] lg:w-[${
        width?.lg || width?.md || width?.sm
      }] lg:h-[${height?.lg || height?.md || height?.sm}] p-2 md:p-3`}
    >
      <div className="flex justify-end mb-1">
        {isBookmarked ? (
          <Icons.BookmarkIcon className="lg:w-[30px] lg:h-[30px]" />
        ) : (
          <Icons.BookmarkBorderIcon className="lg:w-[30px] lg:h-[30px]" />
        )}
      </div>
      <div
        className="w-full h-full bg-cover bg-no-repeat bg-center rounded-md"
        style={{
          backgroundImage: `url('${thumbnail}')`,
        }}
      ></div>
      <div className="mt-2 md:mt-3">
        <div className="bg-[#4B4B4B] flex items-center w-fit bg-opacity-10">
          <Icons.StarIcon className="lg:w-6 lg:h-6" />
          <p className="font-bold text-[7px] leading-[8.39px] lg:text-base lg:leading-[19.18px]">{4.5}</p>
        </div>
        <h1 className="font-bold leading-[10.79px] text-[9px] mt-1 lg:text-[25px] lg:leading-[29.98px] line-clamp-1">
          {name}
        </h1>
        <p className="font-bold leading-[9.59px] text-[8px] text-[#1C8214] lg:text-[25px] lg:leading-[29.98px]">
          IDR {price}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
