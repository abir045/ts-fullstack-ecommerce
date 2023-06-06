


export default function MessageBox( { children }: {children: React.ReactNode}) {
  
  const alertClasses = `bg-red-100 border-red-500 text-red-700`

  return (
    <div className={`${alertClasses} p-4 rounded-lg`}>
      {children}
      </div>
  )
}