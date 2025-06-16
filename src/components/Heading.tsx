interface HeadingInterface {
  children: React.ReactNode
}

export const Heading = ({ children, ...rest }: HeadingInterface) => {
  return (
    <h1 className='text-xl p-4 text-white text-center' {...rest}>
      {children}
    </h1>
  )
}
