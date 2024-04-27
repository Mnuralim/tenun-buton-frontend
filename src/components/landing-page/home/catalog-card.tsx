import React from 'react'
import * as Icons from '@/components/icons'

interface Props {
  name: string
  description: string
  image: string
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

const CatalogCard = ({ description, image, name, height, width }: Props) => {
  return (
    // <div className="border-primary border-2 bg-primary2 catalog-shadows relative rounded-xl w-[151px] h-[227px] flex flex-col gap-1 items-center p-3 lg:w-[246px] lg:h-[400px]">
    //   <div className="w-full h-full">
    //     <Image src={image} alt={name} className="object-cover w-full h-full" width={'100%'} height={'100%'} />
    //   </div>
    //   <h1 className="text-xs font-bold text-primary lg:text-xl lg:self-start">{name}</h1>
    //   <p className="text-[#5D5D5d] text-[7px] text-center leading-[8.39px] lg:text-sm lg:self-start lg:text-start lg:leading-[16.79px]">
    //     {description}
    //   </p>
    //   <div className="absolute -top-2 -right-[6px] z-10">
    //     <div className="w-[27.27px] h-[27.27px] lg:w-[50px] lg:h-[50px] bg-primary rounded-full flex items-center justify-center border-2 border-black">
    //       <Icons.ArrowUpward className="w-[13.13px] h-[13.13px] lg:w-6 lg:h-6" />
    //     </div>
    //   </div>
    // </div>
    <div
      className={`border-primary border-2 bg-primary2 catalog-shadows relative rounded-xl w-full h-auto aspect-[33/40] flex flex-col gap-1 items-center p-3 `}
    >
      <div
        className="w-full h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      ></div>
      <h1 className="text-xs font-bold text-primary lg:text-xl lg:self-start">{name}</h1>
      <p className="text-[#5D5D5d] text-[7px] text-center leading-[8.39px] lg:text-sm lg:self-start lg:text-start lg:leading-[16.79px]">
        {description}
      </p>
      <div className="absolute -top-2 -right-[6px] z-10">
        <div className="w-[27.27px] h-[27.27px] lg:w-[50px] lg:h-[50px] bg-primary rounded-full flex items-center justify-center border-2 border-black">
          <Icons.ArrowUpward className="w-[13.13px] h-[13.13px] lg:w-6 lg:h-6" />
        </div>
      </div>
    </div>
  )
}

export default CatalogCard
