import Product from './product';

type ProductJoined = Product & {
  categories: string,
};

export default ProductJoined;
