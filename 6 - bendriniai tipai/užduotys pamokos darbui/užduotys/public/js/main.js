"use strict";
console.group('1. Sukurkite funkciją "joinArrays", kuri apjungia 2 masyvus. Grąžinamo masyvo tipas turi būti lygus parametrais perduotų masyvų tipų sajungai');
{
    const joinArrays = (arr1, arr2) => [...arr1, ...arr2];
    console.table({
        'joinArrays([1, 2, 3], [4, 5, 6]': joinArrays([1, 2, 3], [4, 5, 6]),
        'joinArrays([1, 2, 3], ["a", "b"]': joinArrays([1, 2, 3], ['a', 'b']),
    });
}
console.groupEnd();
console.group('2. Sukurkite funkciją "joinObjects", kuri apjungia 2 objektus. Apjungtam objekto tipe, turi būti visos savybės kurios buvo objekte pirmu parametru, ir objekte antru parametru.');
{
    const joinObjects = (obj1, obj2) => ({
        ...obj1,
        ...obj2,
    });
    const pig = {
        sayOinkOink() {
            console.log('Oink Oink');
        },
        weight: 80,
        legs: 4,
    };
    const spider = {
        sprayWeb() {
            console.log('https://bwscience.com/wp-content/uploads/2016/10/spider-web.jpg');
        },
        weight: 80,
        legs: 8,
    };
    const spiderPig = joinObjects(spider, pig);
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
console.group('3. Sukurkite funkciją "applyFilters", kuri priima masyvą elementų, ir masyvą filtravimo funkcijų. Panaudokite visas filtravimo funkcijas masyvo elementams filtruoti.');
{
    const applyFilters = (arr, filterFunctions) => filterFunctions
        .reduce((prevArr, filterFunction) => prevArr.filter(filterFunction), [...arr]);
    const isPositive = (a) => a > 0;
    const isEqual = (a) => a % 2 === 0;
    const isInteger = (a) => Math.round(a) === a;
    const numbers = [1, 2, 3, 4, 5, 1.11, 1.22, 1.17, -5, -7, -4, 0, -6, -1];
    const filteredNumbers = applyFilters(numbers, [isPositive, isEqual, isInteger]);
    console.table({
        numbers: JSON.stringify(numbers),
        filteredNumbers: JSON.stringify(filteredNumbers),
    });
}
console.groupEnd();
console.group('4. Sukurkite funkciją "applySortings", kuri priima masyvą elementų, ir masyvą rikiavimo funkcijų. Panaudokite visas rikiavimo funkcijas masyvo elementams rikiuoti.');
{
    const applySortings = (arr, sortingFunction) => {
        const sortedArr = [...arr].sort((a, b) => {
            for (let i = 0; i < sortingFunction.length; i += 1) {
                const sortingFunctionResult = sortingFunction[i](a, b);
                if (sortingFunctionResult !== 0)
                    return sortingFunctionResult;
            }
            return 0;
        });
        return sortedArr;
    };
    const byCity = (a, b) => a.city.localeCompare(b.city);
    const byAge = (a, b) => a.age - b.age;
    const bySurname = (a, b) => a.surname.localeCompare(b.surname);
    const people = [
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
console.group('5. Sukurkite funkciją "groupBy", kuri priima masyvą objektų, ir obejkto savybės pavadinimą. Funkcija turi sugrupuoti masyvo elementus, pagal savybės pavadinimo reikšmes');
{
    const groupBy = (arr, key) => {
        const groupedByKey = arr.reduce((res, el) => {
            const resKey = el[key];
            if (res[resKey] !== undefined) {
                res[resKey]?.push(el);
                return res;
            }
            return {
                ...res,
                [resKey]: [el],
            };
        }, {});
        return groupedByKey;
    };
    const people = [
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
//# sourceMappingURL=main.js.map