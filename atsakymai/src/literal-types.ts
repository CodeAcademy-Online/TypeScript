/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2 = 'Estonia';

type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

const req1 = {
  url: 'https://tavo-veidas.lt',
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

const req2 = {
  url: 'https://tavo-veidas.lt/api/',
  headers: {
    'Authorization': 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
    'Content-Type': 'application/json',
  },
  body: {
    image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
  },
  method: 'POST',
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type Berlin = 'Berlin';
  type Hamburg = 'Hamburg';
  type Munich = 'Munich';
  type Cologne = 'Cologne';
  type Frankfurt = 'Frankfurt';
  type GermanyCity = Berlin | Hamburg | Munich | Cologne | Frankfurt;

  type Doberman = 'Doberman';
  type ChowChow = 'ChowChow';
  type Dalmantin = 'Dalmantin';
  type Buldog = 'Buldog';
  type Mops = 'Mops';
  type Breed = Doberman | ChowChow | Dalmantin | Buldog | Mops;

  type Engine = 'Engine';
  type Trasmission = 'Trasmission';
  type Wheel = 'Wheel';
  type FuelTank = 'FuelTank';
  type FuelFilter = 'FuelFilter';
  type CarPart = Engine | Trasmission | Wheel | FuelTank | FuelFilter;

  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    const city1: GermanyCity = 'Berlin';
    const city2: GermanyCity = 'Cologne';

    console.log({ city1, city2 })
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    const breed1: Breed = 'Dalmantin';
    const breed2: Breed = 'Mops';

    console.log({ breed1, breed2 });
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    const parts: CarPart[] = ['Engine', 'Wheel', 'Trasmission'];

    console.log(parts);
  }
  console.groupEnd();

}
console.groupEnd();



