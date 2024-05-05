import { getAllProvinces } from '@/lib/fetch/region'
import { useEffect, useState } from 'react'

const useProvince = () => {
  const [provinces, setProvinces] = useState<IProvince[]>([])

  useEffect(() => {
    const getProvince = async () => {
      const data = await getAllProvinces()
      setProvinces(data)
    }
    getProvince()
  }, [])

  return provinces
}

export default useProvince
