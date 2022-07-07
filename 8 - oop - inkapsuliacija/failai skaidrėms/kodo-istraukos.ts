// Inkapsuliacijos įgyvendinimas - Kuriant viešas “getter” ir “setter” funkcijas
{
  class Person {
    private static readonly ONLY_LETTERS_REGEX = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ ]+$/;
    private name: string;

    constructor(name: string) {
      this.setName(name);
    }

    public setName(name: string) {
      if (name === '') throw new Error('Negali būti tuščias');
      if (name.length < 2) throw new Error('Nors 2 raidės');
      if (!Person.ONLY_LETTERS_REGEX.test(name)) throw new Error('Tik raidės ir tarpai');

      this.name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    }

    public getName() {
      return this.name;
    }
  }

  // ---

  try { const person = new Person(''); }
  catch (error) { console.log(error); }

  try { const person = new Person('A'); }
  catch (error) { console.log(error); }

  try { const person = new Person('54546'); }
  catch (error) { console.log(error); }

  try {
    const person = new Person('peneDIKtas');
    console.log(person);
  }
  catch (error) { console.log(error); }

  // ---
  {



    const person = new Person('Furija');

    console.log(person);







    console.log(person.name);




  }
  // ---
  {

    const person = new Person('Ryčka');

    console.log(person);







    person.name = 'Robertas';
  }
  // --
  {

    const person = new Person('Alugirtas');

    console.log(person);
    console.log(person.getName());

    person.setName('Činkotkis');

    console.log(person);
    console.log(person.getName());


    try { person.setName('BaValas16') }
    catch (error) { console.log(error); }
  }

}

// Inkapsuliacijos įgyvendinimas - Naudojant ES6 “get” ir “set”
{
  class Person {
    private static readonly ONLY_LETTERS_REGEX = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ ]+$/;
    private _name: string;

    constructor(name: string) {
      this.name = name;
    }

    public set name(val: string) {
      if (val === '') throw new Error('Negali būti tuščias');
      if (val.length < 2) throw new Error('Nors 2 raidės');
      if (!Person.ONLY_LETTERS_REGEX.test(val)) throw new Error('Tik raidės ir tarpai');

      this._name = val[0].toUpperCase() + val.slice(1).toLowerCase();
    }

    public get name() {
      return this._name;
    }
  }

  // ---

  try { const person = new Person(''); }
  catch (error) { console.log(error); }

  try { const person = new Person('A'); }
  catch (error) { console.log(error); }

  try { const person = new Person('54546'); }
  catch (error) { console.log(error); }

  try {
    const person = new Person('peneDIKtas');
    console.log(person);
  }
  catch (error) { console.log(error); }

  // ---
  {
    const person = new Person('Ryčka');

    console.log(person);
    console.log(person.name);

    person.name = 'Robertas';

    console.log(person);
    console.log(person.name);

    // person.

    try { person.name = 'BaValas16' }
    catch (error) { console.log(error); }
  }

}


