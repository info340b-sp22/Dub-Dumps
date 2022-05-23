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
            <a class="nav-category dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
                Building
            </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div class="drop-item">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck" onClick={handleClick('MGH')}/>
                    <label class="form-check-label" for="dropdownCheck">
                        MGH
                    </label>
                    </div>
                    <div class="drop-item">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck" onClick={handleClick('GWN')}/>
                    <label class="form-check-label" for="dropdownCheck">
                        GWN
                    </label>
                    </div>
                    <div class="drop-item">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck" onClick={handleClick('KNE')}/>
                    <label class="form-check-label" for="dropdownCheck">
                        KNE
                    </label>
                    </div>
                    <div class="drop-item">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck" onClick={handleClick('ODE')}/>
                    <label class="form-check-label" for="dropdownCheck">
                        ODE
                    </label>
                    </div>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Clear</a>
                </div>
            </div>
    )
}

export default Building;