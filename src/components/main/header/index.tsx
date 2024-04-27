'use client'
import React, { useEffect, useState } from 'react'
import MobileNavbar from './mobile-navbar'
import DekstopNavbar from './dekstop-navbar'

interface Props {
  isLoggedIn: boolean
}

const Index = ({ isLoggedIn }: Props) => {
  const [scrolling, setScrolling] = useState<boolean>(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={`sticky top-0 z-50 w-full mx-auto transform transition-all ease-in duration-100  ${
        scrolling ? 'bg-primary2 mobile-nav-shadows' : 'bg-primary'
      }`}
    >
      <MobileNavbar scrolling={scrolling} isLoggedIn={isLoggedIn} />
      <DekstopNavbar scrolling={scrolling} isLoggedIn={isLoggedIn} />
    </header>
  )
}

export default Index
