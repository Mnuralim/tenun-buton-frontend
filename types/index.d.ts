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
  id: string
  address: string
  city: string
  city_code: string
  province: string
  province_code: string
  postal_code: string
  country: string
  subdistrict: string
  subdistrict_code: string
  village: string
  village_code: string
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
  images: [
    {
      id: string
      url: string
    }
  ]
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

interface IUser {
  id: string
  firstname: string
  lastname: string
  image: string
  mobile: string
  role: 'ADMIN' | 'USER'
  auth_id: string
  is_blocked: boolean
  is_active: boolean
  created_at: Date
  updated_at: Date
  auth: {
    id: string
    email: string
    username: string
    created_at: Date
  }
  address: [IAddress]
}

interface IProvince {
  id: string
  name?: string
}

interface ICity {
  id: string
  province_id: string
  name: string
}

interface ISubdistrict {
  id: string
  regency_id: string
  name: string
}

interface IVillage {
  id: string
  name: string
}
