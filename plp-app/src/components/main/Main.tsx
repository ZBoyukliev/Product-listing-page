

import { FunctionComponent, useState, useEffect, useContext } from 'react';
import FilterComponent from './filter/Filter';
import CategoryComponent from './category/Category';
import SorterComponent from './sort/Sorter';
import CatalogComponent from './catalog/Catalog';
import styles from './Main.module.scss';
import { ProductContext, ProductContextType } from '../../context/products';

const MainComponent: FunctionComponent = () => {
    
  const contextValue = useContext<ProductContextType | null>(ProductContext);
  // const { products } = contextValue;
  const [visibleProducts, setVisibleProducts] = useState(5);
  
    useEffect(() => {
      setVisibleProducts(5);
    }, [contextValue?.categoryType]);
  
    const handleLoadMore = () => {
      setVisibleProducts((prevVisibleProducts) =>
        Math.min(prevVisibleProducts + 5, contextValue?.products.length || 0)
      );
    };

    return (
        <div className={`${styles['main-page']} row`}>
            <FilterComponent />
            <div className="col-9">
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