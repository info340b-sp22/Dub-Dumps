import React from 'react'; //import React Component
import { useParams } from 'react-router-dom';

import _ from 'lodash';

export default function BathroomPage(props) {

    const bathroomID = useParams().bathroomID;
    console.log(bathroomID);
    console.log(typeof bathroomID);
    let bathroom = props.data[parseInt(bathroomID) - 1];
    console.log(bathroom);

    console.log(props.data);

    if (!bathroom) return <h2>No bathroom specified</h2>

    return (
        <div>
            <h2 className="bathroom-header">{bathroom.building} - {bathroom.floor}</h2>
            <img src={"/" + bathroom.src} alt={"Bathroom in " + bathroom.building + " on the " + bathroom.floor} className="bathroomPic" />
            {/* <p>If possible, we should have the bathroom's location on the map appear here</p> */}
            <hr className="line-seperator" />
            <h2 className="bathroom-header">Reviews</h2>
            <form className="review" >
                <div className="form-group">
                    <label htmlFor="review-input">Leave a review!
                        <textarea id="review-input" name="review-input" className="form-control" />
                        <button type="submit" className="btn btn-warning">Submit</button>
                    </label>
                </div>
            </form>
        </div >
    )
}