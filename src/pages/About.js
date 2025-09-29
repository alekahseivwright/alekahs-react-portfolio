import MeImg from "../assets/me.png";
import ResumePdf from "../assets/Alekah_Seivwright_Resume.pdf";

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
              <a href= {ResumePdf} download className="btn">Download My Resume PDF
              </a>
        </div>
     );
}
export default About;