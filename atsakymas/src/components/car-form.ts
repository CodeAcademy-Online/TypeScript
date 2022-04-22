import TextField from './text-field';
import SelectField from './select-field';
import brands from '../data/brands';
import models from '../data/models';

export type Values = {
  brand: string,
  model: string,
  price: string,
  year: string,
};

type CarFormProps = {
  values: Values,
  title: string,
  submitBtnText: string,
  onSubmit: (values: Values) => void,
};

type Fields = {
  brand: SelectField,
  model: SelectField,
  price: TextField,
  year: TextField,
};

class CarForm {
  public htmlElement: HTMLFormElement;

  private props: CarFormProps;

  private fields: Fields;

  private htmlFormHeader: HTMLHeadingElement;

  private htmlFieldsContainer: HTMLDivElement;

  private htmlSubmitBtn: HTMLButtonElement;

  public constructor(props: CarFormProps) {
    this.props = props;

    this.htmlElement = document.createElement('form');
    this.htmlFieldsContainer = document.createElement('div');
    this.htmlFormHeader = document.createElement('h2');
    this.htmlSubmitBtn = document.createElement('button');

    this.fields = {
      brand: new SelectField({
        name: 'brand',
        labelText: 'Markė',
        options: brands.map(({ id, title }) => ({ title, value: id })),
      }),
      model: new SelectField({
        name: 'model',
        labelText: 'Modelis',
        options: models.map(({ id, title }) => ({ title, value: id })),
      }),
      price: new TextField({
        name: 'price',
        labelText: 'Kaina',
      }),
      year: new TextField({
        name: 'year',
        labelText: 'Metai',
      }),
    };

    this.initialize();
    this.renderView();
  }

  private initialize = (): void => {
    this.htmlFormHeader.className = 'h3 text-center';

    const fieldsArr = Object.values(this.fields);
    this.htmlFieldsContainer.className = 'd-flex flex-column gap-2';
    this.htmlFieldsContainer.append(...fieldsArr.map((field) => field.htmlElement));

    this.htmlSubmitBtn.className = 'btn btn-primary';

    this.htmlElement.className = 'card d-flex flex-column gap-3 p-3';
    this.htmlElement.append(
      this.htmlFormHeader,
      this.htmlFieldsContainer,
      this.htmlSubmitBtn,
    );
  };

  private handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    const { onSubmit } = this.props;

    const formData = new FormData(this.htmlElement);

    const brand = formData.get('brand') as string | null;
    const model = formData.get('model') as string | null;
    const price = formData.get('price') as string | null;
    const year = formData.get('year') as string | null;

    if (!(brand && price && model && year)) {
      alert('blogi formos duomenys');
      return;
    }

    const formValues: Values = {
      brand,
      model,
      price,
      year,
    };

    onSubmit(formValues);
  };

  private renderView = (): void => {
    const { title, values, submitBtnText } = this.props;

    this.htmlFormHeader.innerHTML = title;

    this.htmlSubmitBtn.innerHTML = submitBtnText;

    const valuesKeyValueArr = Object.entries(values) as [keyof Values, string][];
    valuesKeyValueArr.forEach(([fieldName, fieldValue]) => {
      const field = this.fields[fieldName];
      field.updateProps({
        value: fieldValue,
      });
    });

    this.htmlElement.addEventListener('submit', this.handleSubmit);
  };

  public updateProps = (newProps: Partial<CarFormProps>): void => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };
}

export default CarForm;
