import { FunctionComponent } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.scss';
import FilterComponent from './components/main/filter/Filter';

const App: FunctionComponent = () => {


  return (
    <div className='wrapper'>
      <Header />
      <div className='main-page'>
        <FilterComponent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
