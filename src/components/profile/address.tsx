'use client'
import React, { useEffect, useState } from 'react'
import * as Icons from '@/components/icons'
import { Addresslist } from './address-list'
import useProvince from './hook/use-province'
import useCities from './hook/use-city'
import useSubdistricts from './hook/use-subdistrict'
import useVillages from './hook/use-village'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { customRevalidation } from '@/actions/revalidation'

interface Props {
  user: IUser
}

const Address = ({ user }: Props) => {
  const [showButonSave, setShowButtonSave] = useState<boolean>(false)
  const [isUpdate, setIsUpdate] = useState<boolean>(false)
  const [defaultAddress, setDefaultAddress] = useState<string>('')
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { data: session } = useSession()

  const address = user.address.find((address) => defaultAddress && address.id === defaultAddress)

  const [selectedProvince, setSelectedProvince] = useState<{
    id?: string
    name: string
  }>({
    name: '',
  })
  const [selectedCity, setSelectedCity] = useState<{
    id?: string
    name: string
  }>({
    name: '',
  })
  const [selectedSubdistrict, setSelectedSubdistrict] = useState<{
    id?: string
    name: string
  }>({
    name: '',
  })
  const [selectedVillage, setSelectedVillage] = useState<{
    id?: string
    name: string
  }>({
    name: '',
  })
  const [selectedPostalCode, setSelectedPostalCode] = useState<string>('')
  const [selectedDetailAddress, setSelectedDetailAddress] = useState<string>('')

  const provinces = useProvince()
  const cities = useCities(selectedProvince.id as string)
  const subdistricts = useSubdistricts(selectedCity.id as string)
  const villages = useVillages(selectedSubdistrict.id as string)

  const handleShowButtonSave = (isUpdate: boolean) => {
    setShowButtonSave((prev) => !prev)
    if (isUpdate) {
      setIsUpdate(true)
    } else {
      setIsUpdate(false)
    }
  }

  useEffect(() => {
    if (address) {
      setSelectedProvince({
        name: address?.province,
        id: address.province_code,
      })
      setSelectedCity({
        name: address?.city,
        id: address.city_code,
      })
      setSelectedSubdistrict({
        name: address?.subdistrict,
        id: address.subdistrict_code,
      })
      setSelectedVillage({
        name: address?.village,
        id: address.village_code,
      })
      setSelectedPostalCode(address?.postal_code as string)
      setSelectedDetailAddress(address?.address as string)
    }
  }, [address])

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('default-address')
    if (dataFromLocalStorage) {
      setDefaultAddress(dataFromLocalStorage)
    }
  }, [])

  const handleDefaultAddress = (id: string) => {
    localStorage.setItem('default-address', id)
    setDefaultAddress(id)
  }

  const handleSelectProvince = (provinceName: string) => {
    const provinceId = provinces.find((province) => province.name === provinceName)?.id
    setSelectedProvince({
      name: provinceName,
      id: provinceId,
    })
    setSelectedCity({
      name: 'Pilih kabupaten/kota',
    })
    setSelectedSubdistrict({
      name: 'Pilih kecamatan',
      id: '',
    })
    setSelectedVillage({
      name: 'Pilih desa/kelurahan',
    })
  }

  const handleSelectCity = (cityName: string) => {
    const cityId = cities.find((city) => city.name === cityName)?.id
    setSelectedCity({
      name: cityName,
      id: cityId,
    })
    setSelectedSubdistrict({
      name: 'Pilih kecamatan',
    })
    setSelectedVillage({
      name: 'Pilih desa/kelurahan',
    })
  }

  const handleSelectSubdistrict = (subdistrictName: string) => {
    const subdistrictId = subdistricts.find((subdistrict) => subdistrict.name === subdistrictName)?.id
    setSelectedSubdistrict({
      name: subdistrictName,
      id: subdistrictId,
    })
    setSelectedVillage({
      name: 'Pilih desa/kelurahan',
    })
  }

  const handleSelectVillage = (villageName: string) => {
    const villageId = villages.find((village) => village.name === villageName)?.id
    setSelectedVillage({
      name: villageName,
      id: villageId,
    })
  }

  const handleSave = async () => {
    setIsLoading(true)
    try {
      const url = isUpdate
        ? `${process.env.NEXT_PUBLIC_API_URL}/users/address/${session?.user.id}/${address?.id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/users/address/${session?.user.id}`
      const response = await fetch(url, {
        method: isUpdate ? 'PATCH' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
        body: JSON.stringify({
          province: selectedProvince.name,
          province_code: selectedProvince.id,
          city: selectedCity.name,
          city_code: selectedCity.id,
          subdistrict: selectedSubdistrict.name,
          subdistrict_code: selectedSubdistrict.id,
          village: selectedVillage.name,
          village_code: selectedVillage.id,
          postal_code: selectedPostalCode,
          address: selectedDetailAddress,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message)
      }
      customRevalidation('/main/account/profile')
      toast.success(isUpdate ? 'Alamat pengiriman diperbarui' : 'Alamat pengiriman ditambahkan', {
        position: 'bottom-right',
      })
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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="rounded-[10px] shadow-custom-shadow border border-black border-opacity-10 lg:border-x-transparent mt-7 lg:mt-0 flex flex-col gap-5 p-3 lg:p-8 lg:border-none lg:rounded-none lg:shadow-none">
      <div className="flex justify-between items-center">
        <div className="relative">
          <button className="flex items-center gap-1" onClick={() => setShowSubmenu((prev) => !prev)}>
            <h1 className="font-bold text-primary text-lg lg:text-2xl rotat">Alamat Pengiriman</h1>
            <Icons.ArrowBackIcon
              props={{
                svgProps: {
                  className: 'mt-[2px] -rotate-90 w-3 h-3 lg:w-4 lg:h-4',
                },
                pathProps: {
                  className: 'fill-primary',
                },
              }}
            />
          </button>
          <div className="absolute top-8 z-50 left-0">
            <Addresslist
              currentAddress={defaultAddress}
              addresses={user.address}
              setShowSubmenu={setShowSubmenu}
              showSubmenu={showSubmenu}
              handleDefaultAddress={handleDefaultAddress}
            />
          </div>
        </div>
        <div className="flex items-center gap-1 lg:gap-3">
          <button
            onClick={() => handleShowButtonSave(false)}
            className="flex items-center gap-1 rounded-[5px] shadow-md border bg-primary2 border-black border-opacity-10 px-1"
          >
            <Icons.AddIcon
              props={{
                svgProps: {
                  className: 'w-3 h-3 lg:w-4 lg:h-4',
                },
              }}
            />
            <span className="text-sm lg:text-base">baru</span>
          </button>
          <button
            onClick={() => handleShowButtonSave(true)}
            className="flex items-center gap-1 rounded-[5px] shadow-md border bg-primary2 border-black border-opacity-10 px-1"
          >
            <Icons.EditIcon
              props={{
                svgProps: {
                  className: 'w-3 h-3 lg:w-4 lg:h-4',
                },
              }}
            />
            <span className="text-sm lg:text-base">edit</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 items-center lg:gap-x-10">
        <div className="w-full">
          <label htmlFor="province" className="font-bold text-[#393939] lg:text-lg">
            Provinsi
          </label>
          <select
            id="province"
            name="province"
            disabled={!showButonSave}
            className={`w-full  bg-transparent border-b border-b-[#B0B0B0] text-sm text-[#393939] pb-1 outline-none lg:border lg:bg-primary2 lg:border-black lg:border-opacity-10 lg:py-2 lg:px-3 lg:rounded-[10px] lg:shadow-custom-shadow lg:text-lg lg:mt-2 ${
              showButonSave ? '' : 'cursor-not-allowed'
            } `}
            value={selectedProvince.name as string}
            onChange={(e) => handleSelectProvince(e.target.value)}
          >
            <option disabled value="Pilih provinsi">
              Pilih provinsi
            </option>
            {provinces.map((province) => (
              <option key={province.id} value={province.name}>
                {province.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="city" className="font-bold text-[#393939] lg:text-lg">
            Kabupaten/Kota
          </label>
          <select
            id="city"
            name="city"
            disabled={!showButonSave || selectedProvince.name === 'Pilih provinsi'}
            className={`w-full  bg-transparent border-b border-b-[#B0B0B0] text-sm text-[#393939] pb-1 outline-none lg:border lg:bg-primary2 lg:border-black lg:border-opacity-10 lg:py-2 lg:px-3 lg:rounded-[10px] lg:shadow-custom-shadow lg:text-lg lg:mt-2 ${
              showButonSave ? '' : 'cursor-not-allowed'
            } `}
            value={selectedCity.name as string}
            onChange={(e) => handleSelectCity(e.target.value)}
          >
            <option disabled value="Pilih kabupaten/kota">
              Pilih kabupaten/kota
            </option>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="subdistrict" className="font-bold text-[#393939] lg:text-lg">
            Kecamatan
          </label>
          <select
            id="subdistrict"
            name="subdistrict"
            disabled={!showButonSave || selectedCity.name === 'Pilih kabupaten/kota'}
            className={`w-full  bg-transparent border-b border-b-[#B0B0B0] text-sm text-[#393939] pb-1 outline-none lg:border lg:bg-primary2 lg:border-black lg:border-opacity-10 lg:py-2 lg:px-3 lg:rounded-[10px] lg:shadow-custom-shadow lg:text-lg lg:mt-2 ${
              showButonSave ? '' : 'cursor-not-allowed'
            } `}
            value={selectedSubdistrict.name as string}
            onChange={(e) => handleSelectSubdistrict(e.target.value)}
          >
            <option disabled value="Pilih kecamatan">
              Pilih kecamatan
            </option>
            {subdistricts.map((subdistrict) => (
              <option key={subdistrict.id} value={subdistrict.name}>
                {subdistrict.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="village" className="font-bold text-[#393939] lg:text-lg">
            Desa/Kelurahan
          </label>
          <select
            id="village"
            name="village"
            disabled={!showButonSave || selectedSubdistrict.name === 'Pilih kecamatan'}
            className={`w-full  bg-transparent border-b border-b-[#B0B0B0] text-sm text-[#393939] pb-1 outline-none lg:border lg:bg-primary2 lg:border-black lg:border-opacity-10 lg:py-2 lg:px-3 lg:rounded-[10px] lg:shadow-custom-shadow lg:text-lg lg:mt-2 ${
              showButonSave ? '' : 'cursor-not-allowed'
            } `}
            value={selectedVillage.name}
            onChange={(e) => handleSelectVillage(e.target.value)}
          >
            <option disabled value="Pilih desa/kelurahan">
              Pilih desa/kelurahan
            </option>
            {villages.map((village) => (
              <option key={village.id} value={village.name}>
                {village.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-4">
        <div className="w-full">
          <label htmlFor="postal-code" className="font-bold text-[#393939] lg:text-lg">
            Kode Pos
          </label>
          <input
            id="postal-code"
            name="postal-code"
            type="text"
            disabled={!showButonSave}
            className={`w-full  bg-transparent border-b border-b-[#B0B0B0] text-sm text-[#393939] pb-1 outline-none lg:border lg:bg-primary2 lg:border-black lg:border-opacity-10 lg:py-2 lg:px-3 lg:rounded-[10px] lg:shadow-custom-shadow lg:text-lg lg:mt-2 ${
              showButonSave ? '' : 'cursor-not-allowed'
            } `}
            value={selectedPostalCode}
            onChange={(e) => setSelectedPostalCode(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label htmlFor="address" className="font-bold text-[#393939] lg:text-lg">
            Alamat Lengkap
          </label>
          <textarea
            id="address"
            name="address"
            disabled={!showButonSave}
            className={`w-full  bg-transparent text-sm text-[#393939] pb-1 outline-none lg:border lg:bg-primary2 lg:border-black lg:border-opacity-10 lg:py-2 lg:px-3 lg:rounded-[10px] lg:shadow-custom-shadow lg:text-lg lg:mt-2 ${
              showButonSave ? '' : 'cursor-not-allowed'
            } `}
            value={selectedDetailAddress}
            onChange={(e) => setSelectedDetailAddress(e.target.value)}
          />
        </div>
      </div>
      {showButonSave ? (
        <div className="mt-3">
          <button onClick={handleSave} className="bg-primary py-2 px-3 lg:px-5 text-white rounded text-sm font-bold">
            {isLoading ? 'Menyimpan...' : 'Simpan'}
          </button>
        </div>
      ) : null}
      <ToastContainer />
    </section>
  )
}

export default Address
