import React, { useState } from 'react'; //import React Component

export function Rating (props) {

    return (
        <div>
            <a className="nav-category dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Rating
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    1 Star
                  </label>
                </div>
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    2 Star
                  </label>
                </div>
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    3 Star
                  </label>
                </div>
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    4 Star
                  </label>
                </div>
                <div className="drop-item">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    5 Star
                  </label>
                </div>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Clear</a>
              </div>
        </div>
    )
}

export default Rating;