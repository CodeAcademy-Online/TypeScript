// Type alias
{

  type Add = (a: number, b: number) => number;
  const add: Add = (a, b) => a + b;

  const sum = add(5, 4);
  console.log(sum);

} {

  type Add = (a: number, b: number) => number;
  const add: Add = function (a, b) {
    return a + b;
  }

  const sum = add(5, 4);
  console.log(sum);

}

// Interfaces
{

  interface Add {
    (a: number, b: number): number
  }
  const add: Add = (a, b) => a + b;

  const sum = add(5, 4);
  console.log(sum);

} {

  interface Add {
    (a: number, b: number): number
  }
  const add: Add = function (a, b) {
    return a + b;
  }

  const sum = add(5, 4);
  console.log(sum);

}

// Implementation + typing
{

  const add = (a: number, b: number): number => a + b;

  const sum = add(5, 4);
  console.log(sum);

} {

  const add = function (a: number, b: number): number {
    return a + b;
  }

  const sum = add(5, 4);
  console.log(sum);

}
