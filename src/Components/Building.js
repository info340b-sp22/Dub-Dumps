import React, { useState } from 'react'; //import React Component

export function Building(props) {
    const [bldgSelected, setBldg] = useState('');

    const changeBldg = evt => {
        setBldg(evt.target.value);
    }

    const handleClick = evt => {
        props.filterCallback(bldgSelected);
    }

    const buildings = props.buildings.map((building) => {
        return <option key={building} value={building}>{building}</option>
    })

    return (
        <li className="nav-item dropdown d-flex">
            <select id="buildingSelect" className="nav-category dropdown-toggle form-select" onChange={changeBldg} >
                <option value="">Building</option>
                {buildings}
            </select>
            <div className="col-auto">
                <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Apply Filter</button>
            </div>
            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <select id="buildingSelect" className="nav-category dropdown-toggle mr-5 form-select" >
                    <option value="">Show all teams</option>
                    {buildings}
                </select>
            </div> */}
        </li>
    )
}

export default Building;