import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { NavLinks } from "./navLinks";

const NavBar = ({ loggedIn, LoggingFunc }) => {
  return (
    <div className="navBar">
      <h2> SHY Blogs</h2>

      <nav className="navBarLinks">
        <Link to="/" className={"navLink homeLink"}>
          Home
        </Link>

        <Link
          to={loggedIn ? "/my-blogs" : "loging"}
          className="navLink myBlogLink"
        >
          My blogs
        </Link>
        <Link
          to={loggedIn ? "newblog" : "loging"}
          className={"navLink newBlogLink"}
        >
          New blog
        </Link>
        <Link to="/contact" className={"navLink contactLink"}>
          Contact
        </Link>
        <Link to="/about" className={"navLink aboutLink"}>
          About
        </Link>
        <Link className={"navLink login/out"} to={loggedIn ? "/" : "/loging"}>
          <span
            style={{ marginRight: "20px", display: "inline" }}
            onClick={() => {
              if (loggedIn && confirm("do you really want sign out")) {
                localStorage.removeItem("user");
                LoggingFunc(null);
              }
            }}
          >
            {" "}
            {loggedIn ? "Log out" : "Sign in"}
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
