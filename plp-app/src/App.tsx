import { FunctionComponent } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styles from './App.module.scss';
import MainComponent from './components/main/Main';

const App: FunctionComponent = () => {


  return (
    <section className={`${styles['wrapper']}`}>
      <Header />
      <MainComponent />
      <Footer />
    </section>
  );
};

export default App;
