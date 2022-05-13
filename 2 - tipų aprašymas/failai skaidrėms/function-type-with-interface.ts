
interface RectangleAreaCalculator {
  (a: number, b: number): number,
  square(a: number): number
}

const rectangleAreaCalculator: RectangleAreaCalculator = Object.assign(
  (a, b) => a * b,
  {
    square: (a) => a ** 2
  }
);

const rectArea = rectangleAreaCalculator(4, 7);
console.log(rectArea);

const squareArea = rectangleAreaCalculator.square(5);
console.log(squareArea);


