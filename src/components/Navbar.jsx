import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBellSlash } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/" className="home">
          <FontAwesomeIcon className="fa" icon={faBellSlash} />
          NO NEWS
        </Link>{" "}
        <span>// IS GOOD NEWS</span>
      </div>
      <Link to="/" className="navLink">
        ALL ARTICLES
      </Link>
      <Link to="/coding" className="navLink">
        CODING
      </Link>
      <Link to="/football" className="navLink">
        FOOTBALL
      </Link>
      <Link to="/cooking" className="navLink">
        COOKING
      </Link>
      <div className="user">
        <span>LOGGED IN AS </span>
        <Link to="/user/grumpy19" className="home">
          <FontAwesomeIcon className="fa" icon={faUserCircle} />
          GRUMPY19
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
