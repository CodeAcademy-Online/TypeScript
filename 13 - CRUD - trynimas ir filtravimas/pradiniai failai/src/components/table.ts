import getPropCount from '../helpers/get-prop-count';

type RowData = {
  id: string,
  [key: string]: string,
};

export type TableProps<Type extends RowData> = {
  title: string,
  columns: Type,
  rowsData: Type[],
};

class Table<Type extends RowData> {
  public htmlElement: HTMLTableElement;

  private props: TableProps<Type>;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

  private static checkColumnsCompatability = <T extends RowData>({ rowsData, columns }: TableProps<T>): void => {
    if (rowsData.length === 0) return;
    const columnCount = getPropCount(columns);

    const columnsCompatableWithRowsData = rowsData.every(
      (row) => getPropCount(row) === columnCount,
    );

    if (!columnsCompatableWithRowsData) {
      throw new Error('Nesutampa lentelės stulpelių skaičius su eilučių stulpelių skaičiumi');
    }
  };

  public constructor(props: TableProps<Type>) {
    Table.checkColumnsCompatability(props);
    this.props = props;

    this.htmlElement = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.initialize();
  }

  private initializeHead = (): void => {
    const { title, columns } = this.props;

    const headersArray = Object.values(columns);
    const headersRowHtmlString = headersArray.map((header) => `<th>${header}</th>`).join('');

    this.thead.innerHTML = `
      <tr>
        <th colspan="${headersArray.length}" class="text-center h3">${title}</th>
      </tr>
      <tr>${headersRowHtmlString}</tr>
    `;
  };

  private initializeBody = (): void => {
    const { rowsData, columns } = this.props;

    this.tbody.innerHTML = '';
    const rowsHtmlElements = rowsData
      .map((rowData) => {
        const rowHtmlElement = document.createElement('tr');

        const cellsHtmlString = Object.keys(columns)
          .map((key) => `<td>${rowData[key]}</td>`)
          .join(' ');

        rowHtmlElement.innerHTML = cellsHtmlString;

        return rowHtmlElement;
      });

    this.tbody.append(...rowsHtmlElements);
  };

  private initialize = (): void => {
    this.initializeHead();
    this.initializeBody();

    this.htmlElement.className = 'table table-striped order border p-3';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  };
}

export default Table;
