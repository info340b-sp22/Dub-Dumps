import React, { useState } from 'react'; //import React Component
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getDatabase, ref, set as FirebaseSet } from 'firebase/database';
import BathroomPage from './BathroomPage.js'
import HomePage from './HomePage.js';
import Header from './Header.js';
import Footer from './Footer.js';
import BathroomList from './BathroomList.js';
import StructuredSearch from './StructuredSearch.js';

function App(props) {
  const db = getDatabase();

  const [displayedData, setData] = useState(props.data);

  function applyFilter(bldgName, floorName, ratingNum, locationSelected) {
    let fullData = props.data;
    let bldgCards = fullData
    if (bldgName !== '') {
      bldgCards = bldgCards.filter(card => (card.building === bldgName))
    }
    if (floorName !== '') {
      bldgCards = bldgCards.filter(card => (card.floor === floorName))
    }
    if (ratingNum !== '') {
      bldgCards = bldgCards.filter(card => (card.rating >= ratingNum))
    }
    if (locationSelected !== '') {
      bldgCards = bldgCards.filter(card => (card.location === locationSelected))
    }
    setData(bldgCards);
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='home' element={<HomePage />} />
          <Route path='search' element={<StructuredSearch data={props.data} filterCallback={applyFilter} />} >
            <Route path='/search/br:bathroomID' element={<BathroomPage data={props.data} />} />
            <Route index element={<BathroomList data={displayedData} />} />
          </Route>
          <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

