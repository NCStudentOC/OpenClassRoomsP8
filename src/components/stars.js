import React from "react";
import logements from '../logements/logements.json'
import redStar from '../assets/red_star.png'
import greyStar from '../assets/grey_star.png'

export default function Stars() {
    return (<div className="host_stars">
        {[...Array(5)].map((star, index) => {
            const ratingValue = index
            return (
                <img
                    key={index}
                    src={ratingValue <= logement.rating ? redStar : greyStar}
                    alt="star"
                />
            )
        })}
    </div>
    )
}