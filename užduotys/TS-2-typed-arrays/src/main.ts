/*
  Aprašant masyvų tipus reikia nurodyti kokie elementai sudarys masyvai, galimos 2 sintaksės:
    * tipas[] -> number[], string[], Person[] ir t.t.
    * Array<tipas> -> Array<number>, Array<string>, Array<Person> ir t.t.
*/

type Person = {
  id: string,
  name: string,
  surname: string,
  age: number,
  height?: number, // Neprivaloma savybė
  weight?: number, // Neprivaloma savybė
};

const numbers: number[] = [1, 2, 3, 4, 5, 6];
const names: Array<string> = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
const people: Person[] = [{
  id: '39304075689',
  name: 'Verundijus',
  surname: 'Bauda',
  age: 51,
}, {
  id: '39304075689',
  name: 'Ryja',
  surname: 'Žaneirytė',
  age: 41,
  height: 1.65,
  weight: 55,
}, {
  id: '39304075689',
  name: 'Brudas',
  surname: 'Veilokas',
  age: 11,
  height: 1.45,
  weight: 45,
}];

// Kaip ir kiti tipai, masyvai gali būti naudojami funkcijų parametrams arba funkcijų grąžinimo tipams aprašyti
type CreatePeopleArrayFunction = (p1: Person, p2: Person) => Person[];

const printStrings = (strings: string[]): void => {
  const printString = (str: string): void => console.log(str);

  strings.forEach(printString);
};

const sumNumbers = (nums: Array<number>): number => {
  const numberSumReducer = (sum: number, num: number): number => sum + num;

  return nums.reduce(numberSumReducer, 0);
};

const createPeopleArray: CreatePeopleArrayFunction = (p1, p2) => [p1, p2];

console.group('Panaudojimo pavyzdžiai:');
{
  console.group('printStrings');
  {
    printStrings(names);
  }
  console.groupEnd();

  console.group('sumNumbers');
  {
    const result: number = sumNumbers(numbers);
    console.log({
      numbers,
      result,
    });
  }
  console.groupEnd();

  console.group('createPeopleArray');
  {
    const couple: Array<Person> = createPeopleArray(people[0], people[1]);
    console.log(couple);
  }
  console.groupEnd();
}
console.groupEnd();

console.group('Užduotys');
{
  console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
  {
    const numbers: number[] = [1, -8, -6, 7, 5, 1];

    function addPositiveNumbers(arr) {
      const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);

      return arr.reduce(positiveNumberReducer, 0);
    }

    console.log({
      numbers,
      sumOfPositiveNumbers: addPositiveNumbers(numbers),
    });
  }
  console.groupEnd();

  console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
  {
    /*
      Pvz.:
       * ['Lietuviškas', 'Nepriklausomas', 'Kanalas'] -> LNK
       * ['Lietuvos', 'Respublikos', 'Televizija'] -> LRT
       * ['Loughing', 'Out', 'Loud'] -> LOL
    */
  }
  console.groupEnd();

  console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
  {
    /*
      Pvz.:
       * [1, 7, 8] -> 56
       * [98, 74, 5, 0] -> 0
       * [17, 10, 5] -> 850
    */
  }
  console.groupEnd();
}
console.groupEnd();
