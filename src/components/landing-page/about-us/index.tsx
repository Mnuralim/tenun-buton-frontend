'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'

const Index = () => {
  return (
    <motion.section
      variants={slideIn('right', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="about-us"
      className="mt-10 md:mt-20 px-5 mx-auto max-w-7xl w-full"
    >
      <h1 className="mb-7 md:mb-10 font-bold text-sm text-center leading-[16.79px] text-primary md:text-[40px]">
        Tentang Kami
      </h1>
      <div className="relative about-us-shadows rounded-[10px] overflow-hidden">
        <div className="w-full bg-primary flex flex-col h-[187px] min-h-[200px] rounded-[10px] md:h-[500px]">
          <div className="w-full h-[70%] bg-center bg-cover bg-about-us z-20"></div>
          <div className="w-full h-[30%] flex items-center z-20">
            <p className="text-center text-[#F3F3F3] text-[7px] leading-[8.39px] px-7 md:text-lg md:leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. e magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-50"></div>
      </div>
    </motion.section>
  )
}

export default Index
