type Item = {
  title: string,
  price: number
};

type Person = {
  name: string,
  age: number,
  married: boolean,
};

const firstName = 'Serbentautas';
const age = 15;
const coins: number[] = [1, 2, 5, 10, 20, 50, 100, 200];

const item: Item = {
  title: 'Kėglis',
  price: 8.99
};

const items: Item[] = [
  item,
  {
    title: 'Pienas',
    price: 0.89,
  }
];

const person: Person = {
  name: 'Serbentautas',
  age: 22,
  married: false,
};

const friends: Person[] = [
  person,
  {
    name: 'Jully',
    age: 32,
    married: true,
  },
  {
    name: 'Martin',
    age: 36,
    married: false,
  }
];

console.log({
  firstName,
  age,
  coins,
  item,
  items,
  person,
  friends
});

