import { getAllDistricts } from '@/lib/fetch/region'
import { useEffect, useState } from 'react'

const useSubdistricts = (cityId: string) => {
  const [subdistricts, setSubdistricts] = useState<ISubdistrict[]>([])

  useEffect(() => {
    const getSubdistricts = async () => {
      const data = await getAllDistricts(cityId as string)
      setSubdistricts(data)
    }
    if (cityId) getSubdistricts()
  }, [cityId])

  return subdistricts
}

export default useSubdistricts
