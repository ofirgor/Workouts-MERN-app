import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Workout Buddy </h2>
        </Link>
        <nav>
          <Link to="/signup">Sign up</Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;