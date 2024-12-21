export function Sidebar(){
  return <div className="flex">
    <div className="hidden bg-red-200  h-screen sm:block w-64">
      Sidebar
    </div>
    <div className="bg-green-800 w-full h-screen">
      Content
    </div>

  </div>
}