import { FunctionComponent  } from 'react';
import Header from './components/header/Header';
import './App.scss';

const App: FunctionComponent = () => {


  return (
    <>
    <Header />
    <h1>it works</h1>
     <button className="btn btn-primary">Submit</button>
    </>
  );
};

export default App;
