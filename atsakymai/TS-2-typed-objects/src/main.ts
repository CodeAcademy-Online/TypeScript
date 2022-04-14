/*
  Objektų tipai aprašomi aprašant kiekvieną savybę atskirai. Jeigu savybė nėra privaloma, prie savybės pavadinimo rašome klaustuką
*/

type Person = {
  id: string,
  name: string,
  surname: string,
  age: number,
  height?: number, // Neprivaloma sabybė
  weight?: number, // Neprivaloma sabybė
};

// Minimaliai aprašytas Person tipo objektas
const person1: Person = {
  id: '39304075689',
  name: 'Verundijus',
  surname: 'Bauda',
  age: 51,
};

// Pilnai aprašytas Person tipo objektas
const person2: Person = {
  id: '39304075689',
  name: 'Ryja',
  surname: 'Žaneirytė',
  age: 41,
  height: 1.65,
  weight: 55,
};

const person3: Person = {
  id: '39304075689',
  name: 'Brudas',
  surname: 'Veilokas',
  age: 11,
  height: 1.45,
  weight: 45,
}

// Tipo panaudojimas aprašant funkcijas
type CreateFullname = (person: Person) => string;
const createFullname: CreateFullname = ({ name, surname }) => `${name} ${surname}`;

const printCouple = (p1: Person, p2: Person): void => {
  const p1Fullname = createFullname(p1);
  const p2Fullname = createFullname(p2);
  console.log(`${p1Fullname} + ${p2Fullname} = ❤`);
};

printCouple(person1, person2);

// Atlikite užduotis, funkcijas aprašydami tipais
console.group('1. Sukurkite funkciją kuri patikrina ar žmogus yra pilnametis');
{
  const isAdult = (p: Person): boolean => p.age >= 18;

  console.log({
    [createFullname(person1)]: isAdult(person1),
    [createFullname(person2)]: isAdult(person2),
    [createFullname(person3)]: isAdult(person3),
  });
}
console.groupEnd();

console.group('2. Sukurkite funkciją, kuri patikrina ar Person tipo objektas turi ūgį ir svorį');
{
  type IsFullyDescribedPerson = (p: Person) => boolean

  const isFullyDescribedPerson: IsFullyDescribedPerson = (person) => Boolean(person.height) && Boolean(person.weight);

  console.log({
    [createFullname(person1)]: isFullyDescribedPerson(person1),
    [createFullname(person2)]: isFullyDescribedPerson(person2),
    [createFullname(person3)]: isFullyDescribedPerson(person3),
  });
}
console.groupEnd();

console.group('3. Sukurkite funkciją, kuri grąžina žmogaus incialus');
{
  const createInitials = (p: Person) => p.name[0] + p.surname[0];

  console.log({
    [createFullname(person1)]: createInitials(person1),
    [createFullname(person2)]: createInitials(person2),
    [createFullname(person3)]: createInitials(person3),
  });
}
console.groupEnd();

