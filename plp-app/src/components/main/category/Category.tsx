import { FunctionComponent } from 'react';
import './Category.scss';
import Product from '../../../types/Product';

type Props = {
    products: Product[];
}

const CategoryComponent: FunctionComponent<Props> = ({products}) => {

    return (
        <div className="container category col-8">
            {products.map(product => (
                   <div  key={product._id}  className="row">
                   <div className="col-sm-6 col-md-4 col-lg-3">
                       category: {product.category}
                   </div>
                   <div className="col-sm-6 col-md-4 col-lg-3">
                       category: desc
                   </div>
               </div>
            ))}
         
        </div>
    );
};

export default CategoryComponent;