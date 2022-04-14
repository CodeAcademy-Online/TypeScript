"use strict";
const someNumber = 17;
const title = "Grace";
const formAddUser = document.querySelector('#form-add-user');
formAddUser.onsubmit = (e) => {
    e.preventDefault();
    console.log('Ateityje pridėsiu vartotoją');
};
console.group('Assertions - užduotys');
{
    const btn = document.querySelector('#button');
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        const printTextOnClick = () => console.log('papausta!');
        btn.addEventListener('click', printTextOnClick);
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        const squareContainer = document.querySelector('#sq-container');
        const addSquare = () => {
            const sq = document.createElement('span');
            sq.className = 'sq';
            squareContainer.append(sq);
        };
        btn.addEventListener('click', addSquare);
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        const countContainer = document.querySelector('#count-container');
        let sqCount = 0;
        const incSqCount = () => {
            sqCount++;
            countContainer.innerHTML = `Kvadratų skaičius: ${sqCount}`;
        };
        btn.addEventListener('click', incSqCount);
    }
    console.groupEnd();
}
console.groupEnd();
