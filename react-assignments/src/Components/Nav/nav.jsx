import { NavLink } from "react-router";

export function Navbar() {
	return (
        <nav>
		<ul>
			<li>
                <NavLink to="/state">State</NavLink>
            </li>
			<li>
                <NavLink to="/effect">Effect</NavLink>
            </li>
			<li>
                <NavLink to="/child">Child</NavLink>
            </li>
			<li>

            </li>
		</ul>
        </nav>
	);
}

export default Navbar;
