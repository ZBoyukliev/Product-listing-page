import { FunctionComponent } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styles from './App.module.scss';
import MainComponent from './components/main/Main';
import { ProductProvider } from './context/products';
import { ToastContainer } from 'react-toastify';

const App: FunctionComponent = () => {


  return (
    <ProductProvider>
      <section className={`${styles['wrapper']}`}>
        <Header />
        <MainComponent />
        <Footer />
        <ToastContainer />
      </section>
    </ProductProvider>
  );
};

export default App;
