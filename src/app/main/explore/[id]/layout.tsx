import DetailHeader from '@/components/main/detail-product/header'
import { getProductById } from '@/lib/fetch/product'
import type { Metadata } from 'next'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id
  const product = await getProductById(id)

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <DetailHeader />
      {children}
    </>
  )
}
