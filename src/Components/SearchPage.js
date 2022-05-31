import React, { useState } from 'react'; //import React Component
import BathroomList from './BathroomList.js'
import StructuredSearch from './StructuredSearch.js'
// import Floor from './Floor.js'
// import Stall from './Stall.js'
// import Rating from './Rating.js'

export default function SearchPage(props) {
    const [displayedData, setData] = useState(props.data);


    function applyFilter(bldgName, floorName, ratingNum, locationSelected) {
        let fullData = props.data;
        let bldgCards = fullData
        if(bldgName != ''){
            bldgCards = bldgCards.filter(card => (card.building === bldgName))
        }
        if(floorName != ''){
            bldgCards = bldgCards.filter(card => (card.floor === floorName))
        }
        if(ratingNum != ''){
            bldgCards = bldgCards.filter(card => (card.rating === ratingNum))
        }
        if(locationSelected != ''){
            bldgCards = bldgCards.filter(card => (card.location === locationSelected))
        }
        setData(bldgCards);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light mb-2">
                <img className="nav-logo" src="./img/logo.png" width="50px" height="50px" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <StructuredSearch bathrooms={props.data} filterCallback={applyFilter} />
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0 search-button">
                        <input className="" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
            <BathroomList data={displayedData} />
        </div>
    )
}