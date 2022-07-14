
{
  class Student {
    private marks: number[];

    constructor(
      private name: string,
      private surname: string,
    ) {
      this.marks = [];
    }

    get fullname() {
      return this.name + ' ' + this.surname;
    }

    get avg() {
      return this.marks.reduce((s, x) => s + x, 0) / this.marks.length;
    }

    addMark(mark: number) {
      this.marks.push(mark);
    }
  }

  class Lecturer {
    constructor(
      private name: string,
      private surname: string,
      private salary: number,
    ) {
      this.salary = salary;
    }

    get fullname() {
      return this.name + ' ' + this.surname;
    }
  }
}

{
  interface PersonProps {
    name: string;
    surname: string;
  }

  class Person {
    protected name: string;
    protected surname: string;

    constructor({ name, surname }: PersonProps) {
      this.name = name;
      this.surname = surname;
    }

    get fullname() {
      return this.name + ' ' + this.surname;
    }
  }

  class Student extends Person {
    private marks: number[];

    constructor(personProps: PersonProps) {
      super(personProps);
      this.marks = [];
    }

    get avg() {
      return this.marks.reduce((s, x) => s + x, 0) / this.marks.length;
    }

    addMark(mark: number) {
      this.marks.push(mark);
    }
  }

  class Lecturer extends Person {
    constructor(private salary: number, personProps: PersonProps) {
      super(personProps);
      this.salary = salary;
    }
  }

}




