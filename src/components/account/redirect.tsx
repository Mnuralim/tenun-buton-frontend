'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useScreenSize from './hook/screen'

const Redirect = () => {
  const { replace } = useRouter()
  const screenSize = useScreenSize()

  useEffect(() => {
    if (screenSize.width) {
      if (screenSize.width >= 768) {
        replace('/main/account/profile')
      }
    }
  }, [screenSize])

  return <div></div>
}

export default Redirect
