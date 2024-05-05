import { auth } from '@/auth'
import Address from '@/components/profile/address'
import Biodata from '@/components/profile/biodata'
import ImageProfile from '@/components/profile/image-profile'
import { getUserById } from '@/lib/fetch/user'
import React from 'react'

const Page = async () => {
  const session = await auth()
  const user = await getUserById(session?.user.id as string, session?.user.accessToken as string)

  return (
    <main className="px-5">
      <ImageProfile user={user} />
      <Biodata user={user} />
      <Address user={user} />
    </main>
  )
}

export default Page
