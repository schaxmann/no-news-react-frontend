import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBellSlash } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <FontAwesomeIcon className="fa" icon={faBellSlash} />
        NO NEWS <span>// IS GOOD NEWS</span>
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
