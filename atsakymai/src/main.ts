import LandVehicle from './land-vehicle.js';
import AirVehicle from './air-vehicle.js';
import WaterVehicle from './water-vehicle.js';

const vehicles: (LandVehicle | AirVehicle | WaterVehicle)[] = [
  new LandVehicle({
    tires: ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
  }, {
    brand: 'Toyota',
    model: 'Corola',
    year: 2005,
  }),
  new LandVehicle({
    tires: ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
  }, {
    brand: 'Nisan',
    model: 'Qashqai',
    year: 2007,
  }),
  new AirVehicle({
    maxAltitude: 7000,
  }, {
    brand: 'Jeti',
    model: 'Nitro',
    year: 2015,
  }),
  new AirVehicle({
    maxAltitude: 5000,
  }, {
    brand: 'Falcon',
    model: 'Bamasi',
    year: 2012,
  }),
  new WaterVehicle({
    maxDepth: 50,
  }, {
    brand: 'Sailor',
    model: 'Ocean 3000',
    year: 2011,
  }),
  new WaterVehicle({
    maxDepth: 70,
  }, {
    brand: 'LandScraper',
    model: 'Fagotti',
    year: 202,
  }),
];

vehicles.forEach(v => console.log(v.toString()));