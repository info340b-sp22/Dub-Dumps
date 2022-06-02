import React from 'react'; //import React Component
import { useParams } from 'react-router-dom';

import _ from 'lodash';

export default function BathroomPage(props) {
    // const bathroomID = useParams().bathroomID
    // let bathroom = _.find(props.data, { id: bathroomID });

    // if (!bathroom) return <h2>No bathroom specified</h2>

    return (
        <div>
            <h2 className="bathroom-header">Will be: bathroom.building - bathroom.floor</h2>
            <p>This will be the image of the bathroom</p>
            <p>If possible, we will have the bathroom's location on the map.</p>
            <h2 className="bathroom-header">Rating</h2>
        </div>
    )
}