import React, { useState } from 'react'; //import React Component

export default function Map(props) {
    return (
        <div>
            <h2 className="map-title"><a className="map-title" href="advanced search.html">Find A Bathroom</a></h2>
            <div className="flex-container map">
                <img className="map-image" src="img/tempmap.png" alt="map" />
                <p>Click a bathroom marked on campus to see its rating, characteristics, and distance from you!</p>
            </div>
        </div>
    );
}