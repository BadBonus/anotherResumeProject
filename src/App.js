import React from 'react';

import Header from './components/Header'
import Form from './components/Form'
import Resume from './components/Resume'
import Footer from './components/Footer/index';

import './App.css';


function App() {
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
