import Brand from './brand';
import Model from './model';
import Car from './car';

type CarJoined = Omit<Car, 'modelId'> & {
  brand: Brand['title'],
  model: Model['title'],
};

export default CarJoined;
