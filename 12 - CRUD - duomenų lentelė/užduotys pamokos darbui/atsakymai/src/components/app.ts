import ProductsCollection from '../helpers/products-collection';
import Table from './table';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';
import stringifyProps from '../helpers/stringify-props';

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.productsCollection = new ProductsCollection({ products, categories, productsCategories });
    this.htmlElement = foundElement;
  }

  initialize = (): void => {
    const productTable = new Table({
      title: 'Visi produktai',
      columns: {
        id: 'Id',
        title: 'Pavadinimas',
        price: 'Kaina',
        description: 'Aprašymas',
        categories: 'Kategorijos'
      },
      rowsData: this.productsCollection.all
        .map(x => ({ ...x, description: x.description ?? '' }))
        .map(stringifyProps),
    });;

    const container = document.createElement('div');
    container.className = 'container my-5';
    container.appendChild(productTable.htmlElement);

    this.htmlElement.append(container);
  };
}

export default App;
