import { type PersonProps } from './person.js';
import Employee from './employee.js';
import formatLine from '../helpers/format-line.js';
import calcMonthWorkDays from '../helpers/calc-month-work-days.js';

export type WorkPersonProps = PersonProps & {
  hourPay: number,
  fullTimeEquivalent: number,
};

class WorkPerson extends Employee {
  private hourPay: number;

  private fullTimeEquivalent: number;

  constructor({ hourPay, fullTimeEquivalent, ...personProps }: WorkPersonProps) {
    super(personProps);
    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
  }

  public calcPay = (): number => calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent * 8;

  public override toString(): string {
    return `${this.getPersonInfo()
      + formatLine(`hour pay: ${this.hourPay}`, 1)
      + formatLine(`full time equivalent: ${this.fullTimeEquivalent}`, 1)}\n`;
  }
}

export default WorkPerson;
