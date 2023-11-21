

import { NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav>
            <ul className="ul_links">
                <li>
                    <NavLink to={'/'} className="nav_link">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to={'/About'} className="nav_link">A propos</NavLink>
                </li>
            </ul>
        </nav>
    )
}
