import React from 'react'; //import React Component
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="page-header">
            <div className="header-flex px-1 py-1">
                <img src="img/logo.png" alt="Dub Dumps logo" className="logo my-2" />
                <Link to="/home" className='homeLink'>
                    <h1 className="dub-dumps my-2">DUB DUMPS</h1>
                </Link>
            </div>
            {/* <img src="img/bathroom-symbol.png" alt="bathroom symbol" className="br-symbol" /> */}
            {/* <div className="flex-container form">
            need to have a way to link from home page to search page since we are removing nav
            <input type="text" placeholder="SEARCH" className="searchbar" />
            </div> */}
        </header>
    )
}