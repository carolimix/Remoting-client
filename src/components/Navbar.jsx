import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Logo from "../remoting-logo.png";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="p-3 bg-amber-50 opacity-50 font-extrabold flex items-center">
      <Link to="/">
        <img src={Logo} className="w-20 h-fit" alt="logo" />
      </Link>

      <Link to="/about">
        <button className="pl-0.5 mx-2">About</button>
      </Link>

      <Link to="/spaces">
        <button className="mx-2">Working Spaces</button>
      </Link>

      {isLoggedIn && (
        <>
          <button className="mx-2" onClick={logOutUser}>
            Logout
          </button>

          <Link to="/profile">
            <button className="mx-2">Profile</button>
          </Link>

          <span>
            Hi <b>{user && user.name}!</b>{" "}
          </span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button className="mx-2">Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button className="mx-2">Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
