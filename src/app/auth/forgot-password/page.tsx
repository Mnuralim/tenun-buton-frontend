import Link from 'next/link'
import React from 'react'
import * as Icons from '@/components/icons'
import ForgotPasswordForm from '@/components/forgot-password/form'

const Page = () => {
  return (
    <section className="w-full h-screen flex items-center flex-col justify-center">
      <div className="w-full lg:max-w-[30%] px-5">
        <Link href={'/auth/login'} className="self-start mb-3 flex items-center gap-1">
          <Icons.ArrowBackIcon
            props={{
              svgProps: {
                className: 'w-4 h-4',
              },
            }}
          />
          <span>Kembali</span>
        </Link>
        <div className="flex flex-col items-center gap-5 justify-center border border-black/50 rounded-xl py-5 px-7">
          <h1 className="font-bold text-2xl">Lupa password</h1>
          <ForgotPasswordForm />
        </div>
      </div>
    </section>
  )
}

export default Page
