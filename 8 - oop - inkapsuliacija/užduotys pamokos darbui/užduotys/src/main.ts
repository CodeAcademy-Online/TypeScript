/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:

  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.

  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?

  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.

    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.

  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

// 75min
console.group('1. Naudojant "getter" ir "setter" NESUTRUMPINTAS funkcijas:');
{
  class Person { }

  const person = new Person();

  // 15min
  console.groupCollapsed(`1.1. Sukurkite klasę Person, kuri turėtų privačias savybes:
      name: string,
      surname: string,
      items: Array<{title: string, price: number}>,
      age: number,
    Aprašykite konstruktorių kuris priimtų šiom savybėms skirtus parametrus ir nustatytų reikšmes naudojant "setter" funkcijas.
  `);
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('1.2. Aprašykite kiekvienai savybei "getter" funkcijas');
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('1.3. Sukurkite papildomą getterį "getFullname", kuris grąžintų pilną žmogaus vardą.');
  {
  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('1.4. Sukurkite papildomą getterį "getTotalItemValue", kuris grąžintų visų asmens daiktų kainų sumą');
  {
  }
  console.groupEnd();

  // 15min
  console.groupCollapsed('1.5. setName "setter"yje aprašykite 3 savo sugalvotas validacijas');
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('1.6. setSurname "setter"yje aprašykite 3 savo sugalvotas validacijas');
  {
  }
  console.groupEnd();

  // 15min
  console.groupCollapsed('1.7. setAge "setter"yje aprašykite 2 savo sugalvotas validacijas');
  {
  }
  console.groupEnd();

  // 20min
  console.groupCollapsed('1.8. setItems "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
  {
  }
  console.groupEnd();
}
console.groupEnd();

// PASIKOPIJUOKITE VISĄ PIRMĄ UŽDUOTĮ IR PAKEISTIKTE KODĄ NAUDOJANT NAUJĄ "get" ir "set" SINTAKSĘ
// 55min
console.group('2. Naudojant "get" ir "set" ES6 funkcijas:');
{
  class Person { }

  const person = new Person();


  // 10min
  console.groupCollapsed(`2.1. Sukurkite klasę Person, kuri turėtų privačias savybes:
      name: string,
      surname: string,
      items: Array<{title: string, price: number}>,
      age: number,
    Aprašykite konstruktorių kuris priimtų šiom savybėms skirtus parametrus ir nustatytų reikšmes naudojant "setter" funkcijas.
  `);
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('2.2. Aprašykite kiekvienai savybei ES6 "get" funkcijas');
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('2.3. Sukurkite papildomą getterį "fullname", kuris grąžintų pilną žmogaus vardą.');
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('2.4. Sukurkite papildomą getterį "totalItemValue", kuris grąžintų visų asmens daiktų kainų sumą');
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('2.5. name "setter"yje aprašykite 3 savo sugalvotas validacijas');
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('2.6. surname "setter"yje aprašykite 3 savo sugalvotas validacijas');
  {
  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('2.7. age "setter"yje aprašykite 2 savo sugalvotas validacijas');
  {
  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('2.8. items "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
  {
  }
  console.groupEnd();
}
console.groupEnd();
