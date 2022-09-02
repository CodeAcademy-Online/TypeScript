import ProductsCollection, { ProductData } from '../helpers/products-collection';
import Table, { TableProps } from './table';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';
import stringifyProps, { StringifiedObject } from '../helpers/stringify-props';
import SelectField from './select-field';
import ProductJoined from '../types/product-joined';
import ProductForm, { ProductFormProps } from './product-form';

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

  private editedProductId: string | null;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.productsCollection = new ProductsCollection({ products, categories, productsCategories });
    this.htmlElement = foundElement;
    this.selectedCategoryId = null;
    this.editedProductId = null;

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
      editedProductId: this.editedProductId,
      onDelete: this.handleProductDelete,
      onEdit: this.handleProductEdit,
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
      isEdited: Boolean(this.editedProductId)
    });
  }

  private handleCategoryChange = (categoryId: string): void => {
    this.selectedCategoryId = categoryId === ALL_CATEGORIES_ID ? null : categoryId;

    this.update();
  };

  private handleProductCreate = (productData: ProductData): void => {
    this.productsCollection.add(productData);

    this.update();
  };

  private handleProductEdit = (productId: string): void => {
    this.editedProductId = productId === this.editedProductId ? null : productId
    this.update();
  };

  private handleProductUpdate = (productData: ProductData): void => {
    if (this.editedProductId) {
      this.productsCollection.update(this.editedProductId, productData);
      this.editedProductId = null;

      this.update();
    }
  };

  private handleProductDelete = (productId: string): void => {
    this.productsCollection.deleteById(productId);

    this.update();
  };

  private updateProductsTable = () => {
    const foundCategory = categories.find((category) => category.id === this.selectedCategoryId);

    const productsTableProps: Partial<TableProps<ProductRowData>> = {
      editedProductId: this.editedProductId,
      ...(this.selectedCategoryId && foundCategory
        ? {
          title: foundCategory.title,
          rowsData: this.productsCollection
            .getByCategoryId(this.selectedCategoryId)
            .map(formatProductRowData),
        } : {
          title: ALL_CATEGORIES_TITLE,
          rowsData: this.productsCollection
            .all
            .map(formatProductRowData),
        })
    };

    this.productsTable.updateProps(productsTableProps)
  }

  private updateProductsForm = () => {
    const isEdited = Boolean(this.editedProductId);
    let productFormProps: Partial<ProductFormProps>;

    if (this.editedProductId) {
      const foundProductData = this.productsCollection.getProductData(this.editedProductId);
      if (foundProductData) {
        if (foundProductData.description === undefined) foundProductData.description = '';

        productFormProps = {
          submitBtnText: 'Atnaujinti',
          title: 'Produkto atnaujinimas',
          values: foundProductData,
          onSubmit: this.handleProductUpdate,
        }
      } else {
        this.editedProductId = null;
        this.update();
        return;
      }
    } else {
      productFormProps = {
        submitBtnText: 'Sukurti',
        title: 'Produkto sukūrimas',
        values: {
          title: '',
          categories: [],
          description: '',
          price: 0,
        },
        onSubmit: this.handleProductCreate,
      }
    };

    this.productForm.updateProps({
      isEdited,
      ...productFormProps
    });
  }

  private update = (): void => {
    this.updateProductsTable();
    this.updateProductsForm();
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
