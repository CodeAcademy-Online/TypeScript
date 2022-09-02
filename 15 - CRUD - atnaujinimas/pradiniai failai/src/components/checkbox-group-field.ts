type CheckboxOption = {
  label: string,
  value: string,
};

type CheckboxGroupFieldProps = {
  name: string,
  labelText: string,
  options: CheckboxOption[],
  selected?: string[],
};

class CheckboxGroupField {
  private static count: number = 0;

  private static createOptionLabel = ({
    htmlFor,
    innerHTML,
  }: { htmlFor: string, innerHTML: string }) => {
    const labelHtmlElement = document.createElement('label');
    labelHtmlElement.className = 'form-check-label';
    labelHtmlElement.innerHTML = innerHTML;
    labelHtmlElement.setAttribute('for', htmlFor);

    return labelHtmlElement;
  };

  private static createCheckbox = ({
    name,
    id,
    value,
    checked,
  }: { name: string, id: string, value: string, checked: boolean }) => {
    const checkboxHtmlElement = document.createElement('input');
    checkboxHtmlElement.type = 'checkbox';
    checkboxHtmlElement.id = id;
    checkboxHtmlElement.name = name;
    checkboxHtmlElement.value = value;
    checkboxHtmlElement.className = 'form-check-input';
    checkboxHtmlElement.checked = checked;

    return checkboxHtmlElement;
  };

  private readonly id: string;

  private labelHtmlElement: HTMLLabelElement;

  private optionsContainerHtmlElement: HTMLDivElement;

  public htmlElement: HTMLDivElement;

  constructor(private props: CheckboxGroupFieldProps) {
    CheckboxGroupField.count += 1;
    this.id = `CheckboxGroupField_${CheckboxGroupField.count}`;
    this.htmlElement = document.createElement('div');
    this.labelHtmlElement = document.createElement('label');
    this.optionsContainerHtmlElement = document.createElement('div');

    this.initialize();
    this.renderView();
  }

  private initialize = () => {
    this.htmlElement.append(
      this.labelHtmlElement,
      this.optionsContainerHtmlElement,
    );
  };

  private renderOptionsView = () => {
    const { name, options, selected } = this.props;

    this.optionsContainerHtmlElement.innerHTML = '';
    options.forEach((option) => {
      const optionId = `${this.id}_${option.value}`;

      const checkboxFieldHtmlElement = document.createElement('div');
      checkboxFieldHtmlElement.className = 'form-check';

      const checkboxHtmlElement = CheckboxGroupField.createCheckbox({
        name,
        id: optionId,
        value: option.value,
        checked: Boolean(selected && selected.includes(option.value)),
      });

      const labelHtmlElement = CheckboxGroupField.createOptionLabel({
        htmlFor: optionId,
        innerHTML: option.label,
      });

      checkboxFieldHtmlElement.append(
        checkboxHtmlElement,
        labelHtmlElement,
      );

      this.optionsContainerHtmlElement.appendChild(checkboxFieldHtmlElement);
    });
  };

  private renderView = () => {
    this.labelHtmlElement.innerHTML = this.props.labelText;

    this.renderOptionsView();
  };

  public updateProps = (newProps: Partial<CheckboxGroupFieldProps>) => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };
}

export default CheckboxGroupField;
