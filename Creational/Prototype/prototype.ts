//Base Prototype
abstract class Shape {
  public x!: number;
  public y!: number;
  public color!: string;

  constructor(obj: Shape) {
    this.x = obj?.x;
    this.y = obj?.y;
    this.color = obj?.color;
  }

  public abstract clone(): Shape;
}

//Concrete Prototype
class Circle extends Shape {
  public radius!: number;

  constructor(circle?: Circle|any) {
    super(circle);
    this.radius = circle?.radius;
  }

  public clone(): Circle {
    return new Circle(this);
  }
}

const circleObj = new Circle();
circleObj.x = 2;
circleObj.y= 3;
circleObj.color = 'reed';
circleObj.radius = 10;

const circle2 = circleObj.clone();
console.log(circle2);
console.log(circleObj);
