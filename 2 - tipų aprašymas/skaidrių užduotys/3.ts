type ReplaceWith = (str: string, search: string, replacement: string) => string;

const calcDouble = (x: number): number => x * 2;

const replaceAll: ReplaceWith = function (str, search, replacement) {
  return str.split(search).join(replacement);
}

const calcArrAvg = (arr: number[]): number => {
  return arr.reduce((sum, x) => sum + x) / arr.length;
}

const numbers = [1, 2, 5, 4, 8, 7, 4, 5, 1];

const double = calcDouble(7);
const doubleNumbers = numbers.map(calcDouble);
const replacedString = replaceAll('laimes ziburys nusvito man', ' ', '-');
const avgNumbers = calcArrAvg(numbers);

console.log({
  double,
  doubleNumbers,
  replacedString,
  avgNumbers
});