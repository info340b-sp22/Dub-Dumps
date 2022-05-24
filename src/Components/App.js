import React, { useState } from 'react'; //import React Component
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import HomePage from './HomePage.js';
import Footer from './Footer.js';

function App(props) {

  return (
    <>
    <HomePage />
    {/* <SearchPage /> */}
    <Footer />
    </>
  );
}

export default App;

