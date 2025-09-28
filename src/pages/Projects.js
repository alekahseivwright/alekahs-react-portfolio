import calculatorImg from "../assets/CalculatorApplication.png";
import srsCityDoc from "../assets/SRS-CityRegistrationApp.docx";
import restaurantImg from "../assets/ResturantWebsite.png";
import srsCityImg from "../assets/SRS-Project.png";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>


      <div className="project">
        <img src={calculatorImg} alt="Calculator Application" />
        <p>
          <strong>Calculator Application:</strong> Built solo using XAML. Implemented core 
          functionality and final design independently.
        </p>
      </div>

  
      <div className="project">
        <img src={srsCityImg} alt="City Registration SRS" />
        <p>
          <strong>City Registration Application:</strong> Team project where I was the Team Lead, 
          responsible for team meetings, splitting up work, and final edits of the SRS document.
        </p>
        <a href={srsCityDoc} download="SRSCityRegistrationApp.docx">
          Download SRS Document
        </a>
      </div>

  
      <div className="project">
        <img src={restaurantImg} alt="Restaurant Website" />
        <p>
          <strong>Restaurant Website:</strong> Created solo using basic HTML & CSS, implementing 
          photos, contact page, reviews, etc.
        </p>
        <a href={restaurantImg} download="ResturantWebsite.png">
          Download Project Document
        </a>
      </div>
    </div>
  );
}

export default Projects;
