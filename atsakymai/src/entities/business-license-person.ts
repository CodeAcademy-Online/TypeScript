import { type PersonProps } from './person.js';
import Employee from './employee.js';
import formatLine from '../helpers/format-line.js';
import Job from './job.js';

export type BuisnessLicencePersonProps = PersonProps & {
  jobs?: Job[],
};

class BuisnessLicencePerson extends Employee {
  private jobs: Job[];

  constructor({ jobs = [], ...personProps }: BuisnessLicencePersonProps) {
    super(personProps);
    this.jobs = jobs;
  }

  public calcPay = (): number => {
    const unpayedFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
    this.jobs.forEach((job) => job.setJobPayed());
    const calculatedPay = unpayedFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);

    return calculatedPay;
  };

  public override toString(): string {
    const { jobs } = this;

    let result = this.getPersonInfo() + formatLine(`jobs:${jobs.length === 0 ? ' nėra darbų' : ''}`, 1);
    if (this.jobs.length > 0) {
      result += jobs.map((job) => `${job.toString()}`).join('\n');
    }

    return result;
  }
}

export default BuisnessLicencePerson;
