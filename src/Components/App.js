import React, { useState } from 'react'; //import React Component
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SearchPage from './SearchPage.js';
import BathroomPage from './BathroomPage.js'
import HomePage from './HomePage.js';
import Header from './Header.js';
import Footer from './Footer.js';

function App(props) {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/search' element={<SearchPage data={props.data} />} >
            {/* doesnt work <Route path='search/bathroom/:bathroomID' element={<BathroomPage />} /> */}
          </Route>
          {/* path is here for now so we can view the page */}
          <Route path='/bathroom' element={<BathroomPage />} />
          <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

