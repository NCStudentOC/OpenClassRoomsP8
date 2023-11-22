import React from "react";
import logements from '../logements/logements.json'
import { useParams } from 'react-router-dom'

export default function Host(host) {
    const { id } = useParams()
    const logement = logements.find((logement) => logement.id === id)

    return (
        <div className="host">
            <p className="host_name">{logement.host.name}</p>
            <img className="host_picture" src={logement.host.picture} alt={logement.host.name} />
        </div>
    )
}
