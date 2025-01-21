import { FunctionComponent, useContext } from 'react';
import { ProductContext } from '../../../context/products';
import './Category.scss';

interface CategoryComponentProps {
    visibleProducts: number;
}

const CategoryComponent: FunctionComponent<CategoryComponentProps> = ({ visibleProducts }) => {
    
    const productContext = useContext(ProductContext);

    if (!productContext) return <div>Loading...</div>

    const { categoryType, products } = productContext;
    const displayedProductsCount = products.length;

    return (
        <div className="container category text-center text-md-start ms-md-3 ms-xl-5 col-12 col-md-6">
            <div className="row">
                <div className="col-12 col-md-12">
                    <h1>{categoryType.toUpperCase()} </h1>
                </div>
            <div className="col-12 col-md-12">
                {(displayedProductsCount >= 6 && visibleProducts <= displayedProductsCount) ? visibleProducts : displayedProductsCount} out of {displayedProductsCount} products
            </div>
            </div>
        </div>
    );
};

export default CategoryComponent;
