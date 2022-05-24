import React, { useState } from 'react'; //import React Component
import bathroomData from '../data/bathrooms.json'

function BathroomCard(props) {
    let bathroomData = props.bathroomData;

    return (
        <div className="col-md-6 col-xl-4 d-flex justify-content-center">
            <div className="card mb-4">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-sm-auto col-xl-12 ml-auto mr-auto">
                            <img src={bathroomData.src} className="pb-1 br-img" />
                        </div>
                        <div className="col-sm">
                            <h2 className="card-title my-0">{bathroomData.building}</h2>
                            <p className="card-text my-0 floor">{bathroomData.floor}</p>
                            <div className="card-icons mt-2 mb-0 d-flex justify-content-center">
                                <img src="img/Map.png" alt="Map" className="icon map-icon my-auto" />
                                <img src="img/review.png" alt="Leave a review" className="icon review my-auto" />
                                <img src="img/star.png" alt="Star" className="star my-auto" />
                                <p className="rating my-auto">{bathroomData.rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function BathroomList(props) {
    let bathrooms = props.data;
    let bathroomCards = bathrooms.map(bathroomData => {
        return <BathroomCard key={bathroomData.id} bathroomData={bathroomData} />
    })

    return (
        <div className="container">
            <div className="row">
                {bathroomCards}
            </div>
        </div>
    )
}