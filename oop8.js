class Shape {
  constructor(color) {
    this.color = color;
  }
  getColor(){
    return "Color is " + this.color;
  }
  getArea(){
    return "Must be implemented by the child class";
  }
}

class Circle extends Shape{
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }
    getArea(){
        return "Area of this circle is " + Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape{
    constructor(color, width, height){
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea(){
        return "Area of this rectangle is " +  this.width * this.height;
    }
}

const c1 = new Circle("Red", 5);
console.log(c1.getColor())

const r1 = new Rectangle("Blue", 5, 10);
console.log(r1.getColor())

console.log(c1.getArea())
console.log(r1.getArea())
