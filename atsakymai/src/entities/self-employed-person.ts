import { type PersonProps } from './person.js';
import Employee from './employee.js';
import formatLine from '../helpers/format-line.js';

export type SelfEmployedPersonProps = PersonProps & {
  hourPay: number,
  hoursWorked?: number,
};

class SelfEmployedPerson extends Employee {
  private hourPay: number;

  private hoursWorked: number;

  constructor({
    hourPay,
    hoursWorked = 0,
    ...personProps
  }: SelfEmployedPersonProps) {
    super(personProps);
    this.hourPay = hourPay;
    this.hoursWorked = hoursWorked;
  }

  public calcPay = (): number => this.hourPay * this.hoursWorked;

  public override toString(): string {
    return `${this.getPersonInfo()
      + formatLine(`hour pay: ${this.hourPay}`, 1)
      + formatLine(`hours worked: ${this.hoursWorked}`, 1)}\n`;
  }
}

export default SelfEmployedPerson;
