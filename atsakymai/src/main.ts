// ↓↓↓ Tipai ↓↓↓
type ListNode<T> = {
  data: T,
  next: ListNode<T> | null
};

type ForEachCallback<T> = (value: T) => void;
// ↑↑↑ Tipai ↑↑↑

// ↓↓↓ Klasės ↓↓↓
// 1.
class List<Type> {
  // 2.
  private head: ListNode<Type> | null;

  private tail: ListNode<Type> | null;

  // 2.
  constructor(initialNode?: ListNode<Type>) {
    if (initialNode !== undefined) {
      this.head = initialNode;
      this.tail = initialNode;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  private addFirstElement = (node: ListNode<Type>) => {
    this.head = node;
    this.tail = node;
  }

  // 3.
  public addNodeStart = (node: ListNode<Type>): void => {
    if (this.head === null) {
      this.addFirstElement(node);
    } else {
      node.next = this.head;
      this.head = node;
    }
  };

  // 4.
  public addNodeEnd = (node: ListNode<Type>): void => {
    if (this.tail === null) {
      this.addFirstElement(node);
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  // 5.
  public forEach = (callback: ForEachCallback<Type>): void => {
    if (this.head === null) return;

    let currentNode: ListNode<Type> = this.head;

    while (true) {
      callback(currentNode.data);
      if (currentNode.next === null) break;
      currentNode = currentNode.next;
    }
  };
}
// ↑↑↑ Klasės ↑↑↑

// ↓↓↓ Kintamuosius skirtus pavyzdžiams saugokite čia ↓↓↓
// 1.
const stringNode1: ListNode<string> = { data: 'labas', next: null };
const stringNode2: ListNode<string> = { data: 'vakaras', next: stringNode1 };

// 2. | 3. | 5.
const stringList: List<string> = new List();

const numberNode: ListNode<number> = { data: 5, next: null };
const numberList: List<number> = new List(numberNode);

// 3.
const stringNodeToAdd1: ListNode<string> = { data: 'Serbentautas', next: null };
const stringNodeToAdd2: ListNode<string> = { data: 'Vardas', next: null };
const stringNodeToAdd3: ListNode<string> = { data: 'Mano', next: null };

// 4.
const numberNodeToAdd1: ListNode<number> = { data: 1, next: null };
const numberNodeToAdd2: ListNode<number> = { data: 2, next: null };
const numberNodeToAdd3: ListNode<number> = { data: 3, next: null };

// ↑↑↑ Kintamuosius skirtus pavyzdžiam saugokite čia ↑↑↑

console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
  console.log({
    listNode1: stringNode1,
    listNode2: stringNode2,
  });
}
console.groupEnd();

console.group('2. Sukurkite sąrašo klasę List');
{
  console.log('Tučias string sąrašas');
  console.log(stringList);

  console.log('number sąrašas');
  console.log(numberList);
}
console.groupEnd();

console.group('3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.');
{
  console.log('String sąrašas');
  console.log(stringList);

  console.log('Pridedamas Mazgas 1', stringNodeToAdd1);
  stringList.addNodeStart(stringNodeToAdd1);
  console.log('Sąrašas po pridėjimo', { ...stringList });

  console.log('Pridedamas Mazgas 2', stringNodeToAdd2);
  stringList.addNodeStart(stringNodeToAdd2);
  console.log('Sąrašas po pridėjimo', { ...stringList });

  console.log('Pridedamas Mazgas 3', stringNodeToAdd3);
  stringList.addNodeStart(stringNodeToAdd3);
  console.log('Sąrašas po pridėjimo', { ...stringList });
}
console.groupEnd();

console.group('4. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.');
{
  console.log('String sąrašas');
  console.log(numberList);

  console.log('Pridedamas Mazgas 1', numberNodeToAdd1);
  numberList.addNodeEnd(numberNodeToAdd1);
  console.log('Sąrašas po pridėjimo', { ...numberList });

  console.log('Pridedamas Mazgas 2', numberNodeToAdd2);
  numberList.addNodeEnd(numberNodeToAdd2);
  console.log('Sąrašas po pridėjimo', { ...numberList });

  console.log('Pridedamas Mazgas 3', numberNodeToAdd3);
  numberList.addNodeEnd(numberNodeToAdd3);
  console.log('Sąrašas po pridėjimo', { ...numberList });
}
console.groupEnd();

console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
  console.log('string sąrašo spausdinimas');
  stringList.forEach((str) => console.log(str));

  const stringArr: string[] = [];
  const putInStringArr = (x: number): void => {
    stringArr.push(String(x));
  };

  console.log('number sąrašo spausdinimas');
  numberList.forEach(putInStringArr);
  const numberListStringRepresentation: string = stringArr.join(' → ');
  console.log(numberListStringRepresentation);
}
console.groupEnd();
