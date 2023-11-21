import React from "react";


export default function Tags(tags) {

    // Faire comme pour gallery en map les tags un par un
    return (
        <div className="Position_tags">
            {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
        </div>
    )
}