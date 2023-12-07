import React from "react";

import redStar from '../assets/red_star.png'
import greyStar from '../assets/grey_star.png'

// import { useParams } from 'react-router-dom'
// import logements from '../logements/logements.json'


const Stars = ({ rating }) => {

    console.log(rating)
    return (
        <div className="host_stars">
            {[...Array(5)].map((star, index) => {
                const starValue = index + 1

                return (
                    <img
                        key={index}
                        src={starValue <= rating ? redStar : greyStar}
                        alt="star"
                    />
                )
            })}
        </div>

    )
}
export default Stars;