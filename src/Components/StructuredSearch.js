import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'; //import React Component
import { Link, Outlet } from 'react-router-dom';

export function StructuredSearch(props) {
    const [bldgSelected, setBldg] = useState('');
    const [floorSelected, setFloor] = useState('');
    const [locationSelected, setLocation] = useState('');

    const changeBldg = evt => {
        setBldg(evt.target.value);
    }

    const changeFloor = evt => {
        setFloor(evt.target.value);
    }

    const changeLocation = evt => {
        setLocation(evt.target.value);
    }

    const handleClick = evt => {
        props.filterCallback(bldgSelected, floorSelected, locationSelected);
    }

    // Array of buildings
    let uniqueBuildings = new Set();
    for (let i = 0; i < props.data.length; i++) {
        uniqueBuildings.add(props.data[i].building)
    }
    uniqueBuildings = Array.from(uniqueBuildings);
    const buildings = uniqueBuildings.map((building) => {
        return <option key={building} value={building}>{building}</option>
    })

    // Array of floors
    let uniqueFloors = new Set();
    for (let i = 0; i < props.data.length; i++) {
        uniqueFloors.add(props.data[i].floor)
    }
    uniqueFloors = Array.from(uniqueFloors);

    const floors = uniqueFloors.map((floor) => {
        return <option key={floor} value={floor}>{floor}</option>
    })

    // Array of Locations
    let uniqueLocations = new Set();
    for (let i = 0; i < props.data.length; i++) {
        uniqueLocations.add(props.data[i].location)
    }
    uniqueLocations = Array.from(uniqueLocations);

    const locations = uniqueLocations.map((location) => {
        return <option key={location} value={location}>{location}</option>
    })


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light mb-4">
                {/* should we leave the logo out? also we still need to implement the hamburger menu functionality for mobile screens*/}
                {/* <img className="nav-logo" src="./img/logo.png" width="50px" height="50px" /> */}
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown"></li>
                        <li className="nav-item dropdown d-flex">
                            <select id="buildingSelect" className="nav-category dropdown-toggle form-select select-dropdown" onChange={changeBldg} >
                                <option value="">Building</option>
                                {buildings}
                            </select>
                            <select id="floorSelect" className="nav-category dropdown-toggle form-select" onChange={changeFloor} >
                                <option value="">Floor</option>
                                {floors}
                            </select>
                            <select id="locationSelect" className="nav-category dropdown-toggle form-select" onChange={changeLocation} >
                                <option value="">Location</option>
                                {locations}
                            </select>
                            <div className="col-auto">
                                <Link to="/search" id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Search!</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav >
            <Outlet />
        </div >
    )
}

export default StructuredSearch;