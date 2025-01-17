function func(anotherfunction:()=>void){
  setTimeout(anotherfunction,5000)
}


function anotherfunction(){
  console.log("After 1 sec")
}

func(anotherfunction)

