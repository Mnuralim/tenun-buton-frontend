import Link from 'next/link'
import React from 'react'
import * as Icons from '@/components/icons'
import { auth } from '@/auth'
import { getUserById } from '@/lib/fetch/user'
import Image from 'next/image'

const Identity = async () => {
  const session = await auth()
  const user = await getUserById(session?.user?.id as string, session?.user.accessToken as string)

  return (
    <Link href={'/'} className="flex items-center gap-2 mx-5 mb-6">
      <div className="flex items-center justify-center rounded-full bg-primary aspect-square">
        {user.image ? (
          <Image
            width={100}
            height={100}
            src={user.image}
            alt="profile"
            className="object-cover rounded-full w-14 h-14"
          />
        ) : (
          <Icons.PersonIcon
            props={{ svgProps: { className: 'w-6 h-6 m-3 lg:w-8 lg:h-8' }, pathProps: { className: 'fill-white' } }}
          />
        )}
      </div>
      <div>
        <p className="text-[#393939] font-bold text-lg leading-[21.58px] md:text-xl">Hai, {user.auth.username}</p>
        <p className="font-bold text-[#393939]">
          {user.mobile.startsWith('0')
            ? `+62${user.mobile.slice(1)}`.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
            : user.mobile}
        </p>
      </div>
    </Link>
  )
}

export default Identity
