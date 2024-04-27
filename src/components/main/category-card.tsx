import { Image } from '@nextui-org/react'
import NextImage from 'next/image'
import React from 'react'

interface Props {
  thumbnail: string
  name: string
}

const CategoryCard = ({ name, thumbnail }: Props) => {
  return (
    <div className="flex shadow-md border-2 my-3 border-black/10 rounded-md items-center">
      <div className="p-1 lg:p-3">
        <Image
          as={NextImage}
          src={thumbnail}
          alt="category"
          width={100}
          height={100}
          classNames={{
            img: 'w-[40px] md:w-[55px] lg:w-[80px] h-auto object-cover rounded-sm',
          }}
        />
      </div>
      <div className="w-full">
        <p className="text-primary text-[10px] text-center font-bold md:text-base lg:text-2xl">{name}</p>
      </div>
    </div>
  )
}

export default CategoryCard
