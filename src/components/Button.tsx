import type { ReactNode } from 'react'

interface ButtonInterface {
  callback: () => void
  aria: string
  children?: ReactNode
  id: string
}

export const Button = ({ callback, aria, id, children, ...rest }: ButtonInterface) => {
  return (
    <button
      className='min-w-30 g-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-10'
      onClick={callback}
      aria-label={aria}
      id={id}
      {...rest}
    >
      {children}
    </button>
  )
}
