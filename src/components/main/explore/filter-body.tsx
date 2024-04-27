import React from 'react'
import { CheckboxGroup, Checkbox } from '@nextui-org/react'

interface Props {
  categories: ICategory[]
}

const colors = ['red', 'green', 'blue', 'yellow', 'indigo', 'violet', 'purple', 'pink']

const FilterBody = ({ categories }: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-white font-bold mb-4">Kategori</h1>
        <CheckboxGroup color="default" radius="sm">
          {categories.map((category) => (
            <Checkbox
              key={category.id}
              value={category.name}
              classNames={{
                label: 'text-white text-sm',
              }}
            >
              {category.name}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-white font-bold">Harga</h1>
        <div>
          <input
            type="number"
            placeholder="minimum"
            className="border border-black bg-white rounded px-3 py-1 font-bold outline-none"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="maksimum"
            className="border border-black bg-white rounded px-3 py-1 font-bold outline-none"
          />
        </div>
      </div>
      <div>
        <h1 className="text-white font-bold">Warna</h1>
        <div className="flex gap-3 flex-wrap mt-3">
          {colors.map((color) => (
            <div
              key={color}
              style={{
                backgroundColor: color,
              }}
              className="w-11 h-11 rounded-full border border-black"
            ></div>
          ))}
        </div>
      </div>
      <button className="bg-white text-primary py-3 px-6 rounded-[10px] font-bold text-lg">Terapkan</button>
    </div>
  )
}

export default FilterBody
