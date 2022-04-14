type PrimitiveType = string | number | boolean;

/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai

  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const strings: string[] = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];
const booleans: boolean[] = [true, true, true, true, false];

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const solution = <Type>(arr: Type[]): Type | undefined => {
    return arr[0];
  }

  console.log({ numbers, result: solution(numbers) });
  console.log({ strings, result: solution(strings) });
  console.log({ booleans, result: solution(booleans) });
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const solution = <Type>(arr: Type[]): Type | undefined => {
    return arr[arr.length - 1];
  }

  console.log({ numbers, result: solution(numbers) });
  console.log({ strings, result: solution(strings) });
  console.log({ booleans, result: solution(booleans) });
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  const solution = <Type extends PrimitiveType>(arr: Type[]): Type[] => {
    const copy: Type[] = arr.map(x => x);

    return copy;
  }

  console.log({ numbers, result: solution<number>(numbers) });
  console.log({ strings, result: solution<string>(strings) });
  console.log({ booleans, result: solution<boolean>(booleans) });
}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]
  type ArgumentSample = [PrimitiveType, number];

  const solution = <T extends PrimitiveType>(value: T, count: number): Array<T> => {
    return Array.from(new Array(count)).map(_ => value);
  }

  const dataSamples: ArgumentSample[] = [
    ['a', 2],
    [77, 4],
    [true, 1],
  ];

  dataSamples.forEach(
    (args) => console.log(
      `solution(${args.join(', ')}):`,
      solution(...args)
    )
  );
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  type ArgumentSample<T> = [T[], T[]];

  const solution = <Type>(arr1: Type[], arr2: Type[]): Type[] => {
    return [...arr1, ...arr2];
  }

  const args1: ArgumentSample<number> = [[1, 2, 3], [4, 5, 6]];
  const args2: ArgumentSample<string> = [['labas', 'mano', 'vardas'], ['yra', 'ponas', 'krabas']];
  const args3: ArgumentSample<boolean> = [[true, true, true], [false, false, false]];

  console.log({ args: args1, result: solution(...args1) });
  console.log({ args: args2, result: solution(...args2) });
  console.log({ args: args3, result: solution(...args3) });
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  type IncapsulatedValueObject<Type> = {
    setValue: (newValue: Type) => void,
    getValue: () => Type
  };


  const solution = <Type>(initialValue: Type): IncapsulatedValueObject<Type> => {
    let value: Type = initialValue;

    return {
      setValue: (newValue) => value = newValue,
      getValue: () => value,
    }
  }

  // Spausdinimas
  const value1: number = 7;
  const value2: Array<string> = ["Sidnius", "Mauricijus", "Penktasis"];
  const value3: { name: string, surname: string } = { name: 'Fanatijus', surname: 'Labdara' };

  const obj1 = solution(value1);
  const obj2 = solution(value2);
  const obj3 = solution(value3);

  console.log('initial values');
  console.log({
    value1: obj1.getValue(),
    value2: obj2.getValue(),
    value3: obj3.getValue(),
  })

  console.log('changing values...');
  obj1.setValue(9);
  obj2.setValue(['Pakeista']);
  obj3.setValue({ name: 'Pakaitalas', surname: 'Fuflo' });
}
console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`
);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string,
    surname: string,
  };

  type Student = Person & {
    university: string,
    course: number,
  };

  type Worker = Person & {
    avgMonthlyPay: number,
  };

  type GroupedPeople = {
    people: Person[],
    students: Student[],
    workers: Worker[],
  };

  const isWorker = (person: Person): person is Worker => {
    return (person as Worker).avgMonthlyPay !== undefined;
  }

  const isStudent = (person: Person): person is Student => {
    const student = person as Student;

    return student.university !== undefined && student.course !== undefined;
  }

  const solution = (people: Person[]): GroupedPeople => {
    const groupedPeople = people.reduce<GroupedPeople>((prevGroupedPeople, person) => {
      const newGroupedPeople = { ...prevGroupedPeople };

      if (isWorker(person)) newGroupedPeople.workers.push(person);
      if (isStudent(person)) newGroupedPeople.students.push(person);
      else newGroupedPeople.people.push(person);

      return newGroupedPeople;
    }, {
      people: [],
      students: [],
      workers: [],
    });

    return groupedPeople;
  }

  const people: (Person | Student | Worker)[] = [
    { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
    { name: 'Kurpius', surname: 'Medainis' },
    { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
    { name: 'Ferodijus', surname: 'Cilcius' },
    { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
    { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
    { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
    { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
  ];

  // (Person | Student | Worker)[] === Person[] ????
  // https://www.javatpoint.com/typescript-duck-typing
  const groupedPeople = solution(people);

  console.log(groupedPeople);
}
