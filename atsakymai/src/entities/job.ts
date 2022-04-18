import formatLine from '../helpers/format-line.js';

class Job {
  private static instanceCount = 0;

  private id: string;

  private finished: boolean = false;

  private payed: boolean = false;

  private dateFinished?: Date;

  constructor(
    private title: string,
    private pay: number,
  ) {
    Job.instanceCount += 1;
    this.id = `Job-${Job.instanceCount}`;

    this.finished = false;
    this.payed = false;
  }

  public completeJob = (): void => {
    this.finished = true;
    this.dateFinished = new Date();
  };

  public setJobPayed = (): void => {
    this.payed = true;
  };

  public getPay = (): number => this.pay;

  public isFinished = (): boolean => this.finished;

  public isPayed = (): boolean => this.payed;

  public toString = (): string => {
    const {
      id,
      title,
      finished,
      pay,
      dateFinished,
      payed,
    } = this;

    return formatLine(`id: ${id}`, 2)
      + formatLine(`title: ${title}`, 2)
      + formatLine(`pay: ${pay}`, 2)
      + (finished ? formatLine(`finished: ${finished ? 'Yes' : 'No'}`, 2) : '')
      + (payed ? formatLine(`payed: ${payed ? 'Yes' : 'No'}`, 2) : '')
      + (dateFinished ? formatLine(`date finished: ${dateFinished.toLocaleDateString('lt-LT')}`, 2) : '');
  };
}

export default Job;
