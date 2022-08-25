import Product from '../types/product';
import Category from '../types/category';
import ProductCategory from '../types/product-category';
import ProductJoined from '../types/product-joined';

type ProductsCollectionProps = {
  products: Product[]
  categories: Category[]
  productsCategories: ProductCategory[]
};

class ProductsCollection {
  private props: ProductsCollectionProps;

  public constructor(props: ProductsCollectionProps) {
    this.props = JSON.parse(JSON.stringify(props));
  }

  private joinProduct = (product: Product) => {
    const { categories, productsCategories } = this.props;

    const productCategoriesIds = productsCategories
      .filter((pc) => pc.productId === product.id)
      .map((pc) => pc.categoryId);

    const productCategoriesTitles = categories
      .filter((category) => productCategoriesIds.includes(category.id))
      .map((category) => category.title);

    return {
      ...product,
      categories: productCategoriesTitles.join(', '),
    };
  };

  public get all(): ProductJoined[] {
    return this.props.products.map(this.joinProduct);
  }

  public getByCategoryId(categoryId: string): ProductJoined[] {
    const { productsCategories, products } = this.props;
    const productsByCategoryIdIds = productsCategories
      .filter((productCategory) => productCategory.categoryId === categoryId)
      .map((productCategory) => productCategory.productId);

    const joinedProductsByCategory = products
      .filter((product) => productsByCategoryIdIds.includes(product.id))
      .map((product) => this.joinProduct(product));

    return joinedProductsByCategory;
  }

  public deleteProductById(productId: string): void {
    this.props.productsCategories = this.props.productsCategories
      .filter((productCategory) => productCategory.productId !== productId);

    this.props.products = this.props.products
      .filter((product) => product.id !== productId);
  }
}

export default ProductsCollection;
