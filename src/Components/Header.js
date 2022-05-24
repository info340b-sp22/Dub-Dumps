import React, { useState } from 'react'; //import React Component
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className="page-header">
            <header className="flex-container header">
                <div className="flex-container logo-header">
                    <img src="img/logo.png" alt="Dub Dumps logo" className="logo" />
                    <Link to="/home" activeStyle className='homeLink'>
                    <h1 className="dub-dumps">DUB DUMPS</h1>
                    </Link>
                </div>
                <div className="flex-container form">
            <input type="text" placeholder="SEARCH" className="searchbar" />
            </div>
            </header>
            <Link to="/search" activeStyle>
            <h2 className="map-title"><a className="map-title" href="advanced search.html">Find A Bathroom</a></h2>
            </Link>
        </div>
    )
}