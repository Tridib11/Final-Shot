const users=[1,2,3]
const user2=["Rohan","rahul"]
const allUsers=[{
  fName:"Tridib",
  gender:"Male"
},{
  fName:"Raman",
  gender:"Male"
},{
  fName:"Swati",
  gender:"Female"
}]


for(let i=0;i<allUsers.length;i++){
  if(allUsers[i].gender=="Female"){
    console.log(allUsers[i].fName)
  }
}