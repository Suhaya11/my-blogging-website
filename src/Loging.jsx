import { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Loging = ({ LoggingFunc }) => {
  let [userName, setUserName] = useState("");
  let [userPassword, setUserPassword] = useState("");

  let [userExist, setUserExist] = useState(true);
  // let { data } = useFetch("http://localhost:3000/users");
  const existed = localStorage.getItem("user");
  const [data ,setData] = useState([]);
  if (existed) {
    console.log("user existed");
    setData(JSON.parse(existed));
  }
  let history = useHistory();
  function logingUser() {
    data?.map((person) => {
      if (person.username == userName && person.password == userPassword) {
        localStorage.setItem("user", person);
        LoggingFunc(person);
        history.push("/");
        setUserExist(true);
      } else {
        setUserExist(false);
      }
    });
  }
  // console.log(userExist);
  // console.log(currentUser);
  // console.log(history);
  return (
    <div className="logingPage">
      <div className="logingForm">
        <form
          className="form"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            logingUser();
          }}
        >
          <input
            type="text"
            id="username"
            placeholder={"username"}
            className="logingInputs"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <input
            type="password"
            id="password"
            placeholder="password"
            className="logingInputs"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <br />
          {!userExist && (
            <span
              style={{
                color: "red",
                size: "1.2em",
              }}
            >
              Wrong Username or Password
            </span>
          )}
          <br />
          <input type="checkbox" id="checkBox" />

          <label htmlFor="checkBox" className="rememberMe">
            {" "}
            Remember me
          </label>
          <button type="submit" onClick={() => logingUser()} className="button">
            {" Log in"}
          </button>
        </form>
      </div>
      <p>
        Don't have an account ? <Link to="signup">Sign up here </Link>
      </p>
    </div>
  );
};

export default Loging;
