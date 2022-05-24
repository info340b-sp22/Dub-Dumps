import React, { useState } from 'react'; //import React Component
import Map from './Map.js';
import SearchPage from './SearchPage.js';

function App(props) {

  return (
    <div>
    <SearchPage />
    <Map />
    </div>
  );
}

export default App;

