import MeImg from "../assets/me.png";

function About() {
    return ( 
        <div className="about"> 
            <h1>About Me</h1>
            <img src={MeImg} alt="Alekah Seivwright" className="about-img"/>
            <p>
               Hi, I am <strong>Alekah Seivwright</strong>. 
               I am a student at Centennial College, and I am taking their Software Engineering Technician Program. 
               I want to work as a project manager on an App or Game development team. 
               I’m passionate about learning, creating, and growing as a student to achieve my goals in the tech world.
               On my personal time, I enjoy weightlifting, gaming, and camping.
              </p>
            <a 
                href="/Alekah_Seivwright_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn">
                Download My Resume
            </a>

        </div>
     );
}
export default About;