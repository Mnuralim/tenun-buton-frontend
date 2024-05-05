import React from 'react'
import * as Icons from '@/components/icons'
import Link from 'next/link'

interface Props {
  id: string
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

const ProductCard = ({ name, price, thumbnail, isBookmarked, height, width, id }: Props) => {
  return (
    <Link
      href={`/main/explore/${id}`}
      className={`w-[${width?.sm}] inline-block aspect-[5/5] border-2 md:w-[${width?.md || width?.sm}] md:h-[${
        height?.md || height?.sm
      }] border-primary rounded-[9px] product-card-shadows border-b-8 md:border-3 border-b-primary lg:border-b-[18px] lg:w-[${
        width?.lg || width?.md || width?.sm
      }] lg:h-[${height?.lg || height?.md || height?.sm}] p-2 md:p-3`}
    >
      <div className="flex justify-end mb-1">
        {isBookmarked ? (
          <Icons.BookmarkIcon
            props={{
              svgProps: {
                className: 'w-5 h-5 lg:w-[30px] lg:h-[30px]',
              },
              pathProps: {
                className: 'fill-primary',
              },
            }}
          />
        ) : (
          <Icons.BookmarkBorderIcon
            props={{
              svgProps: {
                className: 'w-5 h-5 lg:w-[30px] lg:h-[30px]',
              },
              pathProps: {
                className: 'fill-primary',
              },
            }}
          />
        )}
      </div>
      <div
        className="w-full bg-cover bg-no-repeat aspect-[5/3] bg-center rounded-md relative"
        style={{
          backgroundImage: `url('${thumbnail}')`,
        }}
      >
        <button className="absolute bottom-[-14px] w-7 lg:-bottom-7 rounded-full h-7 lg:w-14 lg:h-14 bg-primary2  left-1/2 transform -translate-x-1/2 p-1">
          <span className="flex justify-center w-full h-full border border-black rounded-full bg-primary place-items-center">
            <Icons.ShoppingCartIcon
              props={{
                svgProps: {
                  className: 'w-2 h-2 lg:w-5 lg:h-5',
                },
                pathProps: {
                  className: 'fill-white',
                },
              }}
            />
          </span>
        </button>
      </div>
      <div className="mt-2 md:mt-3">
        <div className="bg-[#4B4B4B] flex items-center w-fit bg-opacity-10 px-1">
          <Icons.StarIcon className="w-4 h-4 lg:w-6 lg:h-6" />
          <p className="font-bold text-xs lg:text-base lg:leading-[19.18px]">{4.5}</p>
        </div>
        <h1 className="font-bold  text-xs mt-1 lg:text-[25px] lg:leading-[29.98px] line-clamp-1">{name}</h1>
        <p className="font-bold  text-xs text-[#1C8214] lg:text-[25px] lg:leading-[29.98px]">IDR {price}</p>
      </div>
    </Link>
  )
}

export default ProductCard
