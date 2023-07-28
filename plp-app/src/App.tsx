import { FunctionComponent } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styles from './App.module.scss';
import FilterComponent from './components/main/filter/Filter';
import CategoryComponent from './components/main/category/Category';
import SorterComponent from './components/main/sort/Sorter';
import CatalogComponent from './components/main/catalog/Catalog';

const App: FunctionComponent = () => {


  return (
    <section className={`${styles['wrapper']} `}>
      <Header />
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
      <Footer />
    </section>
  );
};

export default App;
