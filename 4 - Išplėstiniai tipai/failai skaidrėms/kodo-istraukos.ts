
// Union
type ID = string | number;

const a: ID = 'Labas';
const b: ID = 7;

type IterableType = string | Array<any>;

const validateMaxLength = (value: IterableType, max: number): boolean => {
  return value.length <= max;
};

// Tuples
type Entry = [string, any];

type Coordinate2D = [number, number];

type Setter<Type> = (val: Type) => void;
type Getter<Type> = () => Type;
type EncapsulationMethods<T> = [Setter<T>, Getter<T>];

const getCircleInfo = (radius: number): [string, string] => {
  const perimeter = 2 * Math.PI * radius;
  const area = Math.PI * radius ** 2;

  return [perimeter.toFixed(2), area.toFixed(2)];
}

const circleInfo = getCircleInfo(4);
const [perimeter2, area2] = getCircleInfo(4);
const [perimeter3, area3] = getCircleInfo(6);
console.log(circleInfo[0], circleInfo[1]);
console.log(perimeter2, area2);
console.log(perimeter3, area3);

// Type Assertions

// const contactForm = document.querySelector('.js-contact-form');

// contactForm.addEventListener('submit', (e) => {
//   e.preventDefault();
// });

const contactForm = document.querySelector('.js-contact-form') as HTMLFormElement;


contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
});


// Type Literals

// type Category = 'Food' | 'Clothes' | 'Other';

// const milkCategory: Category = 'Food';





// const breadCategory: Category = 'food';




// type Weekday = 1 | 2 | 3 | 4 | 5 | 6 | 7;

// const monday: Weekday = 1;





// const tuesday: Weekday = 0;





