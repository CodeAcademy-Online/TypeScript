# TypeScript - CRUD užduotis 3

## Užduoties tikslas

Tęsiame praeitos pamokos darbą naudodami tą patį projektą. Praeitos pamokos pabaiga, yra šios pamokos pradžia.
Jūsų pamokos tikslas įgalinti duomenų trynimą ir filtravimą.

Ši užduotis nėra lengva, todėl atidžiai sekite instrukcijas __Eiga__ skiltyje. Po kiekvieno punkto peržiūrėkite atsakymus. 

## Komponentų metodai ir savybės
  
### App
#### Savybės
* private carsCollection: CarsCollection;
* private selectedBrandId: null | string;
* private brandSelect: SelectField
* private carTable: Table&lt;StringifyObjectProps&lt;CarJoined&gt;&gt;;
* private htmlElement: HTMLElement;
#### Metodai
* private handleBrandChange = (brandId: string): void
* private handleCarDelete = (carId: string): void 
* private update = (): void 
* public initialize = (): void

### Table
#### Savybės
* private props: TableProps<Type>;
* private tbody: HTMLTableSectionElement;
* private thead: HTMLTableSectionElement;
* public htmlElement: HTMLTableElement;
#### Metodai
* private initialize = (): void 
* private renderView = (): void
* private renderSelectOptions = (): void 

### SelectField
#### Savybės
* private static uniqId = 0;
* private props: SelectFieldProps;
* private htmlSelectElement: HTMLSelectElement;
* private htmlLabelElement: HTMLLabelElement;
* public htmlElement: HTMLDivElement;
#### Metodai
* private checkColumnsCompatability = (): void
* private initialize = (): void
* private renderView = (): void
* private renderHeadView = (): void
* private renderBodyView = (): void
* private addActionsCell = (rowHtmlElement: HTMLTableRowElement, id: string): void
* public updateProps = (newProps: Partial<TableProps<Type>>): void

### CarsCollection
#### Savybės
* props: CarsCollectionProps;
#### Metodai
* private joinCar = ({ modelId, ...car }: Car)
* public get all(): CarJoine
* public getByBrandId = (brandId: string): CarJoined[]
* public deleteCarById = (carId: string): void
## Eiga


## Papildomai
  
Pabandykite susitarti su kolega-studentu, kad peržiūrėtumėte viens kito sprendimus. 
Padiskutuokite, suformuokite klausimus. Išsimiegokite.
