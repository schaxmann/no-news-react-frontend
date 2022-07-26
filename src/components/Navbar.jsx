import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Articles</Link>
      <Link to="/coding">Coding</Link>
      <Link to="/football">Football</Link>
      <Link to="/cooking">Cooking</Link>
    </nav>
  );
}

export default Navbar;
