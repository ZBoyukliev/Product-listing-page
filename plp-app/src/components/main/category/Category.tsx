import { FunctionComponent } from 'react';
import './Category.scss';
import Product from '../../../types/Product';

type Props = {
    products: Product[];
}

const CategoryComponent: FunctionComponent<Props> = ({ products }) => {

    let categoryType: string = '';

    products.map(product => {
        categoryType == '' ? categoryType = product.category : '';
    });

    console.log(products);


    return (
        <div className="container category col-8">
            {/* {products.map(product => ( */}
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    category: {categoryType}
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    counter: {products.length}
                </div>
            </div>


        </div>
    );
};

export default CategoryComponent;