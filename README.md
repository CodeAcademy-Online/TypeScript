# TypeScript - CRUD užduotis 4

## Užduoties tikslas

Tęsiame praeitos pamokos darbą naudodami tą patį projektą. Praeitos pamokos pabaiga, yra šios pamokos pradžia.
Jūsų pamokos tikslas - įgalinti duomenų atnaujinimą - egistuojančios mašinos atnaujinimą

Ši užduotis nėra lengva, todėl atidžiai sekite instrukcijas __Eiga__ skiltyje. Po kiekvieno punkto peržiūrėkite atsakymus ir pasitikrinkite. 

## Eiga
### Redagavimo rėžimo UX
1. Table komponento redgavimo UX
  1. Table klasėje
    1. Sukurkite kiekvienoje eilutėje {edit} mygtuką
    2. Perduokite per props'us funkciją {onEdit}, kuri priimtų {id}
    3. Kvieskite šią funkciją paspaudusmygtuką

  2. App klasėje
    1. Sukurkite funkciją {handleCarEdit} ir perduokite ją {carTable} komponentui
    2. Sukurkite savybę {editedCarId}, kuri saugos šiuo metu redaguojamos mašinos 'id'
    3. Aprašykite {handleCarEdit} logiką jog gavus mašinos id, jis būtų nustatomas į savybe {editedCarId}. Jeigu esama {editedCarId} reikšmė lygi gautai reikšmei, nustatykite ją į null. Toks atvejis reiškia, kad buvo paspaustas tas patss mygtukas ir reikia atšaukti redagavimo rėžimą.
    4. Po funkcionalumo įgalinimo perduokite iškvieskite metodą {renderView}

  3. Table klasėje
    1. Priimkite naują props'ą {editedCarId}
    2. Atvaizduojant eilutes, užsatykite foną tai eilutei, kurios {props.editedCarId} yr lygus iteruojamos eilutės {rowData.id}
    3. {addActionsCell} metode patikrinkite ar  antru parametru gaunamas {id} sutampa su {editedCarId}. Jeigu taip, pakeiskite mygtuko tekstą į 'Cancel' ir padarykite jį kitos spalvos.

  4. App klasėje
    1. kontruktoriuje perduokite lentelėj pradinę savybės reikšmę {editedCarId}
    2. {renderView} metode kiekvieną kartą {carTable} komponentui perduokite esantį {editedCarId}

2. Formos komponento redagavimo UX
  1. CarForm klasėje
    1. Priimkite naują props'ą {isEdited}, kuris pagal šią reikšmę pakeistų:
      * submit mygtuko spalvą į 'warning'
      * uždėtų visai formai 'warning' spalvos sienelę arba šešėlį
    2. Priimkite papildoma props'ą {title} kurį naudojant nustatysite formos pavadinimą
    3. Priimkite papildoma props'ą {submitBtnText} kurį naudojant nustatysite formos mygtuko tekstą
    4. Priimkite papildoma props'ą {values} kurias naudojant nustatysite reikšmes į įvesties laukus
      * užtikrinkite, jog gavus {values} reikšmes jos perduodamos įvesties laukams

  2. App klasėje
    1. kontruktoriuje {carForm} komponentui perduokite  props'ą {isEdited}, pagal tai ar šiuo metu yra redaguojama mašina
    2. sukurkite naują metodą {handleUpdateCar} kuris priimtų tokius pat parametrus kaip {handleCreateCar}
    3. {renderView} metode formai perduokite savybes priklausomai nuo to ar redaguojama mašina
      * title
      * submitBtnText
      * isEdited: true | false
      * onSubmit: {handleUpdateCar} | {handleCreateCar}
      * values: pradinės tuščios reikšmės | redaguojamo automobilio reikšmės

### Atnaujinimo funkcionalumo įgalinimas
  1. CarsCollection klasėje
    1. Sukurkite metodą {update}
      1. pirmu parametru priimkite atnaujininamos mašinos id
      2. antru parametru priimkite atnaujinamos mašinos duomenis su tipu {CarProps}
      3. patikrinkite ar egzistuoja:
        * automobilis
        * automobilio markė
        * automobilio modelis
      4. sukurkite atnaujintą automobilį
      5. pakeiskite seną automobilį naujai sukurtu automobiliu
  2. App klasėje:
    1. metode {handleUpdateCar}
      1. patikrinkite ar šiuo metu yra nustatytas redaguojamos mašinos id {editedCarId}
      2. suformuokite duomenis gautus iš formos
      3. atnaujinkite automobilį naudodami {carsCollection}
      4. {editedCarId} nustatykite į neberedaguojamą
      5. atnaujinkite atvaizdavimą kviesdami {renderView}

## Kodo švarinimas
  1. Sutvarkykite visas klases:
    * funkcijų įvardinimas turėtų vienodą stilistiką
    * kintamųjų pavadinimai pasižymėtų vienoda stilistika
    * funkcijos turi atlikti vieną darbą, jeigu daro kelis, išskaidykite mažesnėmis - vienos paskirties funkcijomis
    * tos pačios pačios metodai eitų ta pačia tvarka
    * susiję metodai būtų šalia viens kito
    * derėtų tos paties paskirties metodų pavadinimai skirtingose klasėse
    * Jeigu funkcija, kviečia kitą funkcija, tai kviečiamoji funkcija turi būti aprašyta žemiau(arba aukščiau, susitarimo reikalas. Svarbu, kad vienodai)

## Papildomas funkcionalumas, kurį galite pabandyti įgyvendinti
  Ši programa nėra baigta ir turi daug problemų. Galite pabandyti išspręsti tokias problemas, kad ji būtų tobulesnė.

  * Pasirinkus markę turi atsinaujinti atitinkamų modelių selektas Formoje
  * Validacija pasubmitinus formą, kur klaidos rašomos po apačia
  * Redaguojamo atumobilio pašalinis keičiant markės filtrą
  * Modelio filtro įgalinimas
  * Sukurkite abstrakčią klasę {Component} kuri įpareigotų visus komponentus turėti tokius pačius metodų ir savybių pavadinimus
    * Įgalinkite bendrą Component klasės apjungimo logiką