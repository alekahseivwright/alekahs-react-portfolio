import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Alekah's Portfolio</h1>
      <p className="subtitle">Software Engineering Student · Aspiring Frontend Developer · Cat Lover 🐱</p>
      <p>
        I'm passionate about building web applications that are clean, efficient, and
        user-friendly. My goal is to bring ideas to life by transforming concepts into
        seamless digital experiences — whether that's leading a team through an SRS document
        or coding a React app from scratch.
      </p>
      <div className="home-actions">
        <Link to="/about" className="btn">Learn More About Me</Link>
        <Link to="/projects" className="btn">See My Projects</Link>
      </div>
      <div className="quick-links">
        <Link to="/projects" className="quick-link-card">
          <span className="emoji">💻</span>
          <span>Projects</span>
        </Link>
        <Link to="/education" className="quick-link-card">
          <span className="emoji">📚</span>
          <span>Education</span>
        </Link>
        <Link to="/services" className="quick-link-card">
          <span className="emoji">🛠️</span>
          <span>Services</span>
        </Link>
        <Link to="/contact" className="quick-link-card">
          <span className="emoji">✉️</span>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
