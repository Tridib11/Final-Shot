class RectangleClass{
  constructor(width,height,color){
    this.width=width;
    this.height=height;
    this.color=color;
  }

  area(){
    const area=this.width*this.height;
    return area;
  }

  paint(){
    console.log(`Painting with color ${this.color}`)
  }
}


const rect=new RectangleClass(2,4,"Red");
const area=rect.area();
console.log(area)