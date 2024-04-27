'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus()

  return (
    <button
      className={`py-2 w-full border  rounded-xl  font-medium ${
        pending
          ? 'bg-primary/20 cursor-not-allowed text-[#FFFFFF] border-primbg-primary/20'
          : 'bg-primary text-[#F3F3F3] border-primary'
      }`}
    >
      {pending ? `${children}...` : children}
    </button>
  )
}

export default SubmitButton
