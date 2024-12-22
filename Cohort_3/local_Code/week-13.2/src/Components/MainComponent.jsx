export function MainComponent(){
  return <div className="w-full">
    <div className="h-48 bg-black "></div>
    
    <div className="grid grid-cols-10 gap-8 p-8">
      <div className="h-96 rounded-2xl shadow bg-red-200 col-span-2 -translate-y-24 shadow-lg">

      </div>
      <div className="h-96 rounded-2xl shadow bg-green-200 col-span-5 shadow-lg">

      </div>
      <div className="h-96 rounded-2xl shadow bg-yellow-200 col-span-3 shadow-lg">

      </div>
    </div>
  </div>
}