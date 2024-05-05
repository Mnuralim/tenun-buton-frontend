'use client'
import React, { useState } from 'react'
import * as Icons from '@/components/icons'
import Image from 'next/image'

interface Props {
  thumbnail: string
  images: [
    {
      id: string
      url: string
    }
  ]
}

const ProductImage = ({ images, thumbnail }: Props) => {
  const [currentImage, setCurrentImage] = useState(thumbnail)
  const allImages = [{ id: thumbnail, url: thumbnail }, ...images]

  const handleThumbnailClick = (url: string) => {
    setCurrentImage(url)
  }

  const handleNextClick = () => {
    const currentIndex = allImages.findIndex((image) => image.url === currentImage)
    if (currentIndex < allImages.length - 1) {
      setCurrentImage(allImages[currentIndex + 1].url)
    }
  }

  const handlePrevClick = () => {
    const currentIndex = allImages.findIndex((image) => image.url === currentImage)
    if (currentIndex > 0) {
      setCurrentImage(allImages[currentIndex - 1].url)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full py-5 px-7 lg:w-5/6 lg:gap-3 aspect-square lg:aspect-[5/4.3] lg:shadow-custom-shadow lg:border lg:border-black/10 rounded-2xl">
        <div className="flex-col hidden gap-2 lg:flex lg:col-span-1">
          <div className="flex flex-col h-full gap-2">
            {allImages.map((image) => (
              <div
                onClick={() => handleThumbnailClick(image.url)}
                key={image.id}
                className="overflow-hidden aspect-square bg-black border-black rounded-[10px] cursor-pointer"
              >
                <Image
                  width={300}
                  height={300}
                  src={image.url}
                  alt={image.id}
                  className={`object-cover object-center w-full h-full border transform transition-all ease-linear duration-200 ${
                    currentImage !== image.url ? 'opacity-50' : ''
                  } `}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center w-full gap-1">
            <div
              onClick={handlePrevClick}
              className="flex items-center justify-center w-full h-10 border rounded-md cursor-pointer shadow-custom-shadow border-black/10"
            >
              <Icons.ArrowBackIosIcon />
            </div>
            <div
              onClick={handleNextClick}
              className="flex items-center justify-center w-full h-10 border rounded-md cursor-pointer shadow-custom-shadow border-black/10"
            >
              <Icons.ArrowBackIosIcon
                props={{
                  svgProps: {
                    className: ' transform rotate-180 ',
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="relative w-full h-full col-span-1 lg:col-span-4 bg-black rounded-[10px]">
          <Image
            src={currentImage}
            alt={currentImage}
            width={300}
            height={300}
            className="object-cover object-center w-full h-full lg:h-full border border-black rounded-[10px] opacity-95"
          />
          <div className="absolute cursor-pointer bottom-1 left-1">
            <Icons.ZoomOutMapIcon props={{ svgProps: { className: 'w-8 h-8' } }} />
          </div>
          <button
            onClick={handlePrevClick}
            className="absolute cursor-pointer top-1/2 transform -translate-y-1/2 left-1 lg:hidden"
          >
            <Icons.ArrowLeft className="w-8 h-8" />
          </button>
          <button
            onClick={handleNextClick}
            className="absolute cursor-pointer top-1/2 transform -translate-y-1/2 right-1 lg:hidden"
          >
            <Icons.ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </div>
      <div className="lg:hidden mx-auto flex justify-center items-center w-[37px] h-5 bg-[#868686] rounded-[9px] text-primary2 font-bold text-xs">
        {allImages.findIndex((image) => image.url === currentImage) + 1}/{allImages.length}
      </div>
      <div className="flex items-center gap-1 lg:hidden mx-auto justify-center mt-4">
        {allImages.map((image) => (
          <button
            onClick={() => handleThumbnailClick(image.url)}
            key={image.id}
            className={`w-2 h-2 rounded-full ${image.url === currentImage ? 'bg-[#393939]' : ' bg-primary'}`}
          ></button>
        ))}
      </div>
      <div className="grid grid-cols-8 gap-3 w-full lg:gap-8 px-3 h-auto mt-5 lg:px-0 lg:w-5/6">
        <div className="col-span-3 grid grid-cols-3 items-center">
          <button className="aspect-square shadow-custom-shadow flex items-center h-full border border-black/10 rounded-[5px] justify-center">
            <Icons.RemoveIcon
              props={{
                svgProps: {
                  className: 'lg:w-8 lg:h-8',
                },
              }}
            />
          </button>
          <input
            type="text"
            value={1}
            className="aspect-auto shadow-custom-shadow flex items-center h-full border border-black/10 rounded-[5px] justify-center bg-transparent text-center outline-none font-bold lg:text-lg"
          />
          <button className="aspect-square shadow-custom-shadow flex items-center h-full border border-black/10 rounded-[5px] justify-center">
            <Icons.AddIcon
              props={{
                svgProps: {
                  className: 'lg:w-8 lg:h-8',
                },
              }}
            />
          </button>
        </div>
        <button className="col-span-5 bg-primary rounded-[5px] text-white font-bold text-sm lg:text-xl">
          Tambah ke keranjang
        </button>
      </div>
    </div>
  )
}

export default ProductImage
