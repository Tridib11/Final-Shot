// type keyInput="up"|"down"|"left"|"right";

/*
Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
The concept behind an enumeration is to create a human-readable way to represent a set of constant values,r.'hich might otherwise be represented as numbers or strings.
*/

// enum Direction{
//   up, //0
//   down, //1
//   left, //2
//   right //3
// }


//to change the enums in compile time 

enum Direction{
  up ="up", 
  down = "down", 
  left = "left", 
  right ="right" 
}
function doSomething(keyPressed:Direction){
  if(keyPressed==Direction.up){
    console.log("pressed up")
  }
  else if(keyPressed==Direction.down){
    console.log("Pressed down")
  }
}

doSomething(Direction.up)
doSomething(Direction.down)


console.log(Direction.up)//0
console.log(Direction.down)//1
console.log(Direction.left)//2
console.log(Direction.right)//3