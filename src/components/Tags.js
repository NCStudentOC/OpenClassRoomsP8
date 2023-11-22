import React from "react";
import logements from '../logements/logements.json'
import { useParams } from 'react-router-dom'

export default function Tags(Tags) {
    Tags = [];
    const { id } = useParams()
    const logement = logements.find((logement) => logement.id === id)
    // Faire comme pour gallery en map les tags un par un
    return (
        <div className="Position_tags">
            {Tags.map((tag, index) => (
                <span key={index} className="tag">{logement.tags}</span>
            ))}
        </div>
    )
}