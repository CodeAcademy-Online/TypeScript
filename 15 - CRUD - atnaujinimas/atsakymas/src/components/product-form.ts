import categories from '../data/categories';
import CheckboxGroupField from './checkbox-group-field';
import TextField from './text-field';
import { ProductData } from '../helpers/products-collection';

type ProductFormValues = ProductData;

export type ProductFormProps = {
  title: string,
  submitBtnText: string,
  isEdited: boolean,
  onSubmit: (values: ProductFormValues) => void,
  values?: ProductFormValues,
};

class ProductForm {
  private props: ProductFormProps;

  private handleSubmit?: (this: HTMLFormElement, ev: SubmitEvent) => void;

  private titleField: TextField;

  private priceField: TextField;

  private categoriesField: CheckboxGroupField;

  private descriptionField: TextField;

  private headerHtmlElement: HTMLHeadingElement;

  private btnHtmlElement: HTMLButtonElement;

  public htmlElement: HTMLFormElement;

  constructor(props: ProductFormProps) {
    this.props = props;

    this.titleField = new TextField({
      labelText: 'Pavadinimas',
      name: 'title',
    });

    this.priceField = new TextField({
      labelText: 'Kaina',
      name: 'price',
    });

    this.categoriesField = new CheckboxGroupField({
      labelText: 'Kategorijos',
      name: 'categories',
      options: categories.map(({ id, title }) => ({ label: title, value: id })),
    });

    this.descriptionField = new TextField({
      labelText: 'Aprašymas',
      name: 'description',
    });

    this.headerHtmlElement = document.createElement('h2');
    this.btnHtmlElement = document.createElement('button');
    this.htmlElement = document.createElement('form');

    this.initialize();
    this.renderView();
  }

  private initialize = () => {
    this.htmlElement.style.width = '450px';

    this.htmlElement.append(
      this.headerHtmlElement,
      this.titleField.htmlElement,
      this.priceField.htmlElement,
      this.categoriesField.htmlElement,
      this.descriptionField.htmlElement,
      this.btnHtmlElement,
    );
  };

  private clearValues = () => {
    this.titleField.updateProps({ initialValue: '' });
    this.priceField.updateProps({ initialValue: '' });
    this.categoriesField.updateProps({ selected: [] });
    this.descriptionField.updateProps({ initialValue: '' });
  };

  private updateOnSubmitCallback = () => {
    const { onSubmit } = this.props;
    const { clearValues } = this;

    if (this.handleSubmit) {
      this.htmlElement.removeEventListener('submit', this.handleSubmit);
    }

    this.handleSubmit = function handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const formValues: ProductFormValues = {
        title: String(formData.get('title')),
        price: Number(formData.get('price')),
        categories: formData.getAll('categories').map(String),
        description: String(formData.get('description')),
      };

      onSubmit(formValues);
      clearValues();
    };

    this.htmlElement.addEventListener('submit', this.handleSubmit);
  };

  private renderFieldsView = () => {
    const { values } = this.props;

    if (values) {
      const {
        title,
        price,
        categories: selectedCategories,
        description,
      } = values;
      this.titleField.updateProps({ initialValue: title });
      this.priceField.updateProps({ initialValue: String(price) });
      this.categoriesField.updateProps({ selected: selectedCategories });
      if (description !== undefined) {
        this.descriptionField.updateProps({ initialValue: description });
      }
    }
  };

  private renderView = () => {
    const { title: headerText, submitBtnText, isEdited } = this.props;
    const color = isEdited ? 'warning' : 'success';

    this.updateOnSubmitCallback();
    this.renderFieldsView();

    this.htmlElement.className = `d-flex flex-column p-3 border gap-3 border border-${color}`;

    this.headerHtmlElement.innerHTML = headerText;

    this.btnHtmlElement.className = `btn btn-${color}`;
    this.btnHtmlElement.innerHTML = submitBtnText;
  };

  public updateProps = (newProps: Partial<ProductFormProps>) => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };
}

export default ProductForm;
