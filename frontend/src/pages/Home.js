import { Link } from "react-router-dom";
import kittiesRow from "../assets/kitties-row.png";
import happyKitty from "../assets/happykitty.png";

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

      <div className="home-actions">
        <Link to="/about" className="featured-card featured-card-sm">
          <img src={happyKitty} alt="" className="about-cta-kitty" />
          <span>Get to Know Me</span>
        </Link>
      </div>

      <div className="home-featured">
        <Link to="/projects" className="featured-card">
          <span className="emoji">💻</span>
          <span>Explore My Projects</span>
        </Link>

        <Link to="/contact" className="featured-card">
          <img src={kittiesRow} alt="" className="featured-kitty" />
          <span>Get In Touch</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
