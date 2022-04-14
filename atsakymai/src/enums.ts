/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams. 
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/

// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
enum WeekDays {
  Monday = 1,
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
  Sunday, // 7
};

// Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
enum Answer {
  No, // 0
  Yes, // 1
};

// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'trečiadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'šeštadienis',
  Sunday = 'sekmadienis',
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
  enum LithuanianCity {
    Kaunas = 'Kaunas',
    Vilnius = 'Vilnius',
    Klaipeda = 'Klaipeda',
    Siauliai = 'Siauliai',
    Panevezys = 'Panevezys',
  };

  enum LargestCountries {
    China,
    India,
    UnitedStates,
    Indonesia,
    Pakistan,
  };

  enum StrongestEconomies {
    UnitedStates = 1,
    China,
    Japan,
    Germany,
    UnitedKingdom,
  };
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑

  console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
  {
    const city1: LithuanianCity = LithuanianCity.Kaunas;
    const city2: LithuanianCity = LithuanianCity.Klaipeda;

    console.log({ city1, city2 });
  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    const largestCountries: LargestCountries[] = [LargestCountries.China, LargestCountries.Pakistan];

    console.log(largestCountries);
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    const strongestEconomies: StrongestEconomies[] = [
      StrongestEconomies.UnitedStates,
      StrongestEconomies.China,
      StrongestEconomies.Japan,
      StrongestEconomies.Germany,
      StrongestEconomies.UnitedKingdom,
    ];

    console.log(strongestEconomies);
  }
  console.groupEnd();

}
console.groupEnd();

