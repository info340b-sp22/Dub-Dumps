import React, { useState } from 'react'; //import React Component
import Map from './Map.js';
import Header from './Header.js';

export default function HomePage(props) {
    return(
        <>
        <Header />
        <div className="flex-container form">
            <input type="text" placeholder="SEARCH" className="searchbar" />
        </div>
        <Map />
        </>
    )
}