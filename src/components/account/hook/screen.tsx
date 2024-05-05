'use client'
import React, { useEffect, useState } from 'react'

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{ width: number | null; height: number | null }>({
    width: null,
    height: null,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}

export default useScreenSize
