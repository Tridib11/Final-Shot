function getFirstElement<T>(arr:T[]){
  return arr[0]
}

const el=getFirstElement<string>(["TridibGhosh","RamanSingh"])
const el2=getFirstElement<number>([1,2,3])
console.log(el)