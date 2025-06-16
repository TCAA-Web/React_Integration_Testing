import type { ReactNode } from 'react'

interface FormInterface {
  children: ReactNode
  callback: (event: React.FormEvent<HTMLFormElement>) => void
}

export const Form = ({ children, callback, ...rest }: FormInterface) => {
  return (
    <form className='w-lg flex justify-center items-center flex-col m-auto' onSubmit={callback} {...rest}>
      {children}
      <input
        className='g-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-10'
        type='submit'
        aria-label='submit-button'
        value='Submit'
      ></input>
    </form>
  )
}
