

import { Link } from 'react-router-dom'

export default function Card({ title, cover, id }) {

    return (
        <Link to={`/Description/${id}`} className="gallery_card">

            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>

    );
}
