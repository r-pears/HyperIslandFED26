import { NavLink } from "react-router";
import "./nav.css";

export function Navbar() {
	return (
		<nav className="nav-bar">
			<h1 className>
				<NavLink to="/">React-Assignments</NavLink>
			</h1>
			<ul>
				<li>
					<NavLink to="/child">Child</NavLink>
				</li>
				<li>
					<NavLink to="/state">State</NavLink>
				</li>
				<li>
					<NavLink to="/effect">Effect</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
