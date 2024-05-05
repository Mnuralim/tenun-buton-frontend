import { getAllVillages } from '@/lib/fetch/region'
import { useEffect, useState } from 'react'

const useVillages = (villageId: string) => {
  const [villages, setVillages] = useState<IVillage[]>([])

  useEffect(() => {
    const getVillages = async () => {
      const data = await getAllVillages(villageId as string)
      setVillages(data)
    }
    if (villageId) getVillages()
  }, [villageId])

  return villages
}

export default useVillages
