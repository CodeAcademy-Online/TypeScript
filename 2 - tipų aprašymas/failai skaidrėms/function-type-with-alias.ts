
type BinaryNumericFunction = (a: number, b: number) => number;

const add: BinaryNumericFunction = function (a, b) {
  return a + b
}

const subtract: BinaryNumericFunction = (a, b) => a / b;

let multiply: BinaryNumericFunction = function (a, b) {
  return a * b;
}

let divide: BinaryNumericFunction = (a, b) => a / b;


