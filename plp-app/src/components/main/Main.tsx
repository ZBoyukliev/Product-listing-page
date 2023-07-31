import { FunctionComponent, useState, useEffect, useContext } from 'react';
import FilterComponent from './filter/Filter';
import CategoryComponent from './category/Category';
import SorterComponent from './sort/Sorter';
import CatalogComponent from './catalog/Catalog';
import styles from './Main.module.scss';
import { ProductContext, ProductContextType } from '../../context/products';
// import Product from '../../types/Product';

const MainComponent: FunctionComponent = () => {
    const [visibleProducts, setVisibleProducts] = useState(5);
    // const { categoryType } = useContext(ProductContext);
    const contextValue = useContext<ProductContextType | null>(ProductContext);
  
    useEffect(() => {
      setVisibleProducts(5); // Reset visibleProducts to 5 whenever the categoryType changes
    }, [contextValue?.categoryType]);
  
    // Function to load more products when the "Load More" button is clicked
    const handleLoadMore = () => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
    };

    return (
        <div className={`${styles['main-page']} row`}>
            <FilterComponent />
            <div className="col-9">
                <div className='right-side row'>
                    <CategoryComponent />
                    <SorterComponent />
                </div>
                <CatalogComponent visibleProducts={visibleProducts} onLoadMore={handleLoadMore} />
            </div>
        </div>
    );
};

export default MainComponent;