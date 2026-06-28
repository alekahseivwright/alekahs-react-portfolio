import MeImg from "../assets/pictures/me.png";
import workoutBear from "../assets/gifs/workoutbear.gif";
import bearCoding from "../assets/gifs/bearcoding.gif";

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={MeImg} alt="Alekah Seivwright" className="about-img" />
      <p className="about-intro">
        Hi, I'm <strong>Alekah Seivwright</strong>, a Software Engineering Technician
        student at Centennial College with a love for cats, code, and creative problem-solving.
        I'm working toward a career as a project manager on an app or game development team,
        where I can combine my organizational skills with my passion for technology.
      </p>

      <div className="about-section">
        <h2>What I'm Working On</h2>
        <p>
          Right now I'm deepening my skills in full-stack web development, with React on the
          frontend, Node.js and MongoDB on the backend. I'm also learning how to lead
          projects effectively, from splitting up team tasks to polishing final deliverables
          like SRS documents and portfolio sites.
        </p>
      </div>

      <div className="about-side-row about-side-row-right">
        <div className="about-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML & CSS</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">XAML</span>
            <span className="skill-tag">Git & GitHub</span>
            <span className="skill-tag">Technical Writing</span>
            <span className="skill-tag">Project Management</span>
          </div>
        </div>
        <img src={bearCoding} alt="" className="about-side-gif about-bear-coding" />
      </div>

      <div className="about-side-row about-side-row-left">
        <img src={workoutBear} alt="" className="about-side-gif about-workout-bear" />
        <div className="about-section">
          <h2>When I'm Not Coding</h2>
          <ul className="hobby-list">
            <li>🏋️ Weightlifting</li>
            <li>🎮 Gaming</li>
            <li>🏕️ Camping</li>
            <li>🐱 Hanging out with cats</li>
            <li>👨‍👩‍👧‍👦 Spending time with family</li>
          </ul>
        </div>
      </div>

      <div className="about-section">
        <h2>Fun Facts</h2>
        <ul className="fun-facts">
          <li>🐾 My cat Ripley is the unofficial creative director of this portfolio. If it passes her nap test, it stays.</li>
          <li>👨‍👩‍👧‍👦 Being the oldest of 10 siblings means I learned early how to lead, share, and negotiate for the good charger.</li>
          <li>🩰 I started ballet as an adult, which is basically learning grace, balance, and not giving up in public.</li>
          <li>☕ Give me a warm drink, a cozy setup, and a good playlist, and I will happily code for hours.</li>
        </ul>
      </div>

      <a
        href="/Alekah_Seivwright_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Download My Resume
      </a>
    </div>
  );
}

export default About;
