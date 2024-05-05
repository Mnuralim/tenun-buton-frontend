import React from 'react'
import * as Icons from '@/components/icons'

const ReviewCard = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  data?: any
) => {
  return (
    <div
      id={`${props.key}`}
      className="bg-[#F3F3F3] w-full rounded-[5px] p-5 flex gap-3 shadow-custom-shadow cursor-pointer"
      {...props}
    >
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
        <p className="my-3 text-justify text-[#393939] line-clamp-3">
          Ut enim ad minim veniam, quis nostrud exercitation ullamcoUt enim ad minim veniam. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. In, sunt. Inventore amet blanditiis itaque, totam reiciendis error beatae
          asperiores veritatis?
        </p>
        <div className="flex items-center gap-2">
          <Icons.ThumbUpIcon />
          <p className="text-[#393939] font-bold">Membantu</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
