import React from 'react'
import * as Icons from '@/components/icons'
import Link from 'next/link'

interface Props {
  title: string
  subtitle: string
  loginButton?: boolean
}

const SuccessNotification = ({ title, subtitle, loginButton }: Props) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
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
        <h1 className="font-semibold text-xl">{title}</h1>
        <p>{subtitle}</p>
        {loginButton ? (
          <Link href={'/auth/login'}>
            <button className="bg-primary text-white px-5 py-2 rounded">Login</button>
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default SuccessNotification
