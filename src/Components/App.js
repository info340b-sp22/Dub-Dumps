import React, { useState } from 'react'; //import React Component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage.js';
import HomePage from './HomePage.js';
import Header from './Header.js';
import Footer from './Footer.js';

function App(props) {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/home' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

