import React from 'react'; //import React Component
import { useParams } from 'react-router-dom';

import _ from 'lodash';

export default function BathroomPage(props) {
    const bathroomID = useParams().bathroomID
    console.log(bathroomID)
    let bathroom = _.find(props.data, { id: 13 });
    console.log(props.data)

    if (!bathroom) return <h2>No bathroom specified</h2>

    return (
        <div>
            <h2 className="bathroom-header">{bathroom.building} - {bathroom.floor}</h2>
            <img src={bathroom.src} alt="A picture of a bathroom" />
            <p>If possible, we should have the bathroom's location on the map appear here</p>
            <h2 className="bathroom-header">Rating: {bathroom.rating}/5 stars</h2>
        </div>
    )
}