import React, {useState, useEffect} from 'react';

import service from './services'

import Header from './components/Header'
import Form from './components/Form'
import Resume from './components/Resume'
import Footer from './components/Footer/index';

import './App.css';

const test = new service();


const App = () => {

  const [state, setState] = useState({});

  

  return (
    <>
      <Header />
      <main>
        <h1>
          My Github Resumé
        </h1>
        <Form />
        <Resume />
      </main>
      <Footer />
      
    </>
  );
}

export default App;
