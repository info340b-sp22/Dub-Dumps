import React, { useState } from 'react'; //import React Component

export function Floor (props) {

    return (
        <div>
            <a class="nav-category dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
                Floor
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div class="drop-item">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                  <label class="form-check-label" for="dropdownCheck">
                    Basement
                  </label>
                </div>
                <div class="drop-item">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                  <label class="form-check-label" for="dropdownCheck">
                    First Floor
                  </label>
                </div>
                <div class="drop-item">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                  <label class="form-check-label" for="dropdownCheck">
                    Second Floor
                  </label>
                </div>
                <div class="drop-item">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                  <label class="form-check-label" for="dropdownCheck">
                    Third or Higher
                  </label>
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Clear</a>
              </div>
        </div>
    )
}

export default Floor;