# TypeScript - CRUD užduotis - Duomenų atvaizdavimas lentele

## Užduoties tikslas

Atvaizduoti duomenis HTML lentele, pagal esybių schemą.

### Failų struktūra
* __components/__ - aplankas skirtas komponentams - klasėms, kurios naudojamos atvaizduoti elementams DOM'e

* __data/__ - duomenų failai

* __helpers/__ - pagalibinės funkcijos ir klasės, skirtos kodo švarinimui ir perpanaudojimui

* __types/__ - bendrai naudojami tipai


### Esybių ryšių diagrama (entity relation diagram).
![](./product-category-entity-relation.png)

## Darbo atlikimo eiga 

1. Aplanke __./types__ duoti tipų 'griaučiai'.
   1.  Implementuokite tipus pagal schemą. 
   2.  Papildomai sukurkite tipą  __product-joined.ts__ tipas turi turėti tokias savybes:
       * id: string
       * title: string
       * price: number
       * categories: string
       * description?: number

2. __./helpers/products-collection.ts__ 
   1. Sukurkite konstruktorių, kuris priimtų produktus, kategorijas ir produktų kategorijas. Gautus parametrus išsaugokite kuriamam objekte.
   2. Sukurkite privatų metodą __joinProduct__ kuris apjungtų vieną produktą
      * šiame metode turite surasti visas produktui priklausančias kategorijas ir sujungti tų kategorijų pavadinimus atskyrus kableliu. 
   3. Sukurkite get'erį "all", kurį panaudojus gautumėte visus apjungtus produktus.

3. __./components/app.ts__
   1. Sukurkite savybes:
      1. private htmlElement: HTMLElement;
      2. private productsCollection: ProductsCollection;
   2. Sukurkite konstruktorių, kuris
      1.  priimtų selektorių ir pagal jį rastą elementą priskirtų į __htmlElement__ savybę. 
      2.  sukurtų pradinį __carsCollection__ objektą
   3. Sukurkite metodą __initialize__, kuriame būtų atliekami komponento atvaizdavimo veiksmai

4. __./components/table.ts__ 
   1. Sukurkite tipą TableProps<Type>:
      1. title: string
      2. columns: Type
      3. rowsData: Type[]
   2. Sukurkite savybes:
      1. public htmlElement: HTMLTableElement;
      2. private props: TableProps<Type>;
      3. private tbody: HTMLTableSectionElement;
      4. private thead: HTMLTableSectionElement;
   3. Sukurkite konstruktorių, kuris:
      1. sukurtų pradinius htmlElement, thead ir tbody elementus
      2. iškviestų metodą __initialize__
   4. Sukurtite metodą __initialize__, kuriame:
      1. atliktumete lentelės antraštės atvaizdavimą
      2. atliktumetė lentelės duomenų eilučių atvaizdavimą
      3. apjungtumėte elementus

5. __./components/app.ts__
   1. papildykite __initialize__ metodą, jog būtų įterpiama lentelė

## Rezultato pavyzdys
![](./result.png)

## Papildomai
  * Sukurkite lentelės duomenų patikrinimo funkciją, kuri tikrintų duomenų sutapimą su  antraštės stulpeliais
  * Kodo dalis, kurios gali būti perpanaudotos iškelkite į atskiras funkcijas aplanke __helpers__


## Atsakymai
   * GaliTE peržiūrėti sprendimą aplanke __./atsakymas__