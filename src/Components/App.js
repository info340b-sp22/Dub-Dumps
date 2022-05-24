import React, { useState } from 'react'; //import React Component
import Map from './Map.js';
import SearchPage from './SearchPage.js';
import Footer from './Footer.js';

function App(props) {

  return (
    <div>
    <SearchPage />
    <Map />
    <Footer />
    </div>
  );
}

export default App;

