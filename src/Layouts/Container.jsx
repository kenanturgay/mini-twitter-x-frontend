export default function Container( {children}) {
  return (
    <div className="flex mx-auto min-h-screen max-w-7xl bg-black">{children}</div>
  )
}
