/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:

  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.

  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?

  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.

    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.

  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

// 10 min
console.group('1. Sukurkite funkciją "joinArrays", kuri apjungia 2 masyvus. Grąžinamo masyvo tipas turi būti lygus parametrais perduotų masyvų tipų sajungai');
{
  const joinArrays = <T, K>(arr1: T[], arr2: K[]): (T | K)[] => [...arr1, ...arr2];

  console.table({
    'joinArrays([1, 2, 3], [4, 5, 6]': joinArrays([1, 2, 3], [4, 5, 6]),
    'joinArrays([1, 2, 3], ["a", "b"]': joinArrays([1, 2, 3], ['a', 'b']),
  });
}
console.groupEnd();

// 25 min
console.group('2. Sukurkite funkciją "joinObjects", kuri apjungia 2 objektus. Apjungtam objekto tipe, turi būti visos savybės kurios buvo objekte pirmu parametru, ir objekte antru parametru.');
/*
  hints:
    * TS: generic constraints
    * JS: spread operator
*/
{
  type CommonProperties<T extends object, K extends Object> = keyof (T | K);

  type Merge<T extends object, K extends Object> = Omit<T, CommonProperties<T, K>> & K;

  const joinObjects = <T extends object, K extends object>(obj1: T, obj2: K)
    : Merge<T, K> => ({
      ...obj1,
      ...obj2,
    });

  type Pig = {
    sayOinkOink(): void,
    weight: number,
    legs: 4
  };

  type Spider = {
    sprayWeb(): void,
    weight: number,
    legs: 8
  };

  const pig: Pig = {
    sayOinkOink() {
      console.log('Oink Oink');
    },
    weight: 80,
    legs: 4,
  };

  const spider: Spider = {
    sprayWeb() {
      console.log('https://bwscience.com/wp-content/uploads/2016/10/spider-web.jpg');
    },
    weight: 80,
    legs: 8,
  };

  const spiderPig = joinObjects(spider, pig);

  // Patikrinama, ar teisingai išsisaugojo tipas po apjungimo
  console.table({
    'spiderPig.legs': spiderPig.legs,
    'spiderPig.weight': spiderPig.weight,
  });
  console.log('spiderPig.sayOinkOink()');
  spiderPig.sayOinkOink();
  console.log('spiderPig.sprayWeb()');
  spiderPig.sprayWeb();
}
console.groupEnd();

// 30 min
console.group('3. Sukurkite funkciją "applyFilters", kuri priima masyvą elementų, ir masyvą filtravimo funkcijų. Panaudokite visas filtravimo funkcijas masyvo elementams filtruoti.');
/*
  hints:
    * JS: Array.prototype.filter
    * JS: Array.prototype.reduce
*/
{
  type FilterFunctionType<T> = (el: T) => boolean;

  const applyFilters = <T>(
    arr: T[],
    filterFunctions: FilterFunctionType<T>[]): T[] => filterFunctions
      .reduce(
        (prevArr, filterFunction) => prevArr.filter(filterFunction),
        [...arr],
      );

  const isPositive = (a: number) => a > 0;
  const isEqual = (a: number) => a % 2 === 0;
  const isInteger = (a: number) => Math.round(a) === a;

  const numbers = [1, 2, 3, 4, 5, 1.11, 1.22, 1.17, -5, -7, -4, 0, -6, -1];
  const filteredNumbers = applyFilters(numbers, [isPositive, isEqual, isInteger]);

  console.table({
    numbers: JSON.stringify(numbers),
    filteredNumbers: JSON.stringify(filteredNumbers),
  });
}
console.groupEnd();

