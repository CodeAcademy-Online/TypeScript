"use strict";
console.group('1. Sąjungos operatorius - UNIONS');
{
    console.groupCollapsed('1.1 Sukurkite funkciją "print" kuri priimą string, number arba boolean ir jį atspausdiną');
    {
        const print = (a) => console.log(a);
        console.log('print(\'Labas\')...');
        print('Labas');
        console.log('print(77)...');
        print(77);
        console.log('print(true)...');
        print(true);
    }
    console.groupEnd();
    console.groupCollapsed('1.2 Sukurkite funkciją "getLength" kuri priimą string arba masyvą ir grąžina elementų skaičių');
    {
        const getLength = (a) => a.length;
        console.table({
            'getLength(\'Labas\')': getLength('Labas'),
            'getLength([1, 2, 3, 4])': getLength([1, 2, 3, 4]),
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.3 Sukurkite funkciją "isEmpty" kuri priimą string arba masyvą ir grąžiną true, jei parametras tuščias, priešingu atveju - false');
    {
        const isEmpty = (a) => a.length === 0;
        console.table({
            'isEmpty(\'Labas\')': isEmpty('Labas'),
            'isEmpty([1, 2, 3, 4])': isEmpty([1, 2, 3, 4]),
        });
    }
    console.groupEnd();
}
console.groupEnd();
console.group('2. Tipų rinkiniai - TUPLES');
{
    console.groupCollapsed('2.1. Sukurkite funkciją "getMinMax" kuri priima skaičių masyvą ir grąžina dviejų vietų tipų rinkinį. Pirmas grąžinamo rinkinio elementas - mažiausias skaičių masyvas, antras - didžiausias');
    {
        const getMinMax = (numbers) => {
            const sortedNumbers = [...numbers].sort((a, b) => a - b);
            const [min] = sortedNumbers;
            const max = sortedNumbers[sortedNumbers.length - 1];
            return [min, max];
        };
        console.table({
            'getMinMax[1, 7, -9, 5, 123]': getMinMax([1, 7, -9, 5, 123]),
            'getMinMax[7, 7, 4, 7, 8, 2, 7, 7]': getMinMax([7, 7, 4, 7, 8, 2, 7, 7]),
            'getMinMax[1, 2, 3, 4, 5, 6, 9, -7, -11, 2]': getMinMax([1, 2, 3, 4, 5, 6, 9, -7, -11, 2]),
        });
    }
    console.groupEnd();
    console.groupCollapsed('2.2 Sukurkite funkciją "calcDistance", kuri pagal 2 taškus (Coordinate2D), suskaičiuotų atstumą tarp taškų');
    {
        const calcDistance = (p1, p2) => {
            const [x1, y1] = p1;
            const [x2, y2] = p2;
            const deltaX = Math.abs(x1 - x2);
            const deltaY = Math.abs(y1 - y2);
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
            return distance;
        };
        console.table({
            'calcDistance([0, 0], [3, 4])': calcDistance([0, 0], [3, 4]),
            'calcDistance([1, 1], [7, 9])': calcDistance([1, 1], [7, 9]),
            'calcDistance([-2, 3], [13, 11])': calcDistance([-2, 3], [13, 11]),
        });
    }
    console.groupEnd();
}
console.groupEnd();
console.group('3. Prielaidos - ASSERTIONS');
{
    console.groupCollapsed('3.1 Parašykite kodą, kuris parsiųstų skelbimus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/posts?userId=1". Parsiųstus duomenis įrašykite į kintamajį "posts", darant parsiųstų duomenų tipo prielaidą. Prieš parsiunčiant duomenis apsirašykite "Post" tipą.');
    {
        let posts;
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then((response) => response.json())
            .then(((postData) => {
            posts = postData;
            console.log('3.1 Užduoties rezultatas - Post[]');
            console.table(posts);
        }));
        console.log('Rezultatas bus atspausdinama gale konsolės, nes siuntimas yra Promise...');
    }
    console.groupEnd();
    console.groupCollapsed('3.2 Parašykite kodą, kuris parsiųstų vartotojus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/users". Parsiųstus duomenis įrašykite į kintamajį "users", darant parsiųstų duomenų tipo prielaidą. Prieš siunčiant duomenis apsirašykite "User" tipą.');
    {
        let users;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(((userData) => {
            users = userData;
            console.log('3.2 Užduoties rezultatas - User[]');
            console.table(users);
        }));
        console.log('Rezultatas bus atspausdinama gale konsolės, nes siuntimas yra Promise...');
    }
    console.groupEnd();
}
console.groupEnd();
console.group('4. Konkretūs tipai - LITERAL TYPES');
{
    console.groupCollapsed('4.1 Sukurkite objektą saugoti produktams, Product, pagal kategorijas: "food", "clothes" ir "other". "products" objektas turi 3 savybės pagal kategorijų pavadinimus, kurių reikšmės - Product[]. Sukūrus ir tipais aprašius "products" struktūrą, sukurkite funkciją "addProduct", kuri pridės produktą pagal kategoriją į "products" objektą. Ši funkcija turi priimti 2 parametrus: 1 - produktas, 2 - kategorijos pavadinimas. Kategorijos pavadinimas turi būti konkretus string tipas, pagal galimas produktų objekto kategorijas. Produkto tipą apsirašykite laisvai.');
    {
        const products = {
            food: [],
            clothes: [],
            other: [],
        };
        const addProduct = (product, category) => {
            products[category].push(product);
        };
        console.log("addProduct({ id: '1', title: 'Milk', price: 0.89 }, 'food');");
        addProduct({ id: '1', title: 'Milk', price: 0.89 }, 'food');
        console.log("addProduct({ id: '2', title: 'Bread', price: 1.19 }, 'food');");
        addProduct({ id: '2', title: 'Bread', price: 1.19 }, 'food');
        console.log("addProduct({ id: '3', title: 'Jeans', price: 35.99 }, 'clothes');");
        addProduct({ id: '3', title: 'Jeans', price: 35.99 }, 'clothes');
        console.log("addProduct({ id: '4', title: 'T-shirt', price: 19.99 }, 'clothes');");
        addProduct({ id: '4', title: 'T-shirt', price: 19.99 }, 'clothes');
        console.log("addProduct({ id: '5', title: 'Ring', price: 17.99 }, 'other');");
        addProduct({ id: '5', title: 'Ring', price: 17.99 }, 'other');
        console.log(products);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('5. Išvardinimai - ENUMS');
{
    console.groupCollapsed('5.1 Sukurkite artmetinių veiksmų konstantų išvardinimą: Operation -> Add, Subtract, Multiply, Divide. Parašykite funkciją "calc" kuri priima 2 skaičius ir operaciją "Operation". Pagal perduotą operaciją atlikite veiksmus ir grąžinkite rezultatą');
    {
        let Operation;
        (function (Operation) {
            Operation[Operation["Add"] = 0] = "Add";
            Operation[Operation["Subbtract"] = 1] = "Subbtract";
            Operation[Operation["Multiply"] = 2] = "Multiply";
            Operation[Operation["Divide"] = 3] = "Divide";
        })(Operation || (Operation = {}));
        const calc = (a, b, op) => {
            switch (op) {
                case Operation.Add: return a + b;
                case Operation.Subbtract: return a - b;
                case Operation.Multiply: return a * b;
                case Operation.Divide: return a / b;
                default: throw new Error('Error: invalid operation!');
            }
        };
        console.table({
            'calc(2, 3, Operation.Add)': calc(2, 3, Operation.Add),
            'calc(2, 3, Operation.Subbtract)': calc(2, 3, Operation.Subbtract),
            'calc(2, 3, Operation.Multiply)': calc(2, 3, Operation.Multiply),
            'calc(2, 3, Operation.Divide)': calc(2, 3, Operation.Divide),
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map