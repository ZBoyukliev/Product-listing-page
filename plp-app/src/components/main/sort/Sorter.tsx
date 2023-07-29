import { FunctionComponent } from 'react';
import './Sorter.scss';
import Product from '../../../types/Product';

type Props = {
    products: Product[];
}

const SorterComponent: FunctionComponent<Props> = ({ products }) => {

    return (
        <div className="container sorter col-4">
            {products.map(product => (
                <div key={product._id} className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        {/* category: {product.title} */}
                    </div>
                </div>
            ))}

        </div>
    );
};

export default SorterComponent;