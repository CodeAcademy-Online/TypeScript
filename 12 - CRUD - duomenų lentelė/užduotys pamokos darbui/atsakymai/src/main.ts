import ProductsCollection from './helpers/products-collection';
import products from './data/products';
import categories from './data/categories';
import productsCategories from './data/products-categories';
import stringifyProperties from './helpers/stringify-properties';
import Table from './components/table';

const productsCollection = new ProductsCollection(products, categories, productsCategories);

const stringifiedData = productsCollection.all.map(stringifyProperties);

const productsTable = new Table(stringifiedData);

const root = document.querySelector('#root') as HTMLElement;
const container = document.createElement('div');
container.className = 'container my-5';

container.append(productsTable.htmlElement);
root.append(container);
