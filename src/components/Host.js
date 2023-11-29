import React from "react";


const Host = ({ name, picture }) => {


    return (
        <div className="host">
            <p className="host_name">{name}</p>
            <img className="host_picture" src={picture} alt={name} />
        </div>
    )
}

export default Host;