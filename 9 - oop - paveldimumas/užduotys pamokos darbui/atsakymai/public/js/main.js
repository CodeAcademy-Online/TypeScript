"use strict";
console.group('1. Sukurkite klasę tėvinę Person vaikinėms klasėms ir išsaugokite joje bendrą funkcionalumą.');
{
    class Person {
        name;
        surname;
        constructor({ name, surname }) {
            this.name = name;
            this.surname = surname;
        }
        get fullname() {
            return `${this.name} ${this.surname}`;
        }
    }
    class Student extends Person {
        marks;
        constructor(personProps) {
            super(personProps);
            this.marks = [];
        }
        get avg() {
            return this.marks.length > 0
                ? this.marks.reduce((s, x) => s + x) / this.marks.length
                : 0;
        }
        addMark(mark) {
            this.marks.push(mark);
        }
    }
    class Lecturer extends Person {
        static MIN_SALARY = 1800;
        static MAX_SALARY = 4400;
        static GPM_PERC = 0.20;
        static PSD_PERC = 0.0698;
        static VSD_PERC = 0.1252;
        _salary;
        constructor(salary, personProps) {
            super(personProps);
            this.salary = salary;
        }
        set salary(val) {
            if (val < Lecturer.MIN_SALARY || val > Lecturer.MAX_SALARY) {
                throw new Error(`Lecturer salary must be in range ${Lecturer.MIN_SALARY}-${Lecturer.MAX_SALARY}`);
            }
            const valStr = String(val);
            const numbersAfterFor = valStr.split('.')[1];
            if (numbersAfterFor !== undefined && numbersAfterFor.length > 2) {
                throw new Error('Lecturer salary precision must be no more than 2 points');
            }
            this._salary = val;
        }
        get salary() {
            return this._salary;
        }
        get salaryNeto() {
            const gmpTax = this._salary * Lecturer.GPM_PERC;
            const psdTax = this._salary * Lecturer.PSD_PERC;
            const vsdTax = this._salary * Lecturer.VSD_PERC;
            return Math.round(this._salary - gmpTax - psdTax - vsdTax);
        }
    }
    const allPeople = [];
    console.group('1.1. Sukurkite klasę Person, kurios objektams būtų galima priskirti vardą ir pavardę. Šios klasės objektams turi susigeneruoti id - unikalus raktas. Taip pat sukurkite get"erį fullname, kuris grąžina vardą ir pavardę atskirtus tarpu. Atspausdinkite kelis šios klasės objektus, ir pademonstruokite get"erio veikimą.');
    {
        const person1 = new Person({ name: 'Varguna', surname: 'Špagelytė' });
        const person2 = new Person({ name: 'Rainis', surname: 'Parkūras' });
        const people = [person1, person2];
        allPeople.push(...people);
        people.forEach((p) => console.log(p));
        people.forEach((p) => console.log(p.fullname));
    }
    console.groupEnd();
    console.group('1.2. Sukurkite klasę Student, kuri paveldėtų klasę Person. Be Person klasės paveldimų savybių, klasę Student turi turėti savybę "marks", kurioje bus saugomi studento pažymiai. Konstruktoriaus vykdymo metu, "marks" reikšmei turi būti sukuriamas tuščias masyvas. Student klasėje sukurkite metodą "addMark" kuris leistų įdėti naują pažymį - sveiką skaičių nuo 1 iki 10. Taip pat sukurkite get"erį "avg", kuris skaičiuotų studento vidurkį pagal esamus pažymius. Sukurkite bent 2 Student klasės objektus ir atspausdinkite visus get"erius ir pavaizduokite metodų funkcionalumą konsolėje.');
    {
        const stud1 = new Student({ name: 'Kiauraklis', surname: 'Balkonėjus' });
        const stud2 = new Student({ name: 'Sulinda', surname: 'Gylaitaitė' });
        const students = [stud1, stud2];
        allPeople.push(...students);
        console.group('Studenčiokai');
        students.forEach((s) => console.log(s));
        console.groupEnd();
        console.group('Studentų vidurkiai:');
        students.forEach(({ fullname, avg }) => console.log({ fullname, avg }));
        console.groupEnd();
        console.group('Pridedami pažymiai:');
        const marks1 = [5, 6, 7];
        console.log(`Pirmam studentui: ${marks1.join(', ')}`);
        marks1.forEach((mark) => stud1.addMark(mark));
        const marks2 = [5, 9, 10];
        console.log(`Antram studentui: ${marks2.join(', ')}`);
        marks2.forEach((mark) => stud2.addMark(mark));
        console.groupEnd();
        console.group('Studentų vidurkiai po pridėjimo:');
        students.forEach(({ fullname, avg }) => console.log({ fullname, avg }));
        console.groupEnd();
    }
    console.groupEnd();
    console.group('1.3. Sukurkite klasę Lecturer, kuri paveldėtų klasę Person. Papildomai klasei Lecturer sukurkite savybę "salary", kuri privalo būti priskirta objekto sukūrimo metu. Inkapsuliuokite savybę "salary" taip, kad ji galėtų būti skaičius nuo 1800 iki 4400 su ne daugiau nei 2 skaičiais po kablelio. Taip pat sukurkite get"erį "salaryNeto", kuris atspausdintų suapvalintą atlyginimą iki sveikų skaičių atskaičiavus mokesčius: GPM 20%, PSD 6.98%, VSD 12.52%. Sukurkite bent 2 Lecturer klasės objektus ir atspausdinkite visus get"erius konsolėje.');
    {
        const lecturer1 = new Lecturer(3000, { name: 'Servacijus', surname: 'Tritonas' });
        const lecturer2 = new Lecturer(3200, { name: 'Vorė', surname: 'Tinklaitienė' });
        const lecturers = [lecturer1, lecturer2];
        allPeople.push(...lecturers);
        console.group('Dėstytuvai:');
        lecturers.forEach((l) => console.log(l));
        console.groupEnd();
        console.group('Dėstytojų atlyginimai:');
        lecturers.forEach(({ fullname, salary, salaryNeto }) => console.log({
            fullname,
            salary,
            salaryNeto,
        }));
        console.groupEnd();
    }
    console.groupEnd();
    console.group('1.4. Sukurkite viešai [1.] užduočiai pasiekiamą masyvą "allPeople". [1.1], [1.2] ir [1.3] užduotyse sukurtus objektus įdėkite į šį masyvą. Atspausdinkite visų žmonių elementų "fullname"');
    {
        allPeople.forEach(({ fullname }) => console.log(fullname));
    }
}
console.groupEnd();
//# sourceMappingURL=main.js.map