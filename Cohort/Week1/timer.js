let counter=30;
let starter=setInterval(()=>{
  console.log(counter--)
  if(counter==0){
    clearInterval(starter)
  }
  // counter--;
},1000)
