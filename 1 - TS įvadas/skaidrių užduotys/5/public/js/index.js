"use strict";
const firstName = 'Serbentautas';
const age = 15;
const coins = [1, 2, 5, 10, 20, 50, 100, 200];
const item = {
    title: 'Kėglis',
    price: 8.99
};
const items = [
    item,
    {
        title: 'Pienas',
        price: 0.89,
    }
];
const person = {
    name: 'Serbentautas',
    age: 22,
    married: false,
};
const friends = [
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
