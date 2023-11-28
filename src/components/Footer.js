import logoFooter from '../assets/logo_footer.png'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer className='footer'>
			<Link to="/"><img src={logoFooter} alt="Kasa - agence de location d'appartement" /></Link>
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}
