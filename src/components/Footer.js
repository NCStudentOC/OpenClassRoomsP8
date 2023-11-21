import logoFooter from '../assets/logo_footer.png'

export default function Footer() {
	return (
		<footer className='footer'>
			<img src={logoFooter} alt="Kasa - agence de location d'appartement" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}
