interface ICategory {
  id: string
  name: string
  thumbnail: string
}

interface IColor {
  color: {
    color: string
  }
}

enum SizeEnum {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

interface IProductSize {
  size: {
    size: SizeEnum
  }
}

interface IAddress {
  address: string
  city: string
  province: string
  postal_code: string
  country: string
  subdistrict: string
  village: string
}

interface IProduct {
  id: string
  name: string
  thumbnail: string
  description: 'Ini adalah kain tenun dari lombe'
  price: number
  stock: number
  sold: number
  ratting: number
  condition: 'OLD' | 'NEW'
  weight: number
  length: number
  width: number
  seller_id: string
  category_id: string
  is_archived: boolean
  is_active: boolean
  created_at: Date
  updated_at: Date
  category: ICategory
  product_color: [IColor]
  product_size: [IProductSize]
  seller: {
    id: string
    firstname: string
    lastname: string
    auth: {
      email: string
      username: string
    }
    address: [IAddress]
  }
}
