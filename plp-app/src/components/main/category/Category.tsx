import { FunctionComponent, useContext } from 'react';
import { ProductContext } from '../../../context/products';
import './Category.scss';


const CategoryComponent: FunctionComponent = () => {
    const productContext = useContext(ProductContext);

    if (!productContext) {
        return <div>Loading...</div>;
    }

    const { categoryType, products } = productContext;

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