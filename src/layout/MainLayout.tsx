interface MainLayoutInterface {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutInterface) => {
  return (
    <main className='flex flex-col h-screen m-auto justify-center items-center bg-gray-900 text-white'>
      {children}
    </main>
  )
}
