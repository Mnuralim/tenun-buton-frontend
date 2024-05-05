import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import * as Icons from '@/components/icons'

interface Props {
  showDetailReview: boolean
  setShowDetailReview: React.Dispatch<React.SetStateAction<boolean>>
}
const DetailReview = ({ setShowDetailReview, showDetailReview }: Props) => {
  const detailReviewRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (showDetailReview) {
      document.body.classList.add('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [showDetailReview])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (detailReviewRef.current && !detailReviewRef.current.contains(event.target as Node)) {
        setShowDetailReview(false)
      }
    }

    if (showDetailReview) {
      document.addEventListener('mousedown', handleOutsideClick)
    }
  }, [showDetailReview])

  return showDetailReview ? (
    <div className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-50 z-[100]">
      <div
        ref={detailReviewRef}
        className="bg-primary2 max-w-5xl w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full lg:h-3/4 rounded shadow-custom-shadow grid gap-y-5 lg:grid-cols-2 overflow-hidden"
      >
        <div>
          <Image
            src="https://ik.imagekit.io/wridvl3du/tenunbuton/clucnkjmu0002lk9q0uc23suz/product/no-brand_no-brand_full01.jpg-clucnkjmu0002lk9q0uc23suz-1711877723896_I1VOvF88P"
            alt="review"
            width={300}
            height={300}
            className="object-cover object-center w-full h-full aspect-square"
          />
        </div>
        <div className=" w-full rounded-[5px] p-5 flex gap-3 cursor-pointer overflow-y-auto">
          <div className="w-7 h-7 lg:w-10 lg:h-10 aspect-square bg-primary rounded-full flex place-items-center justify-center">
            <Icons.PersonIcon
              props={{
                svgProps: {
                  className: 'w-4 h-4 lg:w-6 lg:h-6',
                },
              }}
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <p className="text-[#393939] font-bold lg:text-xl">John Doe</p>
              <p className="text-[#393939] text-xs lg:text-sm">14/03/2024</p>
            </div>
            <div className="flex items-center">
              <Icons.StarIcon className="w-6 h-6" />
              <Icons.StarIcon className="w-6 h-6" />
              <Icons.StarIcon className="w-6 h-6" />
              <Icons.StarIcon className="w-6 h-6" />
              <Icons.StarIcon className="w-6 h-6" />
            </div>
            <p className="my-3 text-justify text-[#393939]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamcoUt enim ad minim veniam. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. In, sunt. Inventore amet blanditiis itaque, totam reiciendis error
              beatae asperiores veritatis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum in nam
              reprehenderit quas fugit quia eveniet, et atque itaque assumenda natus minima sapiente, ullam labore
            </p>
            <div className="flex items-center gap-2 pb-5">
              <Icons.ThumbUpIcon />
              <p className="text-[#393939] font-bold">Membantu</p>
            </div>
            <button
              className="mb-10 bg-primary py-2 px-5 rounded text-white text-sm"
              onClick={() => setShowDetailReview(false)}
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default DetailReview
