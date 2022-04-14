"use strict";
console.group('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const sortDrinksByPriceASC = (drink1, drink2) => {
        return drink1.price - drink2.price;
    };
    const solution = (drinks) => {
        return [...drinks].sort(sortDrinksByPriceASC);
    };
    const drinks = [
        { name: "lemonade", price: 50 },
        { name: "fanta", price: 30 },
        { name: "lime", price: 10 },
    ];
    const sortedDrinks = solution(drinks);
    console.log({
        drinks,
        sortedDrinks,
    });
}
console.groupEnd();
console.group('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    const solution = (itemObj, itemName, itemValue) => (Object.assign(Object.assign({}, itemObj), { [itemName]: itemValue }));
    const solutionArgs1 = [{}, "Brutus", 300];
    const solutionArgs2 = [{ piano: 500 }, "Brutus", 400];
    const solutionArgs3 = [{ piano: 500, stereo: 300 }, "Caligula", 440];
    const result1 = solution(...solutionArgs1);
    const result2 = solution(...solutionArgs2);
    const result3 = solution(...solutionArgs3);
    console.log(solutionArgs1, result1);
    console.log(solutionArgs2, result2);
    console.log(solutionArgs3, result3);
}
console.groupEnd();
//# sourceMappingURL=main.js.map