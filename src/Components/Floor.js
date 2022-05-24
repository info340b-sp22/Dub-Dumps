import React, { useState } from 'react'; //import React Component

export function Floor (props) {

    return (
        <div>
            <a className="nav-category dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
                Floor
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    Basement
                  </label>
                </div>
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    First Floor
                  </label>
                </div>
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    Second Floor
                  </label>
                </div>
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    Third or Higher
                  </label>
                </div>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Clear</a>
              </div>
        </div>
    )
}

export default Floor;