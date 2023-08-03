
import { FunctionComponent, useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../context/products';
import { ProductContextType } from '../../context/models/ContextModel';
import FilterComponent from './filter/Filter';
import CategoryComponent from './category/Category';
import SorterComponent from './sort/Sorter';
import CatalogComponent from './catalog/Catalog';
import styles from './Main.module.scss';

const MainComponent: FunctionComponent = () => {
    
  const contextValue = useContext<ProductContextType | null>(ProductContext);
  const [visibleProducts, setVisibleProducts] = useState(6);
  
    useEffect(() => {
      setVisibleProducts(6);
    }, [contextValue?.categoryType]);
  
    const handleLoadMore = () => {
      setVisibleProducts((prevVisibleProducts) =>
        Math.min(prevVisibleProducts + 6, contextValue?.products.length || 0)
      );
    };

    return (
        <div className={`${styles['main-page']} row`}>
          <div className={`${styles['filter-component']} shadow col-12 col-md-3`}>
            <FilterComponent />
          </div>
            <div className="col-12 col-md-9">
                <div className={`${'right-s'} row mt-3 mb-2`}>
                    <CategoryComponent visibleProducts={visibleProducts}/>
                    <SorterComponent />
                </div>
                <CatalogComponent
                 visibleProducts={visibleProducts} 
                 onLoadMore={handleLoadMore}
                 />
            </div>
        </div>
    );
};

export default MainComponent;