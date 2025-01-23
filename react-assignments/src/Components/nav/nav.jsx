import { NavLink } from "react-router-dom";

function Nav () {
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/effects">Heart and Thrones</NavLink>
            </li>
            <li>
                <NavLink to="/state">States component</NavLink>
            </li>
            <li>
                <NavLink to="/person">Welcome</NavLink>
            </li>
        </ul>
    )
}

export default Nav