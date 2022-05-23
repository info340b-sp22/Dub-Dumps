import React, { useState } from 'react'; //import React Component

export function Rating (props) {

    return (
        <div>
            <a class="nav-category dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Rating
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div class="drop-item">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                  <label class="form-check-label" for="dropdownCheck">
                    1 Star
                  </label>
                </div>
                <div class="drop-item">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                  <label class="form-check-label" for="dropdownCheck">
                    2 Star
                  </label>
                </div>
                <div class="drop-item">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                  <label class="form-check-label" for="dropdownCheck">
                    3 Star
                  </label>
                </div>
                <div class="drop-item">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                  <label class="form-check-label" for="dropdownCheck">
                    4 Star
                  </label>
                </div>
                <div class="drop-item">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                  <label class="form-check-label" for="dropdownCheck">
                    5 Star
                  </label>
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Clear</a>
              </div>
        </div>
    )
}

export default Rating;