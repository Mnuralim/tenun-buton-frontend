'use client'
import React from 'react'
import * as Icons from '@/components/icons'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'

const Index = () => {
  return (
    <motion.section
      variants={slideIn('', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="why-us"
      className="w-full bg-primary mt-80 lg:mt-72"
    >
      <div className=" flex flex-col justify-center items-center gap-1 py-3 lg:mt-28 lg:gap-10 lg:py-10 w-full max-w-7xl px-5 mx-auto ">
        <h1 className="font-bold text-[#F3F3F3] text-sm leading-[16.79px] md:text-xl lg:text-[40px] lg:leading-[47.96px]">
          Mengapa harus kami?
        </h1>
        <div className="grid grid-cols-3 gap-3 md:gap-8 lg:gap-16">
          <div>
            <div className="flex items-center gap-2 lg:mb-5">
              <Icons.ShoppingBagIcon className="lg:w-10 h-10" />
              <p className="font-bold text-white text-[9px] leading-[9px] tracking-[7%] lg:text-2xl md:text-base  lg:leading-[28.78px]">
                Kemudahan Berbelanja
              </p>
            </div>
            <p className="text-[5px] text-justify leading-[6px] text-[#F3F3F3] lg:text-lg md:text-[10px] md:leading-[14px] lg:leading-[21.58px]">
              Kami memahami bahwa pengalaman berbelanja yang mudah dan menyenangkan sangat berarti bagi Anda. Oleh
              karena itu, kami telah merancang platform ini agar Anda dapat menemukan dan memilih kain berkualitas
              tinggi dengan cepat dan tanpa kerumitan.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2  lg:mb-5">
              <Icons.TimerIcon className="lg:w-10 h-10" />
              <p className="font-bold text-white text-[9px] leading-[9px] tracking-[7%] lg:text-2xl md:text-base lg:leading-[28.78px] ">
                Layanan 24 jam
              </p>
            </div>
            <p className="text-[5px] text-justify leading-[6px] text-[#F3F3F3] lg:text-lg md:text-[10px] md:leading-[14px] lg:leading-[21.58px]">
              Tim layanan pelanggan kami selalu siap membantu setiap pertanyaan atau kebutuhan Anda. Dengan
              TenunButon.com, berbelanja bukan lagi tugas yang merepotkan, melainkan pengalaman yang menyenangkan dan
              efisien setiap kali Anda mengunjungi situs kami.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 lg:mb-5">
              <Icons.VerifiedIcon className="lg:w-10 h-10" />
              <p className="font-bold text-white text-[9px] leading-[9px] tracking-[7%] lg:text-2xl md:text-base lg:leading-[28.78px]">
                Terpercaya
              </p>
            </div>
            <p className="text-[5px] text-justify leading-[6px] text-[#F3F3F3] lg:text-lg md:text-[10px] md:leading-[14px] lg:leading-[21.58px]">
              Website kami adalah pilihan andal karena kami selalu siap melayani Anda dengan baik, kapan pun Anda
              membutuhkannya
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Index
