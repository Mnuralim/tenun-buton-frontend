'use client'
import React, { useState } from 'react'
import * as Icons from '@/components/icons'
import Image from 'next/image'
import ReviewCard from './review-card'
import NextLink from 'next/link'
import { Link } from 'react-scroll'
import DetailReview from './detail-review'

interface Props {
  product: IProduct
}

const Review = ({ product }: Props) => {
  const [totalImages, setTotalImages] = useState<number>(3)
  const [totalReviews, setTotalReviews] = useState<number>(3)
  const [showDetailReview, setShowDetailReview] = useState<boolean>(false)
  const reviewImages = [{ id: product.thumbnail, url: product.thumbnail }, ...product.images, ...product.images]
  console.log(reviewImages)
  return (
    <section className="max-w-7xl mx-auto px-3 mt-10 lg:px-5">
      <h1 className="text-primary font-bold text-lg lg:text-3xl">Ulasan pelanggan</h1>
      <div className="flex items-center mt-1 mb-3 lg:hidden">
        <Icons.StarIcon className="w-5 h-5" />
        <span className="font-bold text-[#393939]">4.7</span>
        <span className="text-[#9B9B9B] text-xs mx-1">(15 rating)</span>
        <span>.</span>
        <span className="text-[#9B9B9B] text-xs ml-1">(150 ulasan)</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 lg:mt-7">
        <div className="lg:p-5 lg:shadow-custom-shadow lg:border h-fit lg:border-black/10 rounded-2xl ">
          <div className="w-full bg-[#F3F3F3] grid-cols-2 hidden lg:grid rounded-2xl p-7 mb-8">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <Icons.StarIcon className="w-12 h-12" />
                <p className="font-bold text-[#393939] text-7xl">
                  4.7<span className="text-3xl font-normal">/5</span>
                </p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <p className="text-[#393939]">Pembeli merasa puas</p>
                <Icons.InfoIcon />
              </div>
              <p className="text-center w-full text-[#C6C6C6]">15 ulasan</p>
            </div>
            <div className="flex items-center flex-col justify-center">
              <div className="grid grid-cols-12 gap-1 items-center">
                <div className="col-span-1">
                  <Icons.StarIcon className="w-8 h-8" />
                </div>
                <div className="col-span-1 text-center text-[#393939]">5</div>
                <div className="col-span-9 border border-[#393939] h-2 rounded-2xl bg-primary2">
                  <div className="h-full bg-[#AF7500] w-3/4 rounded-2xl border-r border-r-black"></div>
                </div>
                <div className="col-span-1 text-center text-[#393939]">8</div>
              </div>
              <div className="grid grid-cols-12 gap-1 items-center">
                <div className="col-span-1">
                  <Icons.StarIcon className="w-8 h-8" />
                </div>
                <div className="col-span-1 text-center text-[#393939]">4</div>
                <div className="col-span-9 border border-[#393939] h-2 rounded-2xl bg-primary2">
                  <div className="h-full bg-[#AF7500] w-5/6 rounded-2xl border-r border-r-black"></div>
                </div>
                <div className="col-span-1 text-center text-[#393939]">10</div>
              </div>
              <div className="grid grid-cols-12 gap-1 items-center">
                <div className="col-span-1">
                  <Icons.StarIcon className="w-8 h-8" />
                </div>
                <div className="col-span-1 text-center text-[#393939]">3</div>
                <div className="col-span-9 border border-[#393939] h-2 rounded-2xl bg-primary2">
                  <div className="h-full bg-[#AF7500] w-1/4 rounded-2xl border-r border-r-black"></div>
                </div>
                <div className="col-span-1 text-center text-[#393939]">3</div>
              </div>
              <div className="grid grid-cols-12 gap-1 items-center">
                <div className="col-span-1">
                  <Icons.StarIcon className="w-8 h-8" />
                </div>
                <div className="col-span-1 text-center text-[#393939]">2</div>
                <div className="col-span-9 border border-[#393939] h-2 rounded-2xl bg-primary2">
                  <div className="h-full bg-[#AF7500] w-1/6 rounded-2xl border-r border-r-black"></div>
                </div>
                <div className="col-span-1 text-center text-[#393939]">2</div>
              </div>
              <div className="grid grid-cols-12 gap-1 items-center">
                <div className="col-span-1">
                  <Icons.StarIcon className="w-8 h-8" />
                </div>
                <div className="col-span-1 text-center text-[#393939]">1</div>
                <div className="col-span-9 border border-[#393939] h-2 rounded-2xl bg-primary2">
                  <div className="h-full bg-[#AF7500] w-0 rounded-2xl border-r border-r-black"></div>
                </div>
                <div className="col-span-1 text-center text-[#393939]">0</div>
              </div>
            </div>
          </div>
          <p className="font-bold text-[#393939] text-sm mb-1 lg:text-xl">
            Foto dari pembeli <span className="font-normal lg:text-lg">({reviewImages.length})</span>
          </p>
          <div className="grid grid-cols-4 gap-3">
            {reviewImages.slice(0, totalImages).map((image) => (
              <Image
                key={image.id}
                src={image.url}
                alt={image.url}
                width={300}
                height={300}
                className="w-full aspect-[4/3] border border-black rounded-[5px]"
              />
            ))}
            {reviewImages.length > 3 && totalImages < reviewImages.length ? (
              <div onClick={() => setTotalImages(reviewImages.length)} className="relative cursor-pointer">
                <Image
                  src={reviewImages[3].url}
                  alt={reviewImages[3].url}
                  width={300}
                  height={300}
                  className="w-full aspect-[4/3] border border-black rounded-[5px]"
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white rounded-[5px] bg-opacity-50">
                  <p className="z-10 font-bold text-[#393939] text-sm">+{reviewImages.length - 3}</p>
                  <p className="z-10 font-bold text-[#393939] text-sm">Lainnya</p>
                </div>
              </div>
            ) : null}
          </div>
          {totalImages > 3 ? (
            <button onClick={() => setTotalImages(3)} className="text-[#393939] text-sm">
              Tampilkan lebih sedikit
            </button>
          ) : null}
        </div>
        <div className="flex flex-col gap-4">
          {Array.from({ length: totalReviews }).map((_, index) => (
            <ReviewCard key={index} onClick={() => setShowDetailReview(true)} />
          ))}

          <button onClick={() => setTotalReviews(totalReviews + 3)} className="md:flex items-center gap-1 justify-end">
            <p className="text-[#727272] font-bold text-sm md:text-base lg:text-lg">Lihat semua</p>
            <Icons.ArrowBackIcon
              props={{
                svgProps: {
                  className: 'w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rotate-180',
                },
                pathProps: {
                  className: 'fill-[#727272]',
                },
              }}
            />
          </button>
        </div>
      </div>
      <DetailReview setShowDetailReview={setShowDetailReview} showDetailReview={showDetailReview} />
    </section>
  )
}

export default Review
