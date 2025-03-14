import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function NavBar() {
	return (
		<div className="navbar">
			<div className="navbar-brand">
				<Link to="/">Movie Search Engine</Link>
			</div>

			<div className="navbar-links">
				<Link
					to="/"
					className="nav-link"
				>
					Home
				</Link>
				<Link
					to="/favorites"
					className="nav-link"
				>
					Favorites
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
