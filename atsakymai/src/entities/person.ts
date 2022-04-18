export type PersonProps = {
  id: string,
  name: string,
  surname: string,
};

abstract class Person {
  protected id: string;

  protected name: string;

  protected surname: string;

  constructor({ id, name, surname }: PersonProps) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }

  public abstract toString(): string;

  public getPersonInfo = (): string => `${this.name} ${this.surname}, asm. kodas: ${this.id}:\n`;
}
export default Person;
