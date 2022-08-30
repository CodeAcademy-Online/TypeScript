type TextFieldProps = {
  labelText: string,
  name: string,
  initialValue?: string,
};

class TextField {
  private static count: number = 0;

  private readonly id: string;

  private labelHtmlElement: HTMLLabelElement;

  private inputHtmlElement: HTMLInputElement;

  public htmlElement: HTMLDivElement;

  constructor(private props: TextFieldProps) {
    TextField.count += 1;
    this.id = `TextField_${TextField.count}`;
    this.htmlElement = document.createElement('div');
    this.labelHtmlElement = document.createElement('label');
    this.inputHtmlElement = document.createElement('input');

    this.initialize();
    this.renderView();
  }

  private initialize = () => {
    this.labelHtmlElement.setAttribute('for', this.id);
    this.labelHtmlElement.className = 'd-block';

    this.inputHtmlElement.id = this.id;
    this.inputHtmlElement.className = 'w-100';

    this.htmlElement.append(
      this.labelHtmlElement,
      this.inputHtmlElement,
    );
  };

  private renderView = () => {
    const { labelText, name, initialValue } = this.props;

    this.labelHtmlElement.innerHTML = labelText;
    this.inputHtmlElement.name = name;
    if (initialValue) {
      this.inputHtmlElement.value = initialValue;
    }
  };

  public updateProps = (newProps: Partial<TextFieldProps>) => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };
}

export default TextField;
