import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex-row background-primary-color">
      <Link className="link app-name" to="/">
        Midnight Musings
      </Link>
      <NavLink to="/mockman" className="button-primary">
        Mockman
      </NavLink>
    </nav>
  );
}

export default Navbar;
