'use client'
import React from 'react'
import Description from './description'
import Carousel from './carousel'

const Index = () => {
  return (
    <section id="home" className="grid lg:grid-cols-2 justify-center gap-8  items-center max-w-7xl w-full mx-auto px-5">
      <Description />
      <Carousel />
    </section>
  )
}

export default Index
