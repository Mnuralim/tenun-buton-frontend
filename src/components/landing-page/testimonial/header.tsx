'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'
const TestimonialHeader = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      variants={slideIn('left', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
    >
      <h1 className="font-bold text-sm text-center leading-[16.79px] text-primary md:text-[60px] md:leading-[71.94px] mb-3 md:mb-5 lg:text-start">
        Apa Kata Mereka?
      </h1>
      <p className="text-center text-[#5D5D5D] text-xs leading-[14.39px] px-2 lg:text-justify md:text-xl lg:max-w-[70%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed
        do eiusmod
      </p>
    </motion.div>
  )
}

export default TestimonialHeader
