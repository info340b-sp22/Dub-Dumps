import React, { useState } from 'react'; //import React Component

export function StructuredSearch(props) {
    const [bldgSelected, setBldg] = useState('');
    const [floorSelected, setFloor] = useState('');
    const [ratingSelected, setRating] = useState('');

    const changeBldg = evt => {
        setBldg(evt.target.value);
    }

    const changeFloor = evt => {
        setFloor(evt.target.value);
    }

    const changeRating = evt => {
        setRating(evt.target.value);
    }

    const handleClick = evt => {
        props.filterCallback(bldgSelected, floorSelected, ratingSelected);
    }

    // Array of buildings
    let uniqueBuildings = new Set();
    for (let i = 0; i < props.bathrooms.length; i++) {
        uniqueBuildings.add(props.bathrooms[i].building)
    }
    uniqueBuildings = Array.from(uniqueBuildings);
    const buildings = uniqueBuildings.map((building) => {
        return <option key={building} value={building}>{building}</option>
    })

    // Array of floors
    let uniqueFloors = new Set();
    for (let i = 0; i < props.bathrooms.length; i++) {
        uniqueFloors.add(props.bathrooms[i].floor)
    }
    uniqueFloors = Array.from(uniqueFloors);

    const floors = uniqueFloors.map((floor) => {
        return <option key={floor} value={floor}>{floor}</option>
    })

    // Array of ratings, subject to change if we do thumbs up/down
    let ratings = [5, 4, 3, 2, 1]

    ratings = ratings.map((rating) => {
        if (rating === 5) {
            return <option key={rating} value={rating}>{rating} stars</option>
        }
        return <option key={rating} value={rating}>{rating}+ stars</option>
    })


    return (
        <li className="nav-item dropdown d-flex">
            <select id="buildingSelect" className="nav-category dropdown-toggle form-select" onChange={changeBldg} >
                <option value="">Building</option>
                {buildings}
            </select>
            <select id="buildingSelect" className="nav-category dropdown-toggle form-select" onChange={changeFloor} >
                <option value="">Floor</option>
                {floors}
            </select>
            <select id="buildingSelect" className="nav-category dropdown-toggle form-select" onChange={changeRating} >
                <option value="">Rating</option>
                {ratings}
            </select>
            <div className="col-auto">
                <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Apply Filter</button>
            </div>
        </li>
    )
}

export default StructuredSearch;