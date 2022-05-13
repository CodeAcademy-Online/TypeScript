

const printDate = function (date: Date): void {
  console.log(date);
}

const calcArrSum = (arr: number[]): number => {
  return arr.reduce((sum, x) => sum + x);
}

function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}
