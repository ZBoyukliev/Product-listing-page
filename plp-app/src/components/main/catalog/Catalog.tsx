import { FunctionComponent, useContext } from 'react';
import styles from './Catalog.module.scss';
import { ProductContext, ProductContextType } from '../../../context/products';

interface CatalogComponentProps {
  visibleProducts: number;
  onLoadMore: () => void;
}


const CatalogComponent: FunctionComponent<CatalogComponentProps> = ({ visibleProducts, onLoadMore }) => {

  const contextValue = useContext<ProductContextType | null>(ProductContext);
  // const [visibleProducts, setVisibleProducts] = useState(5);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (contextValue?.products && contextValue.products.length > 0) {
  //     setLoading(false);
  //   }
  // }, [contextValue]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (!contextValue) {
    return <div>No products available</div>;
  }

  const { products } = contextValue;


  // Function to load more products when the "Load More" button is clicked
  // const handleLoadMore = () => {
  //   setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
  // };

  // Filter the products based on the number of visible products
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
                <button className="btn btn-success">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={onLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CatalogComponent;