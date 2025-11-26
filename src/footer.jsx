import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Footer = () => {
  return (
    <div className="footer">
      <h2>My Projects</h2>
      <h4>HTML , CSS & JavaScript</h4>
      <Link>Portfolio</Link>
      <Link>Class attendance</Link>
      <Link>Pig game</Link>
      <Link>Guessing game</Link>
      <Link>weather app</Link>
      <h3> React js</h3>
      <Link>Blogging website</Link>
      <p> copyright &copy; SUHAYA tech hub</p>
    </div>
  );
};

export default Footer;
