import { FunctionComponent } from 'react';
import FilterComponent from './filter/Filter';
import CategoryComponent from './category/Category';
import SorterComponent from './sort/Sorter';
import CatalogComponent from './catalog/Catalog';
import styles from './Main.module.scss';

const MainComponent: FunctionComponent = () => {

    return (
        <div className={`${styles['main-page']} row`}>
        <FilterComponent />
        <div className={`${styles['heading']} col-9`}>
          <div className='right-side row'>
            <CategoryComponent />
            <SorterComponent />
          </div>
        <CatalogComponent />
        </div>
      </div>
    );
};

export default MainComponent;