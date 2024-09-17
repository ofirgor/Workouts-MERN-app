import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
    window.location.href = "/"; // Redirect to home page after logout
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Workout Buddy </h2>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Logout</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/signup">Sign up</Link>
              <Link to="/login">Log in</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
