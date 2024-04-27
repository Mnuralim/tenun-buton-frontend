import React from 'react'
import ResetPasswordForm from '@/components/reset-password/form'

interface Props {
  params: {
    token: string
  }
}

const Page = ({ params }: Props) => {
  return (
    <section className="w-full h-screen flex items-center flex-col justify-center">
      <div className="w-full lg:max-w-[30%] px-5">
        <div className="flex flex-col items-center gap-5 justify-center border border-black/50 rounded-xl py-5 px-7">
          <h1 className="font-bold text-2xl">Reset password</h1>
          <ResetPasswordForm token={params.token} />
        </div>
      </div>
    </section>
  )
}

export default Page
