import { FunctionComponent, useContext } from 'react';
import styles from './Catalog.module.scss';
import { ProductContext } from '../../../context/products';
import { ProductContextType } from '../../../context/models/ContextModel';

interface CatalogComponentProps {
  visibleProducts: number;
  onLoadMore: () => void;
}


const CatalogComponent: FunctionComponent<CatalogComponentProps> = ({ visibleProducts, onLoadMore }) => {

  const contextValue = useContext<ProductContextType | null>(ProductContext);

  if (!contextValue) {
    return <div>No products available</div>;
  }

  const { products } = contextValue;

  const filteredProducts = products.slice(0, visibleProducts);



  return (

    <div className={`${styles['catalog']} container col-9`}>
      <div className="row mb-4">
        {filteredProducts.map(product => (
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
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="text-center">
          <button className={`${styles['btn']} mb-5`} onClick={onLoadMore}>
            MORE RESULTS
          </button>
        </div>
      )}
    </div>
  );
};

export default CatalogComponent;