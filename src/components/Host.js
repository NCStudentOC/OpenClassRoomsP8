import React from "react";
import logements from '../logements/logements.json'
import { useParams } from 'react-router-dom'

export default function Host(host) {


    return (
        <div className="host">
            <p className="host_name">{host.name}</p>
            <img className="host_picture" src={host.picture} alt={host.name} />
        </div>
    )
}
