# TypeScript - CRUD užduotis 4

## Užduoties tikslas

Tęsiame praeitos pamokos darbą naudodami tą patį projektą. Praeitos pamokos pabaiga, yra šios pamokos pradžia.
Jūsų pamokos tikslas - įgalinti duomenų atnaujinimą - egistuojančios mašinos atnaujinimą

Ši užduotis nėra lengva, todėl atidžiai sekite instrukcijas __Eiga__ skiltyje. Po kiekvieno punkto peržiūrėkite atsakymus ir pasitikrinkite. 

## Eiga
### Redagavimo rėžimo UX
1. __Table__ komponento redgavimo UX
   1. __Table__ klasėje
      1. Sukurkite kiekvienoje eilutėje __edit__ mygtuką
      2. Perduokite per props'us funkciją __onEdit__, kuri priimtų __id__
      3. Kvieskite šią funkciją paspaudus mygtuką
  
   2. __App__ klasėje
      1. Sukurkite funkciją __handleCarEdit__ ir perduokite ją __carTable__ komponentui
      2. Sukurkite savybę __editedCarId__, kuri saugos šiuo metu redaguojamos mašinos 'id'
      3. Aprašykite __handleCarEdit__ logiką jog gavus mašinos id, jis būtų nustatomas į savybe  __editedCarId__. Jeigu esama __editedCarId__ reikšmė lygi gautai reikšmei, nustatykite ją į null. Toks atvejis reiškia, kad buvo paspaustas tas pats mygtukas ir reikia atšaukti redagavimo rėžimą.
      4. Po funkcionalumo įgalinimo perduokite iškvieskite metodą __renderView__

   3. __Table__ klasėje
      1. Priimkite naują props'ą __editedCarId__
      2. Atvaizduojant eilutes, užsatykite foną tai eilutei, kurios __props.editedCarId__ yr lygus  iteruojamos eilutės __rowData.id__
      3. __addActionsCell__ metode patikrinkite ar  antru parametru gaunamas __id__ sutampa su __editedCarId__. Jeigu taip, pakeiskite mygtuko tekstą į 'Cancel' ir padarykite jį kitos spalvos.

   4. __App__ klasėje
      1. kontruktoriuje perduokite lentelei pradinę savybės reikšmę __editedCarId__
      2. __renderView__ metode kiekvieną kartą __carTable__ komponentui perduokite esantį __editedCarId__
<br/>
<br/>

1. Formos komponento redagavimo UX
   1. __CarForm__ klasėje
      1. Priimkite naują props'ą __isEdited__, kuris pagal šią reikšmę pakeistų:
         * submit mygtuko spalvą į 'warning'
         * uždėtų visai formai 'warning' spalvos sienelę arba šešėlį
      2. Priimkite papildoma props'ą __title__ kurį naudojant nustatysite formos pavadinimą
      3. Priimkite papildoma props'ą __submitBtnText__ kurį naudojant nustatysite formos mygtuko tekstą
      4. Priimkite papildoma props'ą __values__ kurias naudojant nustatysite reikšmes į įvesties laukus
         * užtikrinkite, jog gavus __values__ reikšmes jos perduodamos įvesties laukams

   2. __App__ klasėje
       1. kontruktoriuje __carForm__ komponentui perduokite  props'ą __isEdited__, pagal tai ar šiuo metu yra redaguojama mašina
       2. sukurkite naują metodą __handleUpdateCar__ kuris priimtų tokius pat parametrus kaip __handleCreateCar__
       3. __renderView__ metode formai perduokite savybes priklausomai nuo to ar redaguojama mašina
          * title
          * submitBtnText
          * isEdited: true | false
          * onSubmit: __handleUpdateCar__ | __handleCreateCar__
          * values: pradinės tuščios reikšmės | redaguojamo automobilio reikšmės
<br/>
<br/>

### Atnaujinimo funkcionalumo įgalinimas
1. __CarsCollection__ klasėje:
   1. Sukurkite metodą __update__
      1. pirmu parametru priimkite atnaujininamos mašinos id
      2. antru parametru priimkite atnaujinamos mašinos duomenis su tipu __CarProps__
      3. patikrinkite ar egzistuoja:
         * automobilis
         * automobilio markė
         * automobilio modelis
      4. sukurkite atnaujintą automobilį
      5. pakeiskite seną automobilį naujai sukurtu automobiliu
2. __App__ klasėje:
   1. metode __handleUpdateCar__
      1. patikrinkite ar šiuo metu yra nustatytas redaguojamos mašinos id __editedCarId__
      2. suformuokite duomenis gautus iš formos
      3. atnaujinkite automobilį naudodami __carsCollection__
      4. __editedCarId__ nustatykite į neberedaguojamą
      5. atnaujinkite atvaizdavimą kviesdami __renderView__

## Kodo švarinimas
1. Sutvarkykite visas klases:
    * funkcijų įvardinimas turėtų vienodą stilistiką
    * kintamųjų pavadinimai pasižymėtų vienoda stilistika
    * funkcijos turi atlikti vieną darbą, jeigu daro kelis, išskaidykite mažesnėmis - vienos paskirties funkcijomis
    * tos pačios paskirties metodai eitų ta pačia tvarka
    * susiję metodai būtų šalia viens kito
    * derėtų tos paties paskirties metodų pavadinimai skirtingose klasėse
    * jeigu funkcija, kviečia kitą funkcija, tai kviečiamoji funkcija turi būti aprašyta žemiau(arba aukščiau, susitarimo reikalas. Svarbu, kad vienodai)

## Papildomas funkcionalumas, kurį galite pabandyti įgyvendinti
  Ši programa nėra baigta ir turi daug problemų. Galite pabandyti išspręsti tokias problemas, kad ji būtų tobulesnė.

   * Pasirinkus markę turi atsinaujinti atitinkamų modelių selektas Formoje
   * Validacija pasubmitinus formą, kur klaidos rašomos po apačia
   * Redaguojamo automobilio pašalinimas keičiant markės filtrą
   * Modelio filtro įgalinimas
   * Sukurkite abstrakčią klasę __Component__ kuri įpareigotų visus komponentus turėti tokius pačius metodų ir savybių pavadinimus
   * Įgalinkite bendrą __Component__ klasės komponentų apjungimo logiką sukuriant metodą __append__
