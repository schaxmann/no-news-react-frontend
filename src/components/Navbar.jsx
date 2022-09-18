import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBellSlash } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/" className="home">
          <FontAwesomeIcon className="fa" icon={faBellSlash} />
          <span className="noNews">NO NEWS</span>
        </Link>{" "}
        <span className="tagline">// IS GOOD NEWS</span>
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
      <div className="dropdown">
        <button class="dropbtn">
          MENU <span className="arrowDown"></span>
        </button>
        <div class="dropdown-content">
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
        </div>
      </div>
      <div className="user">
        <span className="loggedIn">LOGGED IN AS </span>
        <Link to="/user/grumpy19" className="home">
          <FontAwesomeIcon className="fa" icon={faUserCircle} />
          <span className="username">GRUMPY19</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
