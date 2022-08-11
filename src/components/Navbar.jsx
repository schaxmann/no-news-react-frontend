import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">ALL ARTICLES</Link>
      <Link to="/coding">CODING</Link>
      <Link to="/football">FOOTBALL</Link>
      <Link to="/cooking">COOKING</Link>
    </nav>
  );
}

export default Navbar;
