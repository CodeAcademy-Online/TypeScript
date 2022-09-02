import getPropCount from '../helpers/get-prop-count';

type RowData = {
  id: string,
  [key: string]: string,
};

export type TableProps<Type extends RowData> = {
  title: string,
  columns: Type,
  rowsData: Type[],
  editedProductId: string | null,
  onEdit: (id: string) => void,
  onDelete: (id: string) => void,
};

class Table<Type extends RowData> {
  public htmlElement: HTMLTableElement;

  private props: TableProps<Type>;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

  private static checkColumnsCompatability = <T extends RowData>({
    rowsData,
    columns,
  }: TableProps<T>): void => {
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
    this.renderView();
  }

  private initialize = (): void => {
    this.htmlElement.className = 'table table-striped order border mb-0';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  };

  private renderHeadView = (): void => {
    const { columns, title } = this.props;

    const headersArray = Object.values(columns);
    const headersRowHtmlString = [
      ...headersArray.map((header) => `<th>${header}</th>`),
      '<th></th>',
    ].join('');

    this.thead.innerHTML = `
      <tr>
        <th colspan="${headersArray.length + 1}" class="text-center h3">${title}</th>
      </tr>
      <tr>${headersRowHtmlString}</tr>
    `;
  };

  private renderBodyView = (): void => {
    const {
      rowsData, columns, editedProductId,
      onEdit, onDelete,
    } = this.props;

    this.tbody.innerHTML = '';
    const rowsHtmlElements = rowsData
      .map((rowData) => {
        const rowHtmlElement = document.createElement('tr');
        if (rowData.id === editedProductId) {
          rowHtmlElement.style.backgroundColor = '#faf2ac';
        }

        const cellsHtmlString = [
          ...Object.keys(columns).map((key) => `<td>${rowData[key]}</td>`),
          `<td>
            <button class="btn btn-danger btn-sm">✕</button>
            <button class="btn btn-warning btn-sm">⟳</button>
          </td>`,
        ].join(' ');

        rowHtmlElement.innerHTML = cellsHtmlString;

        const deleteBtn = rowHtmlElement.querySelector('.btn-danger') as HTMLButtonElement;
        deleteBtn.addEventListener('click', () => onDelete(rowData.id));

        const editBtn = rowHtmlElement.querySelector('.btn-warning') as HTMLButtonElement;
        editBtn.addEventListener('click', () => onEdit(rowData.id));

        return rowHtmlElement;
      });

    this.tbody.append(...rowsHtmlElements);
  };

  private renderView = (): void => {
    this.renderHeadView();
    this.renderBodyView();
  };

  public updateProps = (newProps: Partial<TableProps<Type>>): void => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };
}

export default Table;
