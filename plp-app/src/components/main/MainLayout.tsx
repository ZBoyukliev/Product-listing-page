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
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setVisibleProducts(6);
  }, [contextValue?.categoryType]);

  const handleLoadMore = () => {
    
    setVisibleProducts((prevVisibleProducts) =>
      Math.min(prevVisibleProducts + 6, contextValue?.products.length || 0)
    );
  };

  const onCloseFilters = () => {
    setShowFilters(false);
  };

  const onShowFilters = (e: any) => {
    e.preventDefault();
    setShowFilters(true);
  }

  return (
    <div className={`${styles['main-page']} row`}>
      <div className={`${styles['filter-component']} ${showFilters ? styles.show : ''} shadow col-12 col-md-4 col-xl-3`}>
        <FilterComponent onCloseFilters={onCloseFilters} />
      </div>
      <div className='col-12 d-md-none ps-3 display-5'>
        <p onClick={(e:any) => onShowFilters(e)}>Filters</p>
      </div>
      <div className="col-12 col-md-8 col-xl-9">
        <div className={`${'right-s'} px-2 row mt-3 mb-2 d-flex align-items-center flex-column-reverse flex-md-row pe-5`}>
          <CategoryComponent visibleProducts={visibleProducts} />
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
