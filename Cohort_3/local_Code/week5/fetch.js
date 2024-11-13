// const func=async()=>{
//   fetch("https://jsonplaceholder.typicode.com/posts/")
//   .then(response=>response.json())
//   .then(data=> console.log(data))
// }

function func() {
  fetch("https://jsonplaceholder.typicode.com/posts/").then(
    async (response) => {
      const result = await response.json();
      // const totalLength=result.length;
      // for(let i=0;i<totalLength;i++){
      //   console.log(result[i].id+","+result[i].body)
      // }

      result.forEach((item)=>{
        console.log(item.id+","+item.body)
      })
    }
  );
}

func();
