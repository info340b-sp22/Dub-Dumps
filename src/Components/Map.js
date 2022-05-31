import React, { useState } from 'react'; //import React Component
import { Link } from 'react-router-dom';

export default function Map(props) {
    return (
        <div>
            <Link to="/search" activeStyle>
                <h2 className="map-title">Find A Bathroom</h2>
            </Link>
            <div className="map">
                <img className="map-image" src="img/tempmap.png" alt="map" />
                <p>Click a bathroom marked on campus to see its rating, characteristics, and distance from you!</p>
            </div>
        </div>
    );
}