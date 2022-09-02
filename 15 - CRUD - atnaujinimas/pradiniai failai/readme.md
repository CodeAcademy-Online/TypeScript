# TypeScript - CRUD užduotis 3

## Užduoties tikslas

Tęsiame praeitos pamokos darbą naudodami tą patį projektą. Praeitos pamokos pabaiga, yra šios pamokos pradžia.
Jūsų pamokos tikslas įgalinti duomenų kūrimą - naujo produkto sukūrimą.

Ši užduotis nėra lengva, todėl atidžiai sekite instrukcijas __Eiga__ skiltyje. Po kiekvieno punkto peržiūrėkite atsakymus ir pasitikrinkite. 

## Eiga
1. Sukurkite komponentą __TextField__
   1. Sukurkite reikalingus įvesties props'us kurti įvesties laukui:
      * labelText &lt;label&gt;__labelText__&lt;/label&gt;
      * name - &lt;input name=__name__"&gt;
      * initialValue? - &lt;input value="__value__"/&gt; 
   2. Sukurkite logiką kurti unikaliam id, kurį naudosite &lt;label for="__id__"&gt;... atributui naudojant statinį skaitiklį
   3. Įgalinkite galimybę atnaujinti komponentą:
      1. Struktūrizavimo veiksmus atlikite metode __initialize__
      2. Atvaizdavimo veiksmus, kurie naudoja props'us atlikite metode __renderView__
      3. Sukurkite metodą __updateProps__ kuriame atnaujinsite props'us ir po atnaujinimo iškvieskite metodą __renderView__
<br/>
<br/>

2. Sukurkite komponentą __CheckboxGroupField__:
   1. Aprašykite savybes:
      * name: string
      * labelText: string
      * options: Array<{ label: string, value: string }>
      * selected?: Array<{ label: string, value: string }>
   2. Sukurkite analogiškus metodus, kaip ir __TextField__ implementuoti __CheckboxGroupField__ panaudojimą:
      * __constructor__: __props__'ų patikrinimas, savybių priskyrimas ir kiti pradiniai veiksmai
      * __initialize__: pradinių veiksmų aprašymas, kurie NEpriklauso nuo __props__'ų
      * __renderView__: veiksmų priklausančių nuo __props__'ų aprašymas
      * __updateProps__: props'ų atnaujinimo logika, po kurios kviečiamas metodas __renderView__
   3. Sukurkite logiką kurti unikaliam id kiekvienam pasirinkimui, kurį naudosite &lt;label for="__id__"&gt;... atributui
<br/>
<br/>

3. Sukurkite naują konkretų komponentą __ProductForm__
   1. Sukurkite reikalingas klasės savybes/(įvesties laukus) kurti naujam produktui
      * titleField - TextField
      * priceField - TextField
      * categoriesField - CheckboxGroupField
      * descriptionField - TextField
   2. Sukurkite props'us:
      1. title: formos pavadinimas
      2. submitBtnText: tekstas formos submit mygtuke
      3. values?: pradinės reikšmės:
         * title: string
         * price: number
         * categories: string[] (kategorijų id masyvas)
         * description: string
      4. onSubmit: (values: {
         * title: string
         * price: number
         * categories: string[] (kategorijų id masyvas)
         * description: string
         }) => void
   1. Sukurkite konstruktorių, jog būtų galima priimti props'us, juos išsaugoti ir sukurti įvestiesLaukus pagal pagrindines formos savybes.
   2.  Įgalinkite galimybę atnaujinti komponentą
       1. Struktūrizavimo veiksmus atlikite metode __initialize__
       2. Atvaizdavimo veiksmus priklausomus nuo __props__ ir __onSubmit__ funkcijos pridėjimo veiksmus atlikite metode __renderView__
       3. Sukurkite metodą __updateProps__ kuriame atnaujinsite props'us ir po atnaujinimo iškvieskite metodą __renderView__
   3. Įgalinkite __onSubmit__ funkcijos perdavimą:
       1. Sukurkite savybę __handleSubmit__: 
          * (this: HTMLFormElement, ev: SubmitEvent) => void
       2. Uždėkite formai įvykio klausiklį ant 'submit' įvykio, kad būtų vykdoma funkcija __handleSubmit__
       3. Kiekvieną kart atnaujinus formą, pašalinkite prieš tai uždėta __handleSubmit__ funkciją nuo formos __submit__ įvykio klausiklio ir pridėkite naują funkciją, kurios nuorida išsaugosite __handleSubmit__ savybėje
       4. __handleSubmit__ funkcijos viduje kvieskite funkciją __props.onSubmit__ perduodant jai formos reikšmes
<br />
<br />

4. __App__ kompnente pridėkite __ProductForm__ objektą, ir atvaizduokite jį šalia lentelės.
<br />
<br />

5. Įgalinkite naujo produkto sukūrimą
   1.  __ProductsCollection__ duomenų konteinerinėje klasėje:
       1. Sukurkite metodą __add__ pridėti naujam produktui
   2.  __App__ komponente:
       1. Sukurkite funkciją __handleCreateProduct__ ir perduokite ją __ProductForm__ komponentui per props'ą __onSubmit__
       2. __handleCreateProduct__ metode, pridėkite produktą naudojant __ProductsCollection.add__ metodą ir po pridėjimo kvieskite metodą __App.renderView__

## Papildomai

Atlikus užduotis, pabandykite suvienodinti:
  * metodų pavadinimus
  * kintamųjų pavadinimus
  * kontruktorių veikimus
  * duomenų atnaujinimo logiką
  * duomenų perdavimo logiką
  
Pabandykite susitarti su kolega-studentu, kad peržiūrėtumėte viens kito sprendimus. 
Padiskutuokite, suformuokite klausimus. Išsimiegokite.
