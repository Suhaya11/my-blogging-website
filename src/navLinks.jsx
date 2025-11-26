import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

export const NavLinks = ({ loggedIn, LoggingFunc }) => {
  let [open, setOpen] = useState(true);

  let pageContent = document.querySelector(".pageContent");
  let closeMenu = () => {
    pageContent?.addEventListener("click", () => {
      !open && setOpen(true);
    });
    pageContent?.addEventListener("change", () => setOpen(true));
  };
  closeMenu();

  // useEffect(() => {
  //   closeMenuBySwitch ? setOpen(true) : setOpen(true);
  // }, [pageContent?.innerHTML]);

  return (
    <div>
      {open ? (
        <h1
          onClick={() => {
            setOpen(false);

            // console.log(document.querySelector(".pageContent"));
          }}
          className="menu"
        >
          ≣
        </h1>
      ) : (
        <nav
          style={{
            transition: "1s",
          }}
          className="navLinks"
        >
          <div
            style={{
              textAlign: "right",
            }}
          >
            <p onClick={() => setOpen(true)} className="closeMenu">
              &times;
            </p>
          </div>
          <Link
            onClick={() => setOpen(true)}
            to="/"
            className={"navLink homeLink"}
          >
            Home
          </Link>

          <Link
            to={loggedIn ? "/newblog" : "/loging"}
            onClick={() => setOpen(true)}
            className={"navLink newBlogLink"}
          >
            New blog
          </Link>
          <Link
            to={loggedIn ? "/my-blogs" : "/loging"}
            onClick={() => setOpen(true)}
            className="navLink myBlogsLink"
          >
            My blogs
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(true)}
            className={"navLink contactLink"}
          >
            Contact
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(true)}
            className={"navLink aboutLink"}
          >
            About
          </Link>

          <Link
            to={loggedIn ? "/" : "/loging"}
            className={"navLink aboutLink"}
            onClick={() => {
              setOpen(true);
              loggedIn &&
                confirm("do you really want sign out") &&
                LoggingFunc(null) &&
                localStorage.removeItem("user");
            }}
          >
            {loggedIn ? " Log out" : "Sign in"}
          </Link>
        </nav>
      )}

      <div></div>
    </div>
  );
};
