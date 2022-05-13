type Student = {
  name: string,
  surname: string,
  course: number,
  avg: number,
}

const students: Student[] = [
  { name: 'Valius', surname: 'Koridas', course: 1, avg: 7.2 },
  { name: 'Virga', surname: 'Maikaitė', course: 2, avg: 6.3 },
  { name: 'Šurna', surname: 'Mauzytė', course: 1, avg: 8.1 },
  { name: 'Grybas', surname: 'Beržauskas', course: 1, avg: 8.1 },
  { name: 'Surtė', surname: 'Koridaitė', course: 3, avg: 9.7 },
  { name: 'Vazonius', surname: 'Sėkla', course: 4, avg: 5.2 },
];

const fullNames: string[] = students.map(({ name, surname }) => `${name} ${surname}`);
const studentsOfFirstCourse: Student[] = students.filter(({ course }) => course === 1);
const studentsAvg: number = students.reduce((avgSum, { avg }) => avgSum + avg, 0) / students.length;

console.log(fullNames);
console.log(studentsOfFirstCourse);
console.log(studentsAvg);
