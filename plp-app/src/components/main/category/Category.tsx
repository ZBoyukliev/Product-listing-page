import { FunctionComponent, useContext } from 'react';
import { ProductContext } from '../../../context/products';
import './Category.scss';
// import Product from '../../../types/Product';


const CategoryComponent: FunctionComponent = () => {


    const { categoryType, products } = useContext(ProductContext);

    const filteredProducts = products.filter(
        (product) => product.category === categoryType
      );

    return (
        <div className="container category col-8">
            {/* {products.map(product => ( */}
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