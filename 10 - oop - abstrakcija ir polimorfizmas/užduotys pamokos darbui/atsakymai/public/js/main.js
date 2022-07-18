"use strict";
console.group('1. Implementuokite figūrų abstrakciją ir polimorfizmą naudojant abstrakčią klasę');
{
    class Shape2D {
    }
    class Rectangle extends Shape2D {
        height;
        width;
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }
        getPerimeter = () => 2 * this.height + 2 * this.width;
        getArea = () => this.width * this.height;
    }
    class Circle extends Shape2D {
        radius;
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getPerimeter = () => 2 * Math.PI * this.radius;
        getArea = () => Math.PI * this.radius ** 2;
    }
    console.log('1.1. Sukurkite abstrakčią klasę Shape2D, kuri turėtų 2 abstrakčius metodus. Abu šie metodai neturi parametrų ir grąžina skaičių: "getPerimeter" ir "getArea"');
    console.log('1.2. Sukurkite Rectangle klasę kuri paveldi Shape2D klasę ir implementuokite metodus. Konstruktoriaus ir savybes pasirinkite taip, kad galėtumėte implementuoti abstrakčių metodų logiką.');
    console.log('1.3. Sukurkite Circle klasę kuri paveldi Shape2D klasę ir implementuokite metodus. Konstruktoriaus ir savybes pasirinkite taip, kad galėtumėte implementuoti abstrakčių metodų logiką.');
    console.groupCollapsed('1.4. Sukurkite "Shape2D" tipo masyvą, kuriame būtų 2 apskritimai ir 2 keturkampiai. Atspausdinkite visų figūrų plotus ir perimetrus naudodami "Shape2D" klasės abstrakčius metodus');
    {
        const shapes = [
            new Rectangle(500, 200),
            new Rectangle(300, 300),
            new Circle(40),
            new Circle(70),
        ];
        console.log('Figūros:');
        console.table(shapes);
        console.group('Perimetrai:');
        shapes.forEach((shape) => {
            console.log(shape.getPerimeter());
        });
        console.groupEnd();
        console.group('Plotai:');
        shapes.forEach((shape) => {
            console.log(shape.getPerimeter());
        });
        console.groupEnd();
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map