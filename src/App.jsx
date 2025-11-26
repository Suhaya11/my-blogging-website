import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Footer from "./footer";
import Loging from "./Loging";
import SignUp from "./SignUp";
import Blogs from "./Blogs";
import { NavLinks } from "./navLinks";
import { useState } from "react";
import NewBlog from "./NewBlog";
import Contact from "./Contact";
import About from "./About";
import BlogDetails from "./BlogDetails";
import MyBlogs from "./MyBlogs";

function App() {
  console.log(localStorage.getItem("user"));
  console.log(localStorage);

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("user"));
  const LoggingFunc = (current) => {
    setLoggedIn(setLoggedIn ? false : true);
    currentUser ? setCurrentUser(null) : setCurrentUser(current);

    // console.log(loggedIn ? "loggeded in " : null);
  };
  return (
    <div className="appComponent">
      <Router>
        <div>
          <NavBar loggedIn={currentUser} LoggingFunc={LoggingFunc} />
          <NavLinks loggedIn={currentUser} LoggingFunc={LoggingFunc} />
          <div
            style={{
              height: "100px",
            }}
          ></div>
        </div>
        <div className="pageContent">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/loging">
              {" "}
              <Loging LoggingFunc={LoggingFunc} />
            </Route>
            <Route exact path="/signup">
              {" "}
              <SignUp LoggingFunc={LoggingFunc} loggedIn={loggedIn} />
            </Route>
            <Route exact path="/newblog">
              {" "}
              <NewBlog currentUser={currentUser} />{" "}
            </Route>
            <Route exact path="/blogs">
              {" "}
              <Blogs />
            </Route>
            <Route exact path="/contact">
              {" "}
              <Contact />{" "}
            </Route>
            <Route exact path="/about">
              {" "}
              <About />{" "}
            </Route>
            <Route exact path="/my-blogs">
              {" "}
              <MyBlogs currentUser={currentUser} />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
