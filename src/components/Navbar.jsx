import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        {" "}
        NONEWS <span>// IS GOOD NEWS</span>
      </div>
      <Link to="/">ALL ARTICLES</Link>
      <Link to="/coding">CODING</Link>
      <Link to="/football">FOOTBALL</Link>
      <Link to="/cooking">COOKING</Link>
      <div className="user">
        <span>LOGGED IN AS</span> GRUMPY19
      </div>
    </nav>
  );
}

export default Navbar;
