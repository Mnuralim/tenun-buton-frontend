import React from 'react'
import TestimonialBody from './body'
import TestimonialHeader from './header'

const Index = () => {
  return (
    <section
      id="testimoni"
      className="mt-10 md:mt-20 px-5 mx-auto max-w-7xl mb-20 w-full grid lg:grid-cols-2 gap-3 md:gap-8 items-center"
    >
      <TestimonialHeader />
      <TestimonialBody />
    </section>
  )
}

export default Index
