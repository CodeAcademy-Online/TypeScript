abstract class Shape2D {
  public abstract getPerimeter(): number;
  public abstract getArea(): number;
}

class Rectangle extends Shape2D {
  private height: number;
  private width: number;

  public constructor(width: number, height: number) {
    super();

    this.width = width;
    this.height = height;
  }

  public getPerimeter = (): number => 2 * this.height + 2 * this.width;

  public getArea = (): number => this.width * this.height;
}

class Circle extends Shape2D {
  private radius: number;

  public constructor(radius: number) {
    super();

    this.radius = radius;
  }

  public getPerimeter = (): number => 2 * Math.PI * this.radius;

  public getArea = (): number => Math.PI * this.radius ** 2;
}



const shapes: Shape2D[] = [
  new Rectangle(500, 200),
  new Rectangle(300, 300),
  new Circle(40),
  new Circle(70),
];

shapes.forEach((shape) => {
  console.log(shape.getPerimeter());
});

shapes.forEach((shape) => {
  console.log(shape.getArea())
});
