import ProductsCollection from '../helpers/products-collection';
import Table from './table';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';
import stringifyProps, { StringifiedObject } from '../helpers/stringify-props';
import SelectField from './select-field';
import ProductJoined from '../types/product-joined';

type ProductRowData = Required<StringifiedObject<ProductJoined>>;

const formatProductRowData = (productJoined: ProductJoined): ProductRowData => ({
  ...stringifyProps(productJoined),
  description: productJoined.description ?? '',
});

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  private productsTable: Table<ProductRowData>;

  private selectedCategoryId: string | null;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.productsCollection = new ProductsCollection({ products, categories, productsCategories });
    this.htmlElement = foundElement;
    this.selectedCategoryId = null;
    this.productsTable = new Table({
      title: 'Visi produktai',
      columns: {
        id: 'Id',
        title: 'Pavadinimas',
        price: 'Kaina',
        description: 'Aprašymas',
        categories: 'Kategorijos',
      },
      rowsData: this.productsCollection.all.map(formatProductRowData),
      onDelete: this.handleProductDelete,
    });
  }

  private handleCategoryChange = (categoryId: string): void => {
    this.selectedCategoryId = categoryId;
    this.update();
  };

  private handleProductDelete = (productId: string): void => {
    this.productsCollection.deleteProductById(productId);
    this.update();
  };

  private update = (): void => {
    if (this.selectedCategoryId) {
      const foundCategory = categories.find((category) => category.id === this.selectedCategoryId);
      if (foundCategory) {
        this.productsTable.updateProps({
          title: foundCategory.title,
          rowsData: this.productsCollection.getByCategoryId(this.selectedCategoryId)
            .map(formatProductRowData),
        });
      }
    } else {
      this.productsTable.updateProps({
        title: 'Visi produktai',
        rowsData: this.productsCollection.all.map(formatProductRowData),
      });
    }
  };

  public initialize = (): void => {
    const categorySelect = new SelectField({
      labelText: 'Kategorija',
      onChange: this.handleCategoryChange,
      options: categories.map(({ id, title }) => ({ value: id, title })),
    });

    const container = document.createElement('div');
    container.className = 'container my-5';
    container.append(
      categorySelect.htmlElement,
      this.productsTable.htmlElement,
    );

    this.htmlElement.append(container);
  };
}

export default App;
