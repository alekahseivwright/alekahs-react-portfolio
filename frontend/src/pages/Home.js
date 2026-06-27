import { Link } from "react-router-dom";
import helloKitty from "../assets/portfolio_kitty.gif";
import laptopKitty from "../assets/portfolio kitty.gif";
import spinningKitty from "../assets/spinningkitty.gif";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Alekah's Portfolio</h1>

      <p className="subtitle">
        Software Engineering Student · Aspiring Frontend Developer · Cat Lover 🐱
      </p>

      <p>
        I'm passionate about building web applications that are clean, efficient, and
        user-friendly. My goal is to bring ideas to life by transforming concepts into
        seamless digital experiences, whether that's leading a team through an SRS document
        or coding a React app from scratch.
      </p>

      <div className="home-cards">
        <Link to="/about" className="featured-card">
          <img src={helloKitty} alt="" className="featured-gif" />
          <span>Get to Know Me</span>
        </Link>

        <Link to="/projects" className="featured-card">
          <img src={laptopKitty} alt="" className="featured-gif" />
          <span>Explore My Projects</span>
        </Link>

        <Link to="/contact" className="featured-card">
          <img src={spinningKitty} alt="" className="featured-gif" />
          <span>Get In Touch</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
