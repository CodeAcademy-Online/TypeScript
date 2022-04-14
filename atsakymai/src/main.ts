const numbers: number[] = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const words: string[] = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];

console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function solution(arr: any[]): void {
    console.log(arr.length - 1);
  }

  console.log(numbers);
  solution(numbers);

  console.log(words);
  solution(words);
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function solution(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) console.log(i);
  }

  console.log(numbers);
  solution(numbers);

  console.log(words);
  solution(words);
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function solution(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) console.log(arr[i]);
  }

  console.log(numbers);
  solution(numbers);

  console.log(words);
  solution(words);
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function solution(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) console.log(`[${i}] => ${arr[i]}`);
  }

  console.log(numbers);
  solution(numbers);

  console.log(words);
  solution(words);
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function solution(arr: any[]): void {
    for (let i = arr.length - 1; i >= 0; i--) console.log(arr[i]);
  }

  console.log(numbers);
  solution(numbers);

  console.log(words);
  solution(words);
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function solution(arr: any[]): void {
    const res = arr.map((_, i) => i).join(' ');
    console.log(res);
    // console.log(...arr.map((_, i) => i));
  }

  console.log(numbers);
  solution(numbers);

  console.log(words);
  solution(words);
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  function solution(arr: any[]): void {
    const res = arr.join(' ');
    console.log(res);
    // console.log(...arr);
  }

  console.log(numbers);
  solution(numbers);

  console.log(words);
  solution(words);
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  function solution(arr: any[]): void {
    const res = arr.map((x, i) => `[${i}]=>${x}`).join(', ');
    console.log(res);
    // console.log(...arr.map((x, i) => `[${i}]=>${x} `));
  }

  console.log(numbers);
  solution(numbers);

  console.log(words);
  solution(words);
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  function solution(arr: number[]): number[] {
    return arr.map(x => x * 2);
  }

  const result = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  function solution(arr: number[]): number[] {
    return arr.map(x => x ** 2);
  }

  const result = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  function solution(arr: number[]): number[] {
    return arr.map((x, i) => x * i);
  }

  const result = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  function solution(arr: number[]): number[] {
    return arr.filter((x) => x > 0);
  }

  const result = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  function solution(arr: number[]): number[] {
    return arr.filter((x) => x <= 0);
  }

  const result = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  function solution(arr: number[]): number[] {
    return arr.filter((x) => x % 2 === 0);
  }

  const result = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  function solution(arr: number[]): number[] {
    return arr.filter((x) => Math.abs(x) % 2 === 1);
  }

  const result = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  function solution(arr: number[]): number[] {
    return arr.map((x) => x < 0 ? x * -1 : x);
  }

  const result = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();
