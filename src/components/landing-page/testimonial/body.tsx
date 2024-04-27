'use client'
import Image from 'next/image'
import React from 'react'
import * as Icons from '@/components/icons'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'

const TestimonialBody = () => {
  return (
    <motion.div
      variants={slideIn('right', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-[60%] md:max-w-[80%] lg:max-w-full mx-auto"
    >
      <div className="border-2 border-primary w-full rounded-[10px] flex justify-between items-center overflow-hidden ">
        <div className="w-[55%] px-2 py-2 flex flex-col md:py-8 md:px-10">
          <p className="text-[7px] leading-[8.39px] text-[#5D5D5D] text-justify flex flex-col md:text-xl">
            <span className="text-primary text-[25px] leading-[20px] font-bold self-start md:text-[60px]">“</span>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim v Ut enim ad minim Ut enim ad minim
            <span className="text-primary text-[25px] leading-[20px] font-bold self-end md:text-[60px]">”</span>
          </p>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="bg-primary w-[10px] h-[10px] rounded-full overflow-hidden md:w-10 md:h-10">
              <Image
                src={'/img/union.png'}
                alt="testimoni"
                width={20000}
                height={20000}
                className="w-[10px] h-[10px] md:w-10 md:h-10"
              />
            </div>
            <p className="font-bold text-primary text-[6px] leading-[7.19px] md:text-xl">John Doe</p>
          </div>
        </div>
        <div className="w-[45%] flex justify-end">
          <Image
            src={'/img/pictexp5.png'}
            alt="testimoni"
            width={20000}
            height={20000}
            className="w-auto h-full lg:h-[395px] md:h-[300px] aspect-[1/1.53] "
          />
        </div>
      </div>
      <div className="w-full mt-3 md:mt-5 flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Icons.ArrowLeft className="lg:w-[40px] lg:h-[40px]" />
          <Icons.ArrowRight className="lg:w-[40px] lg:h-[40px]" />
        </div>
        <div className="border-1 border-primary w-full"></div>
        <p className="font-bold text-primary md:text-[40px]">01</p>
      </div>
    </motion.div>
  )
}

export default TestimonialBody
