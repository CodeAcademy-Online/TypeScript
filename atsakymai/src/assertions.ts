/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau 
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = "Grace" as string;

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
formAddUser.onsubmit = (e) => {
  e.preventDefault();
  console.log('Ateityje pridėsiu vartotoją');
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  // Tipai:
  type EventHandler = (e: MouseEvent) => void;
  // Bendrai naudojami kintamieji:
  const btn: HTMLButtonElement = document.querySelector('#button') as HTMLButtonElement;

  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    const printTextOnClick: EventHandler = () => console.log('papausta!');

    btn.addEventListener('click', printTextOnClick);
  }
  console.groupEnd();

  console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
  {
    const squareContainer: HTMLDivElement = document.querySelector('#sq-container') as HTMLDivElement;
    const addSquare: EventHandler = () => {
      const sq: HTMLSpanElement = document.createElement('span');
      sq.className = 'sq';
      squareContainer.append(sq);
    }

    btn.addEventListener('click', addSquare);
  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {
    const countContainer: HTMLParagraphElement = document.querySelector('#count-container') as HTMLParagraphElement;

    let sqCount: number = 0;
    const incSqCount: EventHandler = () => {
      sqCount++;
      countContainer.innerHTML = `Kvadratų skaičius: ${sqCount}`;
    }

    btn.addEventListener('click', incSqCount);
  }
  console.groupEnd();

}
console.groupEnd();