import { FunctionComponent } from 'react';
import styles from './CatalogTyle.module.scss';
import Product from '../../../../types/Product';

type Props = {
  product: Product;
};

const CatalogTyleComponent: FunctionComponent<Props> = ({ product }) => {

  return (
       <>
       
          <div key={product._id} className={`${styles['card-container']} col-md-4`}>
            <div className={`${styles['card-main']} card m-4`}>
              <img src={product.imageUrl} alt={product.title} className={`${styles['card-img']} card-img-top`} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: {product.discountedPrice ? <del>${product.price}</del> : `$${product.price}`}</p>
                <p className="card-text">Rating: {product.rating} stars</p>
                <button className={`${styles['btn']}`}>Add to Cart</button>
              </div>
            </div>
          </div>
    </>
  );
};

export default CatalogTyleComponent;