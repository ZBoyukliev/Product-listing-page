import { FunctionComponent, useContext } from 'react';
import { ProductContext } from '../../../context/products';
import './Category.scss';
// import Product from '../../../types/Product';


const CategoryComponent: FunctionComponent = () => {
    // const { categoryType, products } = useContext(ProductContext);
    const productContext = useContext(ProductContext);

    if (!productContext) {
      // Handle the case when the context value is not available yet
      return <div>Loading...</div>; // You can show a loading message or a placeholder
    }
  
    const { categoryType, products } = productContext;
  
    // Check if products is available before filtering
    const filteredProducts = products ? products.filter(
      (product) => product.category === categoryType
    ) : [];

    return (
        <div className="container category col-8">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    category: {categoryType}
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    counter: {filteredProducts.length}
                </div>
            </div>
        </div>
    );
};

export default CategoryComponent;