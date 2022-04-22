import countObjectProperties from '../helpers/count-object-properties';

type RowData = {
  id: string,
  [key: string]: string,
};

export type TableProps<Type> = {
  title: string,
  columns: Type,
  rowsData: Type[],
  onDelete: (id: string) => void,
};

class Table<Type extends RowData> {
  private props: TableProps<Type>;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

  public htmlElement: HTMLTableElement;

  public constructor(props: TableProps<Type>) {
    this.props = props;

    this.checkColumnsCompatability();

    this.htmlElement = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.initialize();
  }

  private checkColumnsCompatability = (): void => {
    const { rowsData, columns } = this.props;

    if (this.props.rowsData.length === 0) return;
    const columnCount = countObjectProperties(columns);

    const columnsCompatableWithRowsData = rowsData.every((row) => {
      const rowCellsCount = countObjectProperties(row);

      return rowCellsCount === columnCount;
    });

    if (!columnsCompatableWithRowsData) {
      throw new Error('Nesutampa lentelės stulpelių skaičius su eilučių stulpelių skaičiumi');
    }
  };

  private initialize = (): void => {
    this.htmlElement.className = 'table table-striped order border p-3';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );

    this.renderView();
  };

  private renderView = (): void => {
    this.renderHeadView();
    this.renderBodyView();
  };

  private renderHeadView = (): void => {
    const { title, columns } = this.props;

    const headersArray = Object.values(columns);
    const headersRowHtmlString = headersArray.map((header) => `<th>${header}</th>`).join('');

    this.thead.innerHTML = `
      <tr>
        <th colspan="${headersArray.length}" class="text-center h3">${title}</th>
      </tr>
      <tr>${headersRowHtmlString}</tr>`;
  };

  private renderBodyView = (): void => {
    const { rowsData, columns } = this.props;

    this.tbody.innerHTML = '';
    const rowsHtmlElements = rowsData
      .map((rowData) => {
        const rowHtmlElement = document.createElement('tr');

        const cellsHtmlString = Object.keys(columns)
          .map((key) => `<td>${rowData[key]}</td>`)
          .join(' ');

        rowHtmlElement.innerHTML = cellsHtmlString;

        this.addActionsCell(rowHtmlElement, rowData.id);

        return rowHtmlElement;
      });

    this.tbody.append(...rowsHtmlElements);
  };

  private addActionsCell = (tr: HTMLTableRowElement, id: string) => {
    const { onDelete } = this.props;

    const buttonCell = document.createElement('td');

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'btn btn-danger';
    deleteButton.style.width = '80px';
    deleteButton.addEventListener('click', () => onDelete(id));

    buttonCell.append(deleteButton);
    tr.append(buttonCell);
  };

  public updateProps = (newProps: Partial<TableProps<Type>>) => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };
}

export default Table;
