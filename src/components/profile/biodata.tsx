'use client'

import * as Icons from '@/components/icons'
import { useState } from 'react'

interface Props {
  user: IUser
}

const Biodata = ({ user }: Props) => {
  const [showButonSave, setShowButtonSave] = useState<boolean>(false)
  const handleShowButtonSave = () => setShowButtonSave((prev) => !prev)
  return (
    <section className="rounded-[10px] shadow-custom-shadow border border-black border-opacity-10 lg:border-x-transparent lg:border-y-3 lg:border-y-[#D9D9D9] flex flex-col gap-5 p-3 lg:p-8 lg:rounded-none lg:shadow-none">
      <div className="flex justify-between items-center ">
        <h1 className="font-bold text-primary text-lg lg:text-2xl">Biodata Diri</h1>
        <button
          onClick={handleShowButtonSave}
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 items-center lg:gap-x-10">
        <div className="w-full">
          <label htmlFor="firstname" className="font-bold text-[#393939] lg:text-lg">
            Nama depan
          </label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            disabled={!showButonSave}
            className={`w-full  bg-transparent border-b border-b-[#B0B0B0] text-sm text-[#393939] pb-1 outline-none lg:border lg:bg-primary2 lg:border-black lg:border-opacity-10 lg:py-2 lg:px-3 lg:rounded-[10px] lg:shadow-custom-shadow lg:text-lg lg:mt-2 ${
              showButonSave ? '' : 'cursor-not-allowed'
            } `}
            defaultValue={user.firstname}
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastname" className="font-bold text-[#393939] lg:text-lg">
            Nama belakang
          </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            disabled={!showButonSave}
            className={`w-full  bg-transparent border-b border-b-[#B0B0B0] text-sm text-[#393939] pb-1 outline-none lg:border lg:bg-primary2 lg:border-black lg:border-opacity-10 lg:py-2 lg:px-3 lg:rounded-[10px] lg:shadow-custom-shadow lg:text-lg lg:mt-2 ${
              showButonSave ? '' : 'cursor-not-allowed'
            } `}
            defaultValue={user.lastname}
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="font-bold text-[#393939] lg:text-lg">
            Alamat email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            disabled={!showButonSave}
            className={`w-full  bg-transparent border-b border-b-[#B0B0B0] text-sm text-[#393939] pb-1 outline-none lg:border lg:bg-primary2 lg:border-black lg:border-opacity-10 lg:py-2 lg:px-3 lg:rounded-[10px] lg:shadow-custom-shadow lg:text-lg lg:mt-2 ${
              showButonSave ? '' : 'cursor-not-allowed'
            } `}
            defaultValue={user.auth.email}
          />
        </div>
        <div className="w-full">
          <label htmlFor="contact" className="font-bold text-[#393939] lg:text-lg">
            Kontak
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            disabled={!showButonSave}
            className={`w-full  bg-transparent text-sm text-[#393939]  pb-1 outline-none lg:border lg:bg-primary2 lg:border-black lg:border-opacity-10 lg:py-2 lg:px-3 lg:rounded-[10px] lg:shadow-custom-shadow lg:text-lg lg:mt-2 ${
              showButonSave ? '' : 'cursor-not-allowed'
            } `}
            defaultValue={user.mobile}
          />
        </div>
      </div>
      {showButonSave ? (
        <div className="mt-3">
          <button className="bg-primary py-2 px-3 lg:px-5 text-white rounded text-sm font-bold">Simpan</button>
        </div>
      ) : null}
    </section>
  )
}

export default Biodata
