import Blogs from "./Blogs";

const Home = () => {
  return (
    <>
      <div className="HomePage">
        <h2 className="welcomeMsg">
          {" "}
          welecome to SUHAYA daily update blogging page.
        </h2>
        <Blogs></Blogs>
      </div>
    </>
  );
};

export default Home;
