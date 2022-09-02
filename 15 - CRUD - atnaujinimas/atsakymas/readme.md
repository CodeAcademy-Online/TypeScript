# TypeScript - CRUD užduotis 4

## Užduoties tikslas

Tęsiame praeitos pamokos darbą naudodami tą patį projektą. Praeitos pamokos pabaiga, yra šios pamokos pradžia.
Jūsų pamokos tikslas - įgalinti duomenų atnaujinimą - egistuojančio produkto atnaujinimą

Ši užduotis nėra lengva, todėl atidžiai sekite instrukcijas __Eiga__ skiltyje. Po kiekvieno punkto peržiūrėkite atsakymus ir pasitikrinkite. 

## Eiga
### Redagavimo rėžimo UX
1. __Table__ komponento redgavimo UX
   1. __Table__ klasėje
      1. Sukurkite kiekvienoje eilutėje __edit__ mygtuką
      2. Perduokite per props'us funkciją __onEdit__, kuri priimtų __id__
      3. Kvieskite šią funkciją paspaudus mygtuką
  
   2. __App__ klasėje
      1. Sukurkite funkciją __handleProductEdit__ ir perduokite ją __productTable__ komponentui
      2. Sukurkite savybę __editedProductId__, kuri saugos šiuo metu redaguojamo produkto 'id'
      3. Aprašykite __handleProductEdit__ logiką jog gavus produkto id, jis būtų nustatomas į savybe  __editedProductId__. Jeigu esama __editedProductId__ reikšmė lygi gautai reikšmei, nustatykite ją į null. Toks atvejis reiškia, kad buvo paspaustas tas pats mygtukas ir reikia atšaukti redagavimo rėžimą.
      4. Po funkcionalumo įgalinimo perduokite iškvieskite metodą __renderView__

   3. __Table__ klasėje
      1. Priimkite naują props'ą __editedProductId__
      2. Atvaizduojant eilutes, užsatykite foną tai eilutei, kurios __props.editedProductId__ yr lygus  iteruojamos eilutės __rowData.id__
      3. __addActionsCell__ metode patikrinkite ar antru parametru gaunamas __id__ sutampa su __editedProductId__. Jeigu taip, pakeiskite mygtuko tekstą į 'Cancel' ir padarykite jį kitos spalvos.

   4. __App__ klasėje
      1. kontruktoriuje perduokite lentelei pradinę savybės reikšmę __editedProductId__
      2. __renderView__ metode kiekvieną kartą __productTable__ komponentui perduokite esantį __editedProductId__
<br/>
<br/>

1. Formos komponento redagavimo UX
   1. __ProductForm__ klasėje
      1. Priimkite naują props'ą __isEdited__, kuris pagal šią reikšmę pakeistų:
         * submit mygtuko spalvą į 'warning'
         * uždėtų visai formai 'warning' spalvos sienelę arba šešėlį

   2. __App__ klasėje
       1. kontruktoriuje __productForm__ komponentui perduokite  props'ą __isEdited__, pagal tai ar šiuo metu yra redaguojamas produktas
       2. sukurkite naują metodą __handleProductUpdate__ kuris priimtų tokius pat parametrus kaip __handleProductCreate__
       3. __renderView__ metode formai perduokite savybes priklausomai nuo to ar redaguojama produktas
          * title
          * submitBtnText
          * isEdited: true | false
          * onSubmit: __handleProductUpdate__ | __handleProductCreate__
          * values: pradinės tuščios reikšmės | redaguojamo produkto reikšmės
<br/>
<br/>

### Atnaujinimo funkcionalumo įgalinimas
1. __ProductsCollection__ klasėje:
   1. Sukurkite metodą __update__
      1. pirmu parametru priimkite atnaujininamos produkto id
      2. antru parametru priimkite atnaujinamos produkto duomenis su tipu __ProductProps__
      3. patikrinkite ar egzistuoja:
         * produktas
         * kategorija
         * produkto kategorija
      4. sukurkite atnaujintą produktą
      5. pakeiskite seną produktą naujai sukurtu produktu
2. __App__ klasėje:
   1. metode __handleProductUpdate__
      1. patikrinkite ar šiuo metu yra nustatytas redaguojamos produkto id __editedProductId__
      2. suformuokite duomenis gautus iš formos
      3. atnaujinkite produktą naudodami __productsCollection__
      4. __editedProductId__ nustatykite į neberedaguojamą - null
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

   * Validacija pas'ubmitinus formą, klaidų rodymas
   * Redaguojamo produkto pašalinimas keičiant markės filtrą
   * Sukurkite abstrakčią klasę __Component__ kuri įpareigotų visus komponentus turėti tokius pačius metodų ir savybių pavadinimus
   * Įgalinkite bendrą __Component__ klasės komponentų apjungimo logiką sukuriant metodą __append__