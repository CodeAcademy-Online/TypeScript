import Employee from './employee.js';
import formatLine from '../helpers/format-line.js';
class SelfEmployedPerson extends Employee {
    constructor({ hourPay, hoursWorked = 0, ...personProps }) {
        super(personProps);
        this.calcPay = () => this.hourPay * this.hoursWorked;
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }
    toString() {
        return `${this.getPersonInfo()
            + formatLine(`hour pay: ${this.hourPay}`, 1)
            + formatLine(`hours worked: ${this.hoursWorked}`, 1)}\n`;
    }
}
export default SelfEmployedPerson;
//# sourceMappingURL=self-employed-person.js.map