import React, { useState } from 'react'; //import React Component
import BathroomList from './BathroomList.js'
import Building from './Building.js'
// import Floor from './Floor.js'
// import Stall from './Stall.js'
// import Rating from './Rating.js'

export default function SearchPage(props) {
    // console.log(props.data)
    const [displayedData, setData] = useState(props.data);

    function applyFilter(bldgName) {
        let fullData = props.data;
        if (bldgName === '') {
            setData(fullData);
        } else {
            let bldgCards = fullData.filter(bldg => bldg.building === bldgName)
            setData(bldgCards);
        }
    }

    let uniqueBuildings = new Set();
    for (let i = 0; i < props.data.length; i++) {
        uniqueBuildings.add(props.data[i].building)
    }
    console.log(uniqueBuildings)
    uniqueBuildings = Array.from(uniqueBuildings);
    console.log(uniqueBuildings)

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
                            <Building buildings={uniqueBuildings} filterCallback={applyFilter} />
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Floor />
                        </li>
                        <li className="nav-item dropdown">
                            <Stall />
                        </li>
                        <li className="nav-item dropdown">
                            <Rating />
                        </li> */}

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