import { FunctionComponent, useContext } from 'react';
import styles from './Catalog.module.scss';
import { ProductContext } from '../../../context/products';
import { ProductContextType } from '../../../context/models/ContextModel';
import CatalogTyleComponent from './catalogTyle/CatalogTyle';
import Loading from '../../Loading/Loading';

type Props = {
  visibleProducts: number;
  onLoadMore: () => void;
}

const CatalogComponent: FunctionComponent<Props> = ({ visibleProducts, onLoadMore }) => {

  const contextValue = useContext<ProductContextType | null>(ProductContext);

  if (!contextValue) return <div>No products available</div>

  const { products, isLoading } = contextValue;
  const filteredProducts = products.slice(0, visibleProducts);

  return (
    <>
      {isLoading ? <Loading /> :
        <div className={`${styles['catalog']} container col-12 col-md-9`}>
          <div className="row mb-4">

            {filteredProducts.map(product => <CatalogTyleComponent key={product._id} product={product} />)}
          </div>
          {visibleProducts < products.length && (
            <div className="text-center">
              <button className={`${styles['btn']} shadow border-2 mb-5`} onClick={onLoadMore}>
                MORE RESULTS
              </button>
            </div>
          )}
        </div>
      }
    </>
  );
};

export default CatalogComponent;
