import React from 'react'; //import React Component
import { Link } from 'react-router-dom';

export default function Map(props) {
    return (
        <div>
            <Link className="map-link" to="/search">
                <h2 className="map-title">Find a Bathroom!</h2>
            </Link>
            <div className="map">
                <iframe title="DUB DUMPS bathroom map" className="map-image" src="https://snazzymaps.com/embed/398528" width="80%" height="550px"></iframe>
                <p>Use our map to find nearby bathrooms!</p>
            </div>
        </div>
    );
}