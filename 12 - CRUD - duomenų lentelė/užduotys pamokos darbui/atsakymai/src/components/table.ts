type Row = {
  [key: string]: string;
};

// Type extends Row -> Bendrinis tipas Type [turi būti] Row
class Table<Type extends Row> {
  public htmlElement: HTMLTableElement;

  private data: Type[];

  public constructor(data: Type[]) {
    this.htmlElement = document.createElement('table');
    this.data = data;

    this.initialize();
  }

  private createHeaders = () => {
    const keys = Object.keys(this.data[0]);
    const headerElementsString = keys
      .map((key) => `<th scope="col">${key[0].toUpperCase() + key.slice(1)}</th>`)
      .join('');

    return headerElementsString;
  };

  private createBodyRows = () => {
    const keys = Object.keys(this.data[0]) as (keyof Type)[];

    const rowsString = this.data
      .map((rowData) => {
        const rowString = keys
          .map((key) => {
            const cell = `<td>${rowData[key] ?? '---'}</td>`;

            return cell;
          })
          .join('');

        return `<tr>${rowString}</tr>`;
      })
      .join('');
    return rowsString;
  };

  initialize = () => {
    this.htmlElement.className = 'table table-striped border';
    this.htmlElement.innerHTML = `
    <thead>
      <tr>
        ${this.createHeaders()}
      </tr>
    </thead>
    <tbody>
      ${this.createBodyRows()}
    </tbody> `;
  };
}

export default Table;
