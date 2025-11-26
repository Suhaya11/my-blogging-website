import { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const SignUp = (props) => {
  let history = useHistory();
  let [fullname, setFullname] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let [isAggre, setIsAggree] = useState(false);
  let dbLink = "https://suhayadb-a550.restdb.io/rest/myusers  ";
  let { data } = useFetch(dbLink);
  let [userExisted, setUserExisted] = useState(
    data?.some((user) => user.username === username)
  );
  let signUpDate = Date();
  let user = { fullname, userEmail, username, password, signUpDate };
  let addUser = () => {
    fetch(dbLink, {
      method: "POST",
      headers: {
        userAdded: "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  let verifyAddUser = function () {
    if (userExisted) {
      console.log("user Existed");
      setUsername("");
    } else {
      console.log("user added by some method");
      props.LoggingFunc(user);
      localStorage.setItem("user", user);
      console.log(user);
      setUserExisted(false);

      addUser();
      history.push("/");
    }

    // setTimeout(() => {
    //   if (
    //     !data.find((a) => {
    //       a.userEmail == userEmail;
    //     })
    //   ) {
    //     console.log(data.find((a) => a.username == username));
    //     console.log(data);
    //     console.log("user Added");
    //     addUser();
    //   } else {
    //     history.go("/");
    //     setUserExisted(true);
    //   }
    // }, 1000);
  };

  return (
    <div className="signUpPage">
      <div className="logingForm">
        <form className="form" action="" onSubmit={(a) => a.preventDefault()}>
          <input
            type="text"
            id="fullname"
            placeholder="Full name"
            className="logingInputs"
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email address"
            className={
              userExisted ? "logingInputs existed" : "notexisted logingInputs"
            }
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="text"
            id="username"
            placeholder={!userExisted ? "username" : "username unavailable"}
            className={
              !userExisted ? "logingInputs" : "logingInputs usernameExised"
            }
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="logingInputs"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <input
            type="checkbox"
            id="signUpAggrement"
            onChange={() => {
              isAggre ? setIsAggree(false) : setIsAggree(true);
            }}
          />
          <label htmlFor="signUpAggrement" className="aggrement">
            I read and agree with terms of service and privacy policy
          </label>
          <br />
          {/* <input type="submit" value={"Sign Up"} className="button" /> */}
          {isAggre ? (
            <input
              type="submit"
              value={"Sign Up"}
              onClick={verifyAddUser}
              className="button"
            />
          ) : (
            <input
              type="submit"
              value={"Sign Up"}
              className="button"
              disabled
            />
          )}
        </form>
      </div>
      <p>
        Have an account ? <Link to="/loging">Sign In here </Link>
      </p>
    </div>
  );
};

export default SignUp;
