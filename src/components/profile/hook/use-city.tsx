import { getAllCities } from '@/lib/fetch/region'
import { useEffect, useState } from 'react'
import useProvince from './use-province'

const useCities = (provinceId: string) => {
  const [cities, setCities] = useState<ICity[]>([])

  useEffect(() => {
    const getCities = async () => {
      const data = await getAllCities(provinceId as string)
      setCities(data)
    }
    if (provinceId) getCities()
  }, [provinceId])

  return cities
}

export default useCities
