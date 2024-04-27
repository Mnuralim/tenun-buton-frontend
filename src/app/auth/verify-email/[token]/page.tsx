import React from 'react'
import * as fetch from '@/lib/fetch'
import * as Icons from '@/components/icons'
import Link from 'next/link'

interface Props {
  params: {
    token: string
  }
}

const Page = async ({ params }: Props) => {
  const response = await fetch.verifyEmail(params.token)
  if (!response.ok) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col gap-3 items-center">
          <Icons.FailedIcon
            props={{
              svgProps: {
                className: 'w-20 h-20',
              },
              pathProps: {
                className: 'fill-danger-600',
              },
            }}
          />
          <h1 className="font-semibold text-xl">Email gagal Terverifikasi</h1>
          <p>Alamat email kamu gagal terverifikasi.</p>
          <Link href={'/auth/login'} className="py-2 px-5 bg-primary text-white rounded-md">
            Coba lagi nanti
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 items-center">
        <Icons.CheckIcon
          props={{
            svgProps: {
              className: 'w-20 h-20',
            },
            pathProps: {
              className: 'fill-success-600',
            },
          }}
        />
        <h1 className="font-semibold text-xl">Email Terverifikasi</h1>
        <p>Alamat email kamu sukses terverifikasi.</p>
        <Link href={'/auth/login'} className="py-2 px-5 bg-primary text-white rounded-md">
          Kembali ke halaman login
        </Link>
      </div>
    </section>
  )
}

export default Page
