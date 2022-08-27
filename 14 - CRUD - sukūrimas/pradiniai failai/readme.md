# TypeScript - CRUD užduotis 3

## Užduoties tikslas

Tęsiame praeitos pamokos darbą naudodami tą patį projektą. Praeitos pamokos pabaiga, yra šios pamokos pradžia.
Jūsų pamokos tikslas įgalinti duomenų kūrimą - naujos mašinos sukūrimą.

Ši užduotis nėra lengva, todėl atidžiai sekite instrukcijas __Eiga__ skiltyje. Po kiekvieno punkto peržiūrėkite atsakymus ir pasitikrinkite. 


## Eiga
1. Sukurkite komponentą __TextField__
   1. Sukurkite reikalingus įvesties props'us kurti įvesties laukui:
      * labelText &lt;label&gt;__labelText__&lt;/label&gt;
      * name - &lt;input name=__name__"&gt;
      * value? - &lt;input value="__value__"/&gt; 
   2. Sukurkite logiką kurti unikaliam id, kurį naudosite &lt;label for="__id__"&gt;... atributui naudojant statinį skaitiklį
   3. Įgalinkite galimybę atnaujinti komponentą:
      1. Struktūrizavimo veiksmus atlikite metode __initialize__
      2. Atvaizdavimo veiksmus, kurie naudoja props'us atlikite meode __renderView__
      3. Sukurkite metodą __updateProps__ kuriame atnaujinsite props'us ir po atnaujinimo iškvieskite metodą __renderView__
<br/>
<br/>

2. Papildykite komponenta __SelectField__
   1. Papildykite/pakeiskite props'us
      * ~ onChange? - EventListener'į uždėkite tik jei egzistuoja onChange prop'sas
      * \+ name? - &lt;select name="__name__"&gt;&lt;/select&gt;
      * \+ value? - uždėkite sutampančiam pagal reikšmę &lt;option&gt;...&lt;/option&gt; elementui atributą "selected" 
   2. Sukurkite logiką kurti unikaliam id, kurį naudosite &lt;label for="__id__"&gt;... atributui naudojant statinį skaitiklį
   3. Įgalinkite galimybę atnaujinti komponentą
      1. Struktūrizavimo veiksmus atlikite metode __initialize__
      2. Atvaizdavimo veiksmus, kurie naudoja props'us atlikite meode __renderView__
      3. Sukurkite metodą __updateProps__ kuriame atnaujinsite props'us ir po atnaujinimo
    iškvieskite metodą __renderView__
<br/>
<br/>

3. Sukurkite naują komponentą __CarForm__
   1. Sukurkite reikalingus klasės savybes kurti naujai mašinai
      * Markė - SelectField
      * Modelis - SelectField
      * Kainai - TextField
      * Metai - TextField
   2. Sukurkite props'us:
      1. title - formos pavadinimas
      2. values - pradinės reikšmės:
         * brand: string,
         * model: string,
         * price: string,
         * year: string,
      3. submitBtnText - tekstas formos submit mygtuke
   3. Sukurkite konstruktorių, jog būtų galima priimti props'us, ir juos išsaugoti ir sukurti pagrindines formos savybes.
   4.  Įgalinkite galimybę atnaujinti komponentą
       1. Struktūrizavimo veiksmus atlikite metode __initialize__
       2. Atvaizdavimo veiksmus, kurie naudoja props'us atlikite meode __renderView__
       3. Sukurkite metodą __updateProps__ kuriame atnaujinsite props'us ir po atnaujinimo
    iškvieskite metodą __renderView__
<br />
<br />

4. __App__ kompnente pridėkite __CarForm__ objektą, ir atvaizduokite jį šalia lentelės.
<br />
<br />

5. Įgalinkite naujos mašinos sukūrimą
   1.  __CarForm__ komponente įgalinkite 'dependency injection' principą
       1. Uždėkite formai įvykio klausiklį ant 'submit' įvykio
       2. Priimkite naują prop'są __onSubmit__, ir kvieskite šią funkciją pas'submit'inus formą
       3. Pakeiskite __onSubmit__ tipą, jog jis priimtų formos reikšmes objektu, ir kviečiant __onSubmit__ funkciją perduokite iš formos nuskaitytas reikšmes
   2.  __CarsCollection__ duomenų konteinerinėje klasėje:
       1. Sukurkite metodą __add__ pridėti naujai mašinai
   3.  __App__ komponente:
       1. Sukurkite funkciją __handleCreateCar__ ir perduokite ją __CarForm__ komponentui per props'us
       2. __handleCreateCar__ metode, pridėkite mašiną naudojant __CarsCollection.add__ metodą ir po pridėjimo kvieskite metodą __App.renderView__

## Papildomai

Atlikus užduotis, pabandykite suvienodinti:
  * metodų pavadinimus
  * kintamųjų pavadinimus
  * kontruktorių veikimus
  * duomenų atnaujinimo logiką
  * duomenų perdavimo logiką
  
Pabandykite susitarti su kolega-studentu, kad peržiūrėtumėte viens kito sprendimus. 
Padiskutuokite, suformuokite klausimus. Išsimiegokite.
