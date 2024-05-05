import React from 'react'
import * as Icons from '@/components/icons'
import Link from 'next/link'

interface Props {
  product: IProduct
}

const Detail = ({ product }: Props) => {
  return (
    <div className="rounded-b-2xl shadow-custom-shadow md:shadow-none md:rounded-b-none rotate-180 md:rotate-0">
      <div className="rotate-180 md:rotate-0 px-3 pt-5 md:pt-3 lg:pt-0">
        <div className="hidden md:flex items-center gap-2">
          <Link href={'/main'} className="text-primary text-base">
            Beranda
          </Link>
          <Icons.ArrowBackIcon
            props={{
              svgProps: {
                className: 'w-3 h-3 rotate-180',
              },
            }}
          />
          <Link href={'/main/explore'} className="text-primary text-base">
            Explore
          </Link>
          <Icons.ArrowBackIcon
            props={{
              svgProps: {
                className: 'w-3 h-3 rotate-180',
              },
            }}
          />
          <Link href={`/main/explore/${product.id}`} className="text-primary text-base font-bold line-clamp-1">
            {product.name}
          </Link>
        </div>
        <div className="flex flex-col md:flex-col-reverse">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-[#393939] text-2xl lg:text-4xl">{product.name}</h1>
              <div className="items-center gap-2 hidden md:flex">
                <Icons.BookmarkBorderIcon
                  props={{
                    svgProps: {
                      className: 'w-5 h-5 lg:w-7 lg:h-7',
                    },
                    pathProps: {
                      className: 'fill-[#393939]',
                    },
                  }}
                />
                <Icons.ShareIcon
                  props={{
                    svgProps: {
                      className: 'w-5 h-5 lg:w-7 lg:h-7',
                    },
                    pathProps: {
                      className: 'fill-[#393939]',
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold text-[#393939] lg:text-lg">Terjual</p>
              <span className="text-[#9B9B9B] text-xs lg:text-sm">20</span>
              <span className="font-bold text-[#393939] lg:text-lg">.</span>
              <div className="flex items-center">
                <Icons.StarIcon className="w-6 h-6" />
                <span className="font-bold text-[#393939] lg:text-lg">4.7</span>
              </div>
              <span className="text-[#9B9B9B] text-xs lg:text-sm">(15 rating)</span>
              <span className="font-bold text-[#393939] lg:text-lg">.</span>
              <span className="font-bold text-[#393939] lg:text-lg">Ulasan</span>
              <span className="text-[#9B9B9B] text-xs lg:text-sm">(5)</span>
            </div>
            <p className="py-7 text-lg text-[#1C8214] font-bold lg:text-2xl">IDR {product.price}</p>
            <div>
              <h2 className="font-bold text-base text-[#393939] lg:text-xl">Deskripsi produk</h2>
              <p className="text-justify text-sm text-[#393939] mt-2 lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. e magna aliqua. magna aliqua. magna aliqua. magna aliqua. magna aliqua.
              </p>
            </div>
            <div className="flex items-center pt-5 pb-7 gap-2">
              <p className="font-bold text-base text-[#393939] lg:text-xl">Kategori :</p>
              <Link
                href={'/'}
                className="py-1 border border-primary rounded-[5px] px-3 text-sm lg:text-base text-[#393939]"
              >
                {product.category.name}
              </Link>
            </div>
          </div>
          <Link href={'/'} className="flex items-center gap-2 py-5 border-y border-y-[#B0B0B0] md:border-none">
            <div className="rounded-full bg-primary aspect-square flex items-center justify-center">
              <Icons.StorefrontIcon
                props={{ svgProps: { className: 'w-6 h-6 m-3 lg:w-8 lg:h-8' }, pathProps: { className: 'fill-white' } }}
              />
            </div>
            <div>
              <p className="text-[#393939] font-bold text-lg leading-[21.58px] md:text-xl">
                {product.seller.auth.username}
              </p>
              <div className="flex items-center">
                <Icons.StarIcon className="w-5 h-5" />
                <span className="font-bold text-[#393939]">4.7</span>
                <span className="text-[#9B9B9B] text-xs ml-1">(15 rating)</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Detail
