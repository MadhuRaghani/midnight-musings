import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex-row background-primary-color">
      <Link className="link app-name" to="/">
        Midnight Musings
      </Link>
    </nav>
  );
}

export default Navbar;
