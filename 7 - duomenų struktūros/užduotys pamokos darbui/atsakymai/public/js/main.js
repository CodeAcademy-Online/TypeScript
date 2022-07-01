"use strict";
console.group('1. Dėklo (Stack) duomenų struktūros kūrimas');
{
    class Stack {
        index;
        constructor() { this.index = -1; }
        get length() {
            return this.index + 1;
        }
        push(data) {
            this.index += 1;
            this[this.index] = data;
        }
        pop() {
            const returnVal = this[this.index];
            if (returnVal !== undefined) {
                delete this[this.index];
                this.index -= 1;
            }
            return returnVal;
        }
    }
    const numberStack = new Stack();
    const stringStack = new Stack();
    console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
        console.log({
            numberStack,
            stringStack,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.: vienetu didesniu indeksu nei dabartinis index. Po pridėjimo index savybę padidinkite vienetu');
    {
        numberStack.push(7);
        numberStack.push(8);
        numberStack.push(9);
        stringStack.push('Viens');
        stringStack.push('Du');
        stringStack.push('Trys');
        console.log({
            numberStack,
            stringStack,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros galo. Po išėmimo index savybę sumažinkite vienetu');
    {
        const lastNumber = numberStack.pop();
        const lastString = stringStack.pop();
        console.log({
            lastNumber,
            lastString,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
    {
        console.log({
            'numberStack.length': numberStack.length,
            'stringStack.length': stringStack.length,
        });
    }
    console.groupEnd();
}
console.groupEnd();
console.group('2. Eilės (Queue) duomenų struktūros kūrimas');
{
    class Queue {
        index;
        constructor() { this.index = -1; }
        get length() {
            return this.index + 1;
        }
        enqueue(data) {
            for (let i = this.index; i >= 0; i -= 1) {
                this[i + 1] = this[i];
            }
            this[0] = data;
            this.index += 1;
        }
        dequeue() {
            const returnVal = this[0];
            for (let i = 1; i <= this.index; i += 1) {
                this[i - 1] = this[i];
            }
            delete this[this.index];
            this.index -= 1;
            return returnVal;
        }
    }
    const numberQueue = new Queue();
    const stringQueue = new Queue();
    console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
        console.log({
            numberStack: numberQueue,
            stringStack: stringQueue,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros priekį. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
        numberQueue.enqueue(7);
        numberQueue.enqueue(8);
        numberQueue.enqueue(9);
        stringQueue.enqueue('Viens');
        stringQueue.enqueue('Du');
        stringQueue.enqueue('Trys');
        console.log({
            numberStack: numberQueue,
            stringStack: stringQueue,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros priekio. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
        const lastNumber = numberQueue.dequeue();
        const lastString = stringQueue.dequeue();
        console.log({
            lastNumber,
            lastString,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
    {
        console.log({
            'numberQueue.length': numberQueue.length,
            'stringQueue.length': stringQueue.length,
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map