import { FunctionComponent } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.scss';
import FilterComponent from './components/main/filter/Filter';
import CategoryComponent from './components/main/category/Category';
import SorterComponent from './components/main/sort/Sorter';

const App: FunctionComponent = () => {


  return (
    <div className='wrapper'>
      <Header />
      <div className='main-page'>
        <FilterComponent />
        <div className='heading'>
        <CategoryComponent />
        <SorterComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
