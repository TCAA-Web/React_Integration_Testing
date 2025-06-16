import type { FormFieldOptionType } from '../types/FormTypes'

interface SelectInterface {
  callback: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: Array<FormFieldOptionType>
  name: string
  labelText: string
}

export const Select = ({ callback, options, name, labelText }: SelectInterface) => {
  return (
    <div className='flex flex-col'>
      <label className='text-sm font-extralight' htmlFor={name}>
        {labelText}
      </label>
      <select
        className='border rounded-md border-amber-50 w-70 m-1 text-white p-2'
        id={name}
        name={name}
        onChange={callback}
      >
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          )
        })}
      </select>
    </div>
  )
}
