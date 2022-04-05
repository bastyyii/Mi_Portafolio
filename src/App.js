import React, { Fragment } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Port from './components/Port';
import AllTools from './components/AllTools';
import AllTollsSecondary from './components/AllToolsSecondary';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <main className='main'>
        <Home/>
      </main>
      <About/>
      <AllTools/>
      <AllTollsSecondary/>
      <Port/>
      <Contact/>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
