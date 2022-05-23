/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

console.groupCollapsed('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
  // Funkcijos deklaravimas
  const printCapitalized = (str: string): void => {
    const wordCapitalized = str.toUpperCase();
    console.log(wordCapitalized);
  };

  console.log('abcd:');
  printCapitalized('abcd');
  console.log('"AAAA');
  printCapitalized('AAAA');
  console.log('"aBcD');
  printCapitalized('aBcD');
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
  const caclStringCombinedLength = (a: string, b: string): number => a.length + b.length;

  console.log({
    'labas, abc': caclStringCombinedLength('labas', 'abc'),
    'kranas, jonas': caclStringCombinedLength('kranas', 'jonas'),
    'kebabas, kefyras': caclStringCombinedLength('kebabas', 'kefyras'),
  });
}
console.groupEnd();

console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
  const containsLetter = (str: string, letter: string): boolean => str.includes(letter);

  console.log({
    'labas, a': containsLetter('labas', 'a'),
    'kempė, a': containsLetter('kempė', 'a'),
    'Finakolė, u': containsLetter('Finakolė', 'u'),
  });
}
console.groupEnd();

console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
  const isEvenNumberOfLetters = (str: string): boolean => str.length % 2 === 0;

  console.log({
    labas: isEvenNumberOfLetters('labas'),
    kempės: isEvenNumberOfLetters('kempės'),
    123123: isEvenNumberOfLetters('123123'),
  });
}
console.groupEnd();

console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
  const countVowelCount = (str: string): number => [...str.matchAll(/[aeiouyąęėįųū]/g)].length;

  console.log({
    aaaaa: countVowelCount('aaaaa'),
    sasasasa: countVowelCount('sasasasa'),
    aeyuioąčė: countVowelCount('aeyuioąčė'),
  });
}
console.groupEnd();

console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
  const countLetters = (str: string, searchLetter: string): number => {
    const searchLetterRegex = new RegExp(searchLetter, 'g');
    const regexMatchesArr = [...str.matchAll(searchLetterRegex)];

    return regexMatchesArr.length;
  };
  console.log({
    'labas, a': countLetters('labas', 'a'),
    'kempės, k': countLetters('kempės', 'k'),
    '123123, z': countLetters('123123', 'z'),
  });
}
console.groupEnd();

console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
  const removeLetter = (str: string, letter: string): string => str.replace(letter, '');

  console.log({
    labas: removeLetter('labas', 'b'),
    kempiniukas: removeLetter('kempiniukas', 's'),
    123123: removeLetter('123123', 'a'),
  });
}
console.groupEnd();

//  7. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.groupCollapsed('7. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
  const filterLetters = (str: string, letters: string[]): string => letters
    .reduce((prevStr, letter) => prevStr.replaceAll(letter, ''), str);

  const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
  console.log(str);
}
console.groupEnd();

// 8. Sukurkite funkciją, kuri teksto klaidas, pagal tokius reikalavimus:
//  * Pirma sakinio raidė didžioji.
//  * Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  * Bet koks kiekis tarpų pakeičiamas vienu tarpu
//  * Pašalinti tarpus aplink visą tekstą
console.groupCollapsed('8. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
  type StringModifier = (str: string) => string;
  type DecomposedText = {
    sentences: string[],
    separators: string[],
  };
  // PATEIKTAS VIENAS IŠ DAUGELIO VARIANTŲ - išsprendus savaip galite palyginti sprendimus
  // Su dėstytoju aptarkite pliusus ir minusus šio ir jūsų sprendimo.

  const REGEX_WHITESPACE = /[\s]+/g;
  const REGEX_SEPARATORS = /[.?!]/g;

  const removeMultipleSpaces: StringModifier = (str) => str.replaceAll(REGEX_WHITESPACE, ' ');

  const removeSpacesBeforeCommas: StringModifier = (str) => str.replaceAll(' , ', ',');

  const ensureSpacesAfterCommas: StringModifier = (str) => str.replaceAll(
    ',',
    (_, index, text) => (text[index + 1] === ' ' ? ',' : ', '),
  );

  const decomposeText = (text: string): DecomposedText => {
    const captures = [...text.matchAll(REGEX_SEPARATORS)];

    let from = -1;
    const sentencesAndSeparators: DecomposedText = captures.reduce<DecomposedText>(
      (prevSentencesAndSeparators, capture) => {
        const [separator] = capture;
        const index = capture.index as number;
        const sentence = text.slice(from + 1, index);

        prevSentencesAndSeparators.sentences.push(sentence);
        prevSentencesAndSeparators.separators.push(separator);
        from = index;

        return prevSentencesAndSeparators;
      },
      {
        sentences: [],
        separators: [],
      },
    );

    return sentencesAndSeparators;
  };

  const composeText = ({ sentences, separators }: DecomposedText): string => sentences
    .reduce((text, sentence, index) => `${text + sentence + separators[index]} `, '');

  const capitalize: StringModifier = (str) => str[0].toUpperCase() + str.slice(1);

  // const capitalizeWord = (word: string): string => word[0].toUpperCase() + word.slice(1);

  const fixText = (text: string): string => {
    let result = text.trim();
    result = removeMultipleSpaces(result);
    result = removeSpacesBeforeCommas(result);
    result = ensureSpacesAfterCommas(result);
    const decomposedText = decomposeText(result);
    const sentences = decomposedText.sentences
      .map((sentence) => sentence.trim())
      .map(capitalize);

    result = composeText({ ...decomposedText, sentences });

    return result;
  };

  const text = '    labas , aš Serbentautas .   Man      patinka vaisiai? Visokie     vaisiai  !    Ypač    bananai       , obuoliai,kriaušės.    ';
  const fixedText = fixText(text);
  console.log(fixedText);
}
console.groupEnd();
