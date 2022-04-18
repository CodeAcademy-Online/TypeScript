"use strict";
class List {
    constructor(initialNode) {
        this.addFirstElement = (node) => {
            this.head = node;
            this.tail = node;
        };
        this.addNodeStart = (node) => {
            if (this.head === null) {
                this.addFirstElement(node);
            }
            else {
                node.next = this.head;
                this.head = node;
            }
        };
        this.addNodeEnd = (node) => {
            if (this.tail === null) {
                this.addFirstElement(node);
            }
            else {
                this.tail.next = node;
                this.tail = node;
            }
        };
        this.forEach = (callback) => {
            if (this.head === null)
                return;
            let currentNode = this.head;
            while (true) {
                callback(currentNode.data);
                if (currentNode.next === null)
                    break;
                currentNode = currentNode.next;
            }
        };
        if (initialNode !== undefined) {
            this.head = initialNode;
            this.tail = initialNode;
        }
        else {
            this.head = null;
            this.tail = null;
        }
    }
}
const stringNode1 = { data: 'labas', next: null };
const stringNode2 = { data: 'vakaras', next: stringNode1 };
const stringList = new List();
const numberNode = { data: 5, next: null };
const numberList = new List(numberNode);
const stringNodeToAdd1 = { data: 'Serbentautas', next: null };
const stringNodeToAdd2 = { data: 'Vardas', next: null };
const stringNodeToAdd3 = { data: 'Mano', next: null };
const numberNodeToAdd1 = { data: 1, next: null };
const numberNodeToAdd2 = { data: 2, next: null };
const numberNodeToAdd3 = { data: 3, next: null };
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
    const stringArr = [];
    const putInStringArr = (x) => {
        stringArr.push(String(x));
    };
    console.log('number sąrašo spausdinimas');
    numberList.forEach(putInStringArr);
    const numberListStringRepresentation = stringArr.join(' → ');
    console.log(numberListStringRepresentation);
}
console.groupEnd();
//# sourceMappingURL=main.js.map