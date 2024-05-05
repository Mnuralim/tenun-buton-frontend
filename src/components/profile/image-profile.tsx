'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import * as Icons from '@/components/icons'
import 'react-toastify/dist/ReactToastify.css'
import { customRevalidation } from '@/actions/revalidation'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'

interface Props {
  user: IUser
}

const ImageProfile = ({ user }: Props) => {
  const { data: session } = useSession()
  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    try {
      if (files) {
        const formData = new FormData()
        formData.append('image', files[0])

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${user.id}`, {
          method: 'PATCH',
          body: formData,
          headers: {
            Authorization: `Bearer ${session?.user.accessToken}`,
          },
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message)
        }
        customRevalidation('/main/account/profile')

        toast.success('Sukses mengubah profil', {
          position: 'bottom-right',
        })
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message, {
          position: 'bottom-right',
        })
      } else {
        toast.error('Terjadi kesalahan', {
          position: 'bottom-right',
        })
      }
    }
  }

  return (
    <section className="mb-5 flex items-center justify-center flex-col lg:items-start gap-1 lg:px-8">
      <div className="flex justify-center  items-center gap-5">
        <div className="w-16 h-16 lg:w-28 lg:h-28">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.firstname}
              width={200}
              height={200}
              className="rounded-full aspect-square object-cover"
            />
          ) : (
            <div className="rounded-full w-full h-full bg-primary flex items-center justify-center">
              <Icons.PersonIcon
                props={{
                  svgProps: {
                    className: 'w-8 h-8',
                  },
                }}
              />
            </div>
          )}
        </div>
        <div className="hidden lg:block">
          <h1 className="font-bold text-primary text-2xl">Hai, {user.auth.username}</h1>
          <p className="font-bold text-[#393939] text-lg">
            {user.mobile.startsWith('0')
              ? `+62${user.mobile.slice(1)}`.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
              : user.mobile}
          </p>
        </div>
      </div>
      <label htmlFor="image-profile" className="text-sm text-[#393939] font-bold cursor-pointer lg:text-base">
        Ubah Foto Profil
      </label>
      <input type="file" name="image-profile" id="image-profile" hidden accept="image/*" onChange={handleImage} />
    </section>
  )
}

export default ImageProfile
