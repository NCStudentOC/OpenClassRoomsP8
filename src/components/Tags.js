import React from "react";
// import logements from '../logements/logements.json'
// import { useParams } from 'react-router-dom'

const Tags = ({ tags }) => {


    return (
        <div className="Position_tags">
            {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
        </div>
    )
}

export default Tags;