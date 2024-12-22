export function MainComponent(){
  return <div>
    <div className="h-48 bg-black "></div>
    
    <div className="grid grid-cols-10 gap-8">
      <div className="h-96 rounded-2xl shadow bg-red-200 col-span-2 -translate-y-12">

      </div>
      <div className="h-96 rounded-2xl shadow bg-green-200 col-span-5">

      </div>
      <div className="h-96 rounded-2xl shadow bg-yellow-200 col-span-3">

      </div>
    </div>
  </div>
}