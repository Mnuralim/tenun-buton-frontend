import React from 'react'
import * as Icons from '@/components/icons'

interface Props {
  title: string
  subtitle: string
}

const FailedNotification = ({ title, subtitle }: Props) => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center gap-3">
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
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>{subtitle}</p>
        {/* <Link href={'/auth/login'} className="px-5 py-2 text-white rounded-md bg-primary">
          Coba lagi nanti
        </Link> */}
      </div>
    </div>
  )
}

export default FailedNotification
