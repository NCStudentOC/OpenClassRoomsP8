import Logo from "../assets/logo.png";
import Navbar from "./Navbar";
export default function Header() {

	return (
		<header className='header'>

			<img src={Logo} alt="kasa, location d'appartements" />

			<Navbar />
		</header>
	)
}
