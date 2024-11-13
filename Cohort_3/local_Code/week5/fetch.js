const func=async()=>{
  fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(response=>response.json())
  .then(data=> console.log(data))
}

func()