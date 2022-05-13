type Animal = {
  birthDate: Date,
  weight: number,
  type: string,
  title: string,
};

type Flat = {
  address: string,
  number: string,
  area: number,
  price: number,
  isForSale: boolean,
};

interface Flower {
  title: string;
  type: string;
  weight: number;
  height: number;
}

interface Student {
  name: string;
  surname: string;
  studyProgram: string;
  course: number;
  hasLoan: boolean;
}
