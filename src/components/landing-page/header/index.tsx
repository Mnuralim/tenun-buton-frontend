'use client'
import React from 'react'
import MobileNavbar from './mobile-navbar'
import DekstopNavbar from './dekstop-navbar'
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'
import { usePathname } from 'next/navigation'

const Index = () => {
  const pathname = usePathname()
  if (pathname.startsWith('/auth') || pathname.startsWith('/main')) {
    return null
  }
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sticky top-0 z-50 w-full mx-auto bg-primary2 mobile-nav-shadows"
    >
      <MobileNavbar />
      <DekstopNavbar />
    </motion.header>
  )
}

export default Index
