import React, { useState } from 'react'; //import React Component
import BathroomList from './BathroomList.js'
import Building from './Building.js'
import Floor from './Floor.js'
import Stall from './Stall.js'
import Rating from './Rating.js'

function App(props) {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light mb-2">
        <img class="nav-logo" src="./img/logo.png" width="50px" height="50px" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <Building />
            </li>
            <li class="nav-item dropdown">
              <Floor />
            </li>
            <li class="nav-item dropdown">
              <Stall />
            </li>
            <li class="nav-item dropdown">
              <Rating />
            </li>

          </ul>
          <form class="form-inline my-2 my-lg-0 search-button">
            <input class="" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <BathroomList />
    </div>
  );
}

export default App;

