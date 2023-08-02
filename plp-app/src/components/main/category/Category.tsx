import { FunctionComponent, useContext } from 'react';
import { ProductContext } from '../../../context/products';
import './Category.scss';

interface CategoryComponentProps {
    visibleProducts: number;
}


const CategoryComponent: FunctionComponent<CategoryComponentProps> = ({ visibleProducts }) => {
    const productContext = useContext(ProductContext);

    if (!productContext) {
        return <div>Loading...</div>;
    }

    const { categoryType, products } = productContext;

    const filteredProducts = products ? products.filter(
        (product) => product.category === categoryType
    ) : [];

    const displayedProductsCount = filteredProducts.length;

    return (
        <div className="container category col-8">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <h1>{categoryType.toUpperCase()} </h1>
                </div>

            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
                {displayedProductsCount >= 5 ? visibleProducts : displayedProductsCount} out of {displayedProductsCount} products
            </div>
        </div>
    );
};

export default CategoryComponent;