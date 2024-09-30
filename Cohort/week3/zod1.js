const zod=require("zod")
// function validateInput(arr){
//   const schema=zod.array(zod.number())
//   const response=schema.safeParse(arr)
//   console.log(response)
// }

// validateInput([1,2,3,4,"1"])

function validateInput(arr){
  const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
  })

  const response=schema.safeParse(arr)
  console.log(response)
}

validateInput({
  email:"tridibghosh12345@gmail.com",
  password:"123456778"
})