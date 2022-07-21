import ProductsCollection from '../helpers/products-collection';
import Table from './table';
import products from '../data/products';
import categories from '../data/categories';
import productCategories from '../data/products-categories';
import stringifyProps from '../helpers/stingify-object';

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector(selector);

    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.carsCollection = new CarsCollection({ cars, brands, models });
    this.htmlElement = foundElement;
  }
}

export default App;
