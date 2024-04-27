import React from 'react'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'

const Description = () => {
  return (
    <motion.div
      variants={slideIn('left', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col px-5 gap-3 md:gap-3 lg:gap-4 items-center lg:items-start mt-10 lg:mt-0"
    >
      <h1 className="font-bold text-primary text-3xl leading-[34.77px] text-center lg:text-start md:text-5xl lg:text-[60px] lg:leading-[107.91px] ">
        TENUN BUTON
      </h1>
      <p className="text-center text-xs text-[#393939] leading-[13.2px] md:max-w-[60%] lg:max-w-full lg:text-xl lg:leading-[23.98px] lg:text-start lg:text-[#5D5D5d]">
        &quot;Berani Melangkah ke Masa Depan, Gaya yang Menceritakan Kisah Anda dengan Keunikan Modern. Selamat datang
        di tenunbuton.com yang tak hanya membeli kain, tetapi juga membeli kisah yang tak terlupakan.&quot;
      </p>
      <div className="mt-4">
        <button className="hidden lg:block text-white bg-primary rounded-[10px] leading-[19.18px] font-bold py-4 px-10">
          Mulai Belanja
        </button>
      </div>
    </motion.div>
  )
}

export default Description
