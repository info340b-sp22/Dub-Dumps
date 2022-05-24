import React, { useState } from 'react'; //import React Component

export function Building (props) {

    let sortByBuilding = [];

    const handleClick = value => {
        if(!sortByBuilding.includes(value)){
          sortByBuilding.push(value);
        } else {
          sortByBuilding.filter(value);
        }
        console.log(sortByBuilding);
    }

    return (
        <div>
            <a className="nav-category dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
                Building
            </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div className="drop-item">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck" onClick={handleClick('MGH')}/>
                    <label className="form-check-label" htmlFor="dropdownCheck">
                        MGH
                    </label>
                    </div>
                    <div className="drop-item">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck" onClick={handleClick('GWN')}/>
                    <label className="form-check-label" htmlFor="dropdownCheck">
                        GWN
                    </label>
                    </div>
                    <div className="drop-item">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck" onClick={handleClick('KNE')}/>
                    <label className="form-check-label" htmlFor="dropdownCheck">
                        KNE
                    </label>
                    </div>
                    <div className="drop-item">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck" onClick={handleClick('ODE')}/>
                    <label className="form-check-label" htmlFor="dropdownCheck">
                        ODE
                    </label>
                    </div>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Clear</a>
                </div>
            </div>
    )
}

export default Building;