// 40 min
console.group('4. Sukurkite funkciją "applySortings", kuri priima masyvą elementų, ir masyvą rikiavimo funkcijų. Panaudokite visas rikiavimo funkcijas masyvo elementams rikiuoti.');
/*
  Kartais norime išrikiuoti masyvą pagal kelis kriterijus:
    Rikiuojame žmones pagal miestus,
    o pagal miestus išrikiuotus žmones išrikiuojame pagal amžių, nekeičiant rikiavimo pagal miestus,
    o tuomet pagal pavardę, nekeičiant prieš tai buvusių rikiavimų

    Kitaip tariant rikiuojame:
      1. Pagal Miestą, o iš to paties miesto rikiuojame:
        2. Pagal amžių, o iš to paties miesto ir to paties amžiaus rikiuojame:
          3. Pagal pavardę

  Pavyzdžiui:

  Miestas 1↑ | Pavardė 3↑ | Amžius 2↑
  ------------------------------------
  Kaunas     | Žinlinskas | 16
  Kaunas     | Mažuronis  | 19
  Kaunas     | Britkus    | 28
  Kaunas     | Malūnas    | 32
  Kaunas     | Princas    | 32
  Kaunas     | Žiobaras   | 32
  Kaunas     | Griovys    | 47
  Rietavas   | Žinduolis  | 29
  Rietavas   | Varkienė   | 63
  Vilnius    | Bandziūga  | 17
  Vilnius    | Fosforas   | 22
  Vilnius    | Hienytė    | 22
  Vilnius    | Amadėjus   | 23
  Vilnius    | Klinkaitė  | 32

  Parašykite tokį BENDRINĮ algoritmą, kuris priimtų parametrus
    * duomenų masyvą
    * rikiavimo funkcijų masyvą
  Ir išrikiuotų masyvą pritaikant visų rikiavimo funkcijų kriterijus,
    pagal funkcijų masyve esančių rikiavimo funkcijų eiliškumą

  hints:
    * JS: Array.prototype.sort
    * JS: spread operator
    * Programming: Sorting function | Sorting function return type
    * Programming: Return Early Pattern
*/
{
  interface Person {
    surname: string;
    age: number;
    city: string;
  }

  type SortingFunctionType<T> = (a: T, b: T) => number;

  const applySortings = <T>(arr: T[], sortingFunction: SortingFunctionType<T>[]): T[] => {
    const sortedArr = [...arr].sort((a, b) => {
      for (let i = 0; i < sortingFunction.length; i += 1) {
        const sortingFunctionResult = sortingFunction[i](a, b);
        if (sortingFunctionResult !== 0) return sortingFunctionResult;
      }
      return 0;
    });

    return sortedArr;
  };

  const byCity = (a: Person, b: Person) => a.city.localeCompare(b.city);
  const byAge = (a: Person, b: Person) => a.age - b.age;
  const bySurname = (a: Person, b: Person) => a.surname.localeCompare(b.surname);

  const people: Person[] = [
    { city: 'Vilnius', surname: 'Bandziūga', age: 17 },
    { city: 'Kaunas', surname: 'Britkus', age: 28 },
    { city: 'Kaunas', surname: 'Žinlinskas', age: 16 },
    { city: 'Rietavas', surname: 'Varkienė', age: 63 },
    { city: 'Vilnius', surname: 'Hienytė', age: 22 },
    { city: 'Kaunas', surname: 'Malūnas', age: 32 },
    { city: 'Kaunas', surname: 'Žiobaras', age: 32 },
    { city: 'Vilnius', surname: 'Fosforas', age: 22 },
    { city: 'Kaunas', surname: 'Mažuronis', age: 19 },
    { city: 'Kaunas', surname: 'Princas', age: 32 },
    { city: 'Vilnius', surname: 'Klinkaitė', age: 32 },
    { city: 'Kaunas', surname: 'Griovys', age: 47 },
    { city: 'Rietavas', surname: 'Žinduolis', age: 29 },
    { city: 'Vilnius', surname: 'Amadėjus', age: 23 },
  ];

  const sortedPeople = applySortings(people, [byCity, byAge, bySurname]);
  console.table(sortedPeople);
}
console.groupEnd();

// 50 min
console.group('5. Sukurkite funkciją "groupBy", kuri priima masyvą objektų, ir obejkto savybės pavadinimą. Funkcija turi sugrupuoti masyvo elementus, pagal savybės pavadinimo reikšmes');
/*
  hints:
    * JS: Array.prototype.reduce
*/
{
  interface Person {
    surname: string;
    age: number;
    city: string;
  }

  type GroupedByKey<Type, Key extends keyof Type> = {
    [key in Key]?: Type[]
  };

  const groupBy = <
    Type,
    Key extends keyof Type,
    Result extends GroupedByKey<Type, Key> = GroupedByKey<Type, Key>,
    >(arr: Type[], key: Key): Result => {
    const groupedByKey = arr.reduce<Result>((res, el) => {
      const resKey = el[key] as unknown as keyof Result;

      if (res[resKey] !== undefined) {
        res[resKey]?.push(el);
        return res;
      }

      return {
        ...res,
        [resKey]: [el],
      };
    }, {} as Result);

    return groupedByKey;
  };

  const people: Person[] = [
    { city: 'Vilnius', surname: 'Bandziūga', age: 17 },
    { city: 'Kaunas', surname: 'Britkus', age: 28 },
    { city: 'Kaunas', surname: 'Žinlinskas', age: 16 },
    { city: 'Rietavas', surname: 'Varkienė', age: 63 },
    { city: 'Vilnius', surname: 'Hienytė', age: 22 },
    { city: 'Kaunas', surname: 'Malūnas', age: 32 },
    { city: 'Kaunas', surname: 'Žiobaras', age: 32 },
    { city: 'Vilnius', surname: 'Fosforas', age: 22 },
    { city: 'Kaunas', surname: 'Mažuronis', age: 19 },
    { city: 'Kaunas', surname: 'Princas', age: 32 },
    { city: 'Vilnius', surname: 'Klinkaitė', age: 32 },
    { city: 'Kaunas', surname: 'Griovys', age: 47 },
    { city: 'Rietavas', surname: 'Žinduolis', age: 29 },
    { city: 'Vilnius', surname: 'Amadėjus', age: 23 },
  ];

  const groupedByCity = groupBy(people, 'city');
  const groupedByAge = groupBy(people, 'age');

  console.log({
    groupedByCity,
    groupedByAge,
  });
}
console.groupEnd();
