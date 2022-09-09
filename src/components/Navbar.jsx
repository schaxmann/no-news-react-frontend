import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import { faUserCircle, faBellSlash } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <FontAwesomeIcon className="fa" icon={faBellSlash} />
        NONEWS <span>// IS GOOD NEWS</span>
      </div>
      <Link to="/">ALL ARTICLES</Link>
      <Link to="/coding">CODING</Link>
      <Link to="/football">FOOTBALL</Link>
      <Link to="/cooking">COOKING</Link>
      <div className="user">
        <span>LOGGED IN AS </span>
        <FontAwesomeIcon className="fa" icon={faUserCircle} />
        GRUMPY19
      </div>
    </nav>
  );
}

export default Navbar;
