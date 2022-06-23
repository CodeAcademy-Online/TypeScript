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

// 30min
console.group('1. Sąjungos operatorius - UNIONS');
{
  // 10min
  console.groupCollapsed('1.1 Sukurkite funkciją "print" kuri priimą string, number arba boolean ir jį atspausdiną');
  {

  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('1.2 Sukurkite funkciją "getLength" kuri priimą string arba masyvą ir grąžina elementų skaičių');
  {

  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('1.3 Sukurkite funkciją "isEmpty" kuri priimą string arba masyvą ir grąžiną true, jei parametras tuščias, priešingu atveju - false');
  {

  }
  console.groupEnd();
}
console.groupEnd();

// 30min
console.group('2. Tipų rinkiniai - TUPLES');
{
  // 15min
  console.groupCollapsed('2.1. Sukurkite funkciją "getMinMax" kuri priima skaičių masyvą ir grąžina dviejų vietų tipų rinkinį. Pirmas grąžinamo rinkinio elementas - mažiausias skaičių masyvas, antras - didžiausias');
  {

  }
  console.groupEnd();

  // 15min
  console.groupCollapsed('2.2 Sukurkite funkciją "calcDistance", kuri pagal 2 taškus (Coordinate2D), suskaičiuotų atstumą tarp taškų');
  {

  }
  console.groupEnd();
}
console.groupEnd();

// 35min
console.group('3. Prielaidos - ASSERTIONS');
{
  // 15min
  console.groupCollapsed('3.1 Parašykite kodą, kuris parsiųstų skelbimus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/posts?userId=1". Parsiųstus duomenis įrašykite į kintamajį "posts", darant parsiųstų duomenų tipo prielaidą. Prieš parsiunčiant duomenis apsirašykite "Post" tipą.');
  {

  }
  console.groupEnd();

  // 20min
  console.groupCollapsed('3.2 Parašykite kodą, kuris parsiųstų vartotojus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/users". Parsiųstus duomenis įrašykite į kintamajį "users", darant parsiųstų duomenų tipo prielaidą. Prieš siunčiant duomenis apsirašykite "User" tipą.');
  {

  }
  console.groupEnd();
}
console.groupEnd();

// 25min
console.group('4. Konkretūs tipai - LITERAL TYPES');
{
  // 25min
  console.groupCollapsed('4.1 Sukurkite objektą saugoti produktams, Product, pagal kategorijas: "food", "clothes" ir "other". "products" objektas turi 3 savybės pagal kategorijų pavadinimus, kurių reikšmės - Product[]. Sukūrus ir tipais aprašius "products" struktūrą, sukurkite funkciją "addProduct", kuri pridės produktą pagal kategoriją į "products" objektą. Ši funkcija turi priimti 2 parametrus: 1 - produktas, 2 - kategorijos pavadinimas. Kategorijos pavadinimas turi būti konkretus string tipas, pagal galimas produktų objekto kategorijas. Produkto tipą apsirašykite laisvai.');
  {

  }
  console.groupEnd();
}
console.groupEnd();

// 25min
console.group('5. Išvardinimai - ENUMS');
{
  // 25min
  console.groupCollapsed('5.1 Sukurkite artmetinių veiksmų konstantų išvardinimą: Operation -> Add, Subtract, Multiply, Divide. Parašykite funkciją "calc" kuri priima 2 skaičius ir operaciją "Operation". Pagal perduotą operaciją atlikite veiksmus ir grąžinkite rezultatą');
  {

  }
  console.groupEnd();
}
console.groupEnd();
