import ProductsCollection, { ProductData } from '../helpers/products-collection';
import Table from './table';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';
import stringifyProps, { StringifiedObject } from '../helpers/stringify-props';
import SelectField from './select-field';
import ProductJoined from '../types/product-joined';
import ProductForm from './product-form';

type ProductRowData = Required<StringifiedObject<ProductJoined>>;

const ALL_CATEGORIES_ID = '-1';
const ALL_CATEGORIES_TITLE = 'Visi produktai';

const allCategoriesOption = {
  title: ALL_CATEGORIES_TITLE,
  value: ALL_CATEGORIES_ID,
};

const formatProductRowData = (productJoined: ProductJoined): ProductRowData => ({
  ...stringifyProps(productJoined),
  description: productJoined.description ?? '',
});

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  private productsTable: Table<ProductRowData>;

  private productForm: ProductForm;

  private selectedCategoryId: string | null;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.productsCollection = new ProductsCollection({ products, categories, productsCategories });
    this.htmlElement = foundElement;
    this.selectedCategoryId = null;
    this.productsTable = new Table({
      title: ALL_CATEGORIES_TITLE,
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
    this.productForm = new ProductForm({
      submitBtnText: 'Sukurti',
      title: 'Produkto sukūrimas',
      values: {
        title: '',
        categories: [],
        description: '',
        price: 0,
      },
      onSubmit: this.handleProductCreate,
    });
  }

  private handleCategoryChange = (categoryId: string): void => {
    this.selectedCategoryId = categoryId === ALL_CATEGORIES_ID ? null : categoryId;

    this.update();
  };

  private handleProductDelete = (productId: string): void => {
    this.productsCollection.deleteById(productId);

    this.update();
  };

  private handleProductCreate = (productData: ProductData): void => {
    this.productsCollection.add(productData);

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
        title: ALL_CATEGORIES_TITLE,
        rowsData: this.productsCollection.all.map(formatProductRowData),
      });
    }
  };

  public initialize = (): void => {
    const categorySelect = new SelectField({
      labelText: 'Kategorija',
      onChange: this.handleCategoryChange,
      options: [
        allCategoriesOption,
        ...categories.map(({ id, title }) => ({ value: id, title })),
      ],
    });

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'd-flex gap-3 mt-3 align-items-start';
    contentWrapper.append(
      this.productsTable.htmlElement,
      this.productForm.htmlElement,
    );

    const container = document.createElement('div');
    container.className = 'container my-4';
    container.append(
      categorySelect.htmlElement,
      contentWrapper,
    );

    this.htmlElement.append(container);
  };
}

export default App;
