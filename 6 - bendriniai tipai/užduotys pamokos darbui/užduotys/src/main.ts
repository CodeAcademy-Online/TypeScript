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

// 10 min
console.group('1. Sukurkite funkciją "joinArrays", kuri apjungia 2 masyvus. Grąžinamo masyvo tipas turi būti lygus parametrais perduotų masyvų tipų sajungai');
{
}
console.groupEnd();

// 25 min
console.group('2. Sukurkite funkciją "joinObjects", kuri apjungia 2 objektus. Apjungtam objekto tipe, turi būti visos savybės kurios buvo objekte pirmu parametru, ir objekte antru parametru.');
/*
  hints:
    * TS: generic constraints
    * JS: spread operator
*/
{
  type CommonProperties<T extends object, K extends Object> = keyof (T | K);

  type Merge<T extends object, K extends Object> = Omit<T, CommonProperties<T, K>> & K;
}
console.groupEnd();

// 30 min
console.group('3. Sukurkite funkciją "applyFilters", kuri priima masyvą elementų, ir masyvą filtravimo funkcijų. Panaudokite visas filtravimo funkcijas masyvo elementams filtruoti.');
/*
  hints:
    * JS: Array.prototype.filter
    * JS: Array.prototype.reduce
*/
{
}
console.groupEnd();

// 40 min
console.group('4. Sukurkite funkciją "applySortings", kuri priima masyvą elementų, ir masyvą rikiavimo funkcijų. Panaudokite visas rikiavimo funkcijas masyvo elementams rikiuoti.');
/*
  Kartais norime išrikiuoti masyvą pagal kelis kriterijus:
    Rikiuojame žmones pagal miestus,
    o pagal miestus išrikiuotus žmones išrikiuojame pagal amžių, nekeičiant rikiavimo pagal miestus,
    o tuomet pagal pavardę, nekeičiant prieš tai buvusių rikiavimų

    Kitaip tariant rikiuojame:
      1. Pagal Miestą, o iš to paties miesto rikiuojame:
        2. Pagal amžių, o iš to paties miesto ir to paties amžiaus rikiuojame:
          3. Pagal pavardę

  Pavyzdžiui:

  Miestas 1↑ | Pavardė 3↑ | Amžius 2↑
  ------------------------------------
  Kaunas     | Žinlinskas | 16
  Kaunas     | Mažuronis  | 19
  Kaunas     | Britkus    | 28
  Kaunas     | Malūnas    | 32
  Kaunas     | Princas    | 32
  Kaunas     | Žiobaras   | 32
  Kaunas     | Griovys    | 47
  Rietavas   | Žinduolis  | 29
  Rietavas   | Varkienė   | 63
  Vilnius    | Bandziūga  | 17
  Vilnius    | Fosforas   | 22
  Vilnius    | Hienytė    | 22
  Vilnius    | Amadėjus   | 23
  Vilnius    | Klinkaitė  | 32

  Parašykite tokį BENDRINĮ algoritmą, kuris priimtų parametrus
    * duomenų masyvą
    * rikiavimo funkcijų masyvą
  Ir išrikiuotų masyvą pritaikant visų rikiavimo funkcijų kriterijus,
    pagal funkcijų masyve esančių rikiavimo funkcijų eiliškumą

  hints:
    * JS: Array.prototype.sort
    * JS: spread operator
    * Programming: Sorting function | Sorting function return type
    * Programming: Return Early Pattern
*/
{
}
console.groupEnd();

// 50 min
console.group('5. Sukurkite funkciją "groupBy", kuri priima masyvą objektų, ir obejkto savybės pavadinimą. Funkcija turi sugrupuoti masyvo elementus, pagal savybės pavadinimo reikšmes');
/*
  hints:
    * JS: Array.prototype.reduce
*/
{
}
console.groupEnd();
