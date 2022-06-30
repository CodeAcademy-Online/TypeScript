// Bendrinio tipo apibūdinimas
{
  const sort = <T>(arr: T[], cmpFunction: (a: T, b: T) => number): T[] => {
    return [...arr].sort(cmpFunction);
  }

  const numbers = [1, -2, 3, -4, 5, -6];
  const words = ['a', 'bb', 'ac', 'dc', 'cb'];


  const numbersAsc = sort(numbers, (a, b) => a - b);
  numbersAsc;


  const wordsDesc = sort(words, (a, b) => b.localeCompare(a));
  wordsDesc;
}

// Bendrinių tipų paveldimumas
{
  // Type yra Objektas turintis savybes name ir surname
  // type Ite = <Type extends { name: string, surname: string }>                (a: Type) => 


  const getFullname = <Person extends { name: string, surname: string }>(
    { name, surname }: Person): string => {
    return name[0].toUpperCase() + name.slice(1) + ' ' + surname[0].toUpperCase() + surname.slice(1)
  }

  console.log(getFullname({ name: 'Dziuvesis', surname: 'gardesis' }));
  console.log(getFullname({ name: 'Kempė', surname: 'Grybė', age: 17 }));

  const isNotEmpty = <Type extends { length: number }>(iter: Type): boolean => {
    return iter.length > 0;
  }

  console.log(isNotEmpty([1, 5, 2, 5, 6]));
  console.log(isNotEmpty([]));
  console.log(isNotEmpty('labas'));
  console.log(isNotEmpty(''));
}


// Bendrinių funkcijų aprašymas
{
  {
    const copyValue = (original: any) => {
      if (original instanceof Object) {
        return JSON.parse(JSON.stringify(original));
      }

      return original;
    }

    const number = copyValue(7);


    const arr = copyValue([1, 2, 3]);


    const obj = copyValue({
      name: 'Serbenth',
      surname: 'Le Bordouir'
    });

    // number, arr, obj
  }
  {
    const copyValue = <Type>(original: Type): Type => {
      if (original instanceof Object) {
        return JSON.parse(JSON.stringify(original));
      }

      return original;
    }

    const number = copyValue(7);


    const arr = copyValue([1, 2, 3]);





    const obj = copyValue({
      name: 'Serbenth',
      surname: 'Le Bordouir'
    })
  }
}

// Bendrinių klasių aprašymas
{
  interface IFeedable {
    weight: number;
    energy: number;
    eat(food: number): void;
  }

  class Cat implements IFeedable {
    constructor(
      public weight: number,
      public energy: number,
    ) { }

    eat(food: number): void {
      this.energy += food * 0.1;
      this.weight += food * 0.001;
    }
  }

  class Person implements IFeedable {
    constructor(
      public weight: number,
      public energy: number,
    ) { }

    eat(food: number): void {
      this.energy += food * 0.15;
      this.weight += food * 0.0005;
    }
  }

  class Shelter<Guest extends IFeedable> {
    constructor(private guests: Guest[] = []) { }

    takeIn(guest: Guest): void {
      this.guests.push(guest);
    }

    feedGuests(allFood: number) {
      const allWeight = this.guests.reduce((prev, guest) => prev + guest.weight, 0);
      const foodPerWeight = allFood / allWeight;

      this.guests.forEach((guest) => {
        guest.eat(foodPerWeight * guest.weight);
      });
    }

    viewGuestVitals(): void {
      console.table(
        this.guests.map(({ weight, energy }) => ({
          weight: weight.toFixed(2),
          energy: energy.toFixed(2)
        }))
      );
    }
  }

  const person1 = new Person(80, 89000);
  const person2 = new Person(75, 92000);
  const peopleShelter = new Shelter<Person>();
  peopleShelter.takeIn(person1);
  peopleShelter.takeIn(person2);


  peopleShelter.viewGuestVitals();


  peopleShelter.feedGuests(2500);


  peopleShelter.viewGuestVitals();


  const cat1 = new Cat(3, 1400);
  const cat2 = new Cat(3.5, 1300);
  const catShelter = new Shelter<Cat>();
  catShelter.takeIn(cat1);
  catShelter.takeIn(cat2);


  catShelter.viewGuestVitals();


  catShelter.feedGuests(450);


  catShelter.viewGuestVitals();





}
