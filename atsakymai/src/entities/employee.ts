import Person from './person.js';

abstract class Employee extends Person {
  public abstract calcPay(): number;
}

export default Employee;
