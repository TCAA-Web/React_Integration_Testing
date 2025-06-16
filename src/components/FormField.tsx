interface FormFieldInterface {
  type: 'text' | 'number'
  value: string | number | readonly [string] | undefined
  callback: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  labelText: string
}

export const FormField = ({ type, value, callback, name, labelText, ...rest }: FormFieldInterface) => {
  return (
    <div className='flex flex-col'>
      <label className='text-sm font-extralight' htmlFor={name}>
        {labelText}
      </label>
      <input
        className='border rounded-md border-amber-50 w-70 m-1 text-white p-2'
        type={type}
        id={name}
        value={value}
        name={name}
        onChange={callback}
        {...rest}
      />
    </div>
  )
}
