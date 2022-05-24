import React, { useState } from 'react'; //import React Component
import Map from './Map.js';

export default function HomePage(props) {
    return(
        <>
        <header className="flex-container header">
        <div className="flex-container logo-header">
            <img src="img/logo.png" alt="Dub Dumps logo" className="logo" />
            <h1 className="dub-dumps">DUB DUMPS</h1>
        </div>
        <div className="flex-container form">
            <input type="text" placeholder="SEARCH" className="searchbar" />
        </div>
        </header>
        <Map />
        </>
    )
}