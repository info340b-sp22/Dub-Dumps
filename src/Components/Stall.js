import React, { useState } from 'react'; //import React Component

export function Stall (props) {

    return (
        <div>
            <a className="nav-category dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Stall Type
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    Private Room
                  </label>
                </div>
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    Individual Stall
                  </label>
                </div>
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    Urinal
                  </label>
                </div>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Clear</a>
              </div>
        </div>
    )
}

export default Stall;