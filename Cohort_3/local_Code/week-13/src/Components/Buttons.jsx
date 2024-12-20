export const Button=({disabled,children,onClick})=>{
  return <span onClick={onClick} className={`px-32 py-8 h-9  rounded-2xl text-4xl text-white cursor-pointer ${disabled ? "bg-blue-200":"bg-green-400"}`}>

    {children}

  </span>
}