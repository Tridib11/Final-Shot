interface Manager{
  name:string,
  age:number
}

interface Employee{
  name:string,
  department:string
}

type TeamLead=Manager & Employee

let t:TeamLead={
  name:"Tridib",
  age:21,
  department:"CSE"
}