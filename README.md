# TypeScript - OOP - paveldimumas

1. Sukurkite klasę WaterVehicle, kuri turėtų savybes:
  brand: string,
  model: string,
  year: number,
  maxDepth: number

2. Sukurkite klasę LandVehicle, kuri turėtų savybes:
  brand: string,
  model: string,
  year: number,
  tires: string[],

3. Sukurkite klasę AirVehicle, kuri turėtų savybes:
  brand: string,
  model: string,
  year: number,
  maxAltitude: number,

4. Sukurkite klasę Vehicle ir padarykite ją tėvine [1.], [2.] ir [3.] punktais sukurtoms klasėms.
  4.1 bendras savybes(brand, model, year) aprašykite su 'protected' pasiekiamumo lygiu.
  4.2 perrrašykite visų klasių konstruktorius, jog bendros savybės (brand, model, year) būtų perduotos tėviniam konstruktoriui
  
5. Vehicle klasėje aprašykite metodą 'public getString(): string' kuris suformuotų pagindinė informaciją(brand, model, year)

6. Vehicle klasėje pakeiskite metodą 'public getString(): string' į 'PROTECTED getString(): string'. Kiekvienoje paveldinčioje
  klasėje sukurkite metodus 'public toString(): string', kurios naudotų tėvinės klasės metodus metodą 'PROTECTED getString(): string'
  tam kad suformuoti pilną savosios klasės reprezentaciją

7. Tėvinės klasės Vehicle konstruktoriaus parametrus aprašykite objektu, ir perrašykite vaikinių klasių konstruktorius.

8. Išskaidykite kodą atskirais failais