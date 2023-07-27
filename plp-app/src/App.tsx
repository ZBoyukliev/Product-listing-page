import { FunctionComponent } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.scss';

const App: FunctionComponent = () => {


  return (
    <div className='wrapper'>
      <Header />
      <div className='main-div'>
        <h2>hhhh</h2>
        <h1>it works</h1>
        <button className="btn btn-primary">Submit</button>
      </div>
      <Footer />
    </div>
  );
};

export default App;
