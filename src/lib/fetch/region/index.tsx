const REGION_API = process.env.REGION_API || 'https://kanglerian.github.io/api-wilayah-indonesia/api'

console.log(REGION_API)

export const getAllProvinces = async () => {
  try {
    const response = await fetch(`${REGION_API}/provinces.json`)
    const provinces: IProvince[] = await response.json()
    return provinces
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message)
      throw new Error(error.message)
    } else {
      throw new Error('Unknown error')
    }
  }
}

export const getAllCities = async (provinceId: string) => {
  try {
    const response = await fetch(`${REGION_API}/regencies/${provinceId}.json`)
    const cities: ICity[] = await response.json()
    return cities
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Unknown error')
    }
  }
}

export const getAllDistricts = async (cityId: string) => {
  try {
    const response = await fetch(`${REGION_API}/districts/${cityId}.json`)
    const districts: ISubdistrict[] = await response.json()
    return districts
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Unknown error')
    }
  }
}

export const getAllVillages = async (districtId: string) => {
  try {
    const response = await fetch(`${REGION_API}/villages/${districtId}.json`)
    const villages: IVillage[] = await response.json()
    return villages
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Unknown error')
    }
  }
}
