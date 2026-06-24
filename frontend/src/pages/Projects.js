import { useEffect, useState } from "react";

import calculatorImg from "../assets/CalculatorApplication.png";
import srsCityDoc from "../assets/SRS-CityRegistrationApp.docx";
import restaurantImg from "../assets/ResturantWebsite.png";
import srsCityImg from "../assets/SRS-Project.png";

const showcaseProjects = [
  {
    title: "Full-Stack Portfolio Website",
    emoji: "🌐",
    description:
      "This portfolio! Built with React as part of my COMP229 coursework, with a personalized cream theme, cute background icons, and a layout designed to showcase my work.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    image: null,
  },
  {
    title: "Calculator Application",
    emoji: "🔢",
    description:
      "Built solo using XAML. Implemented core functionality and final design independently.",
    tech: ["XAML", "C#"],
    image: calculatorImg,
    alt: "Calculator Application",
  },
  {
    title: "City Registration Application",
    emoji: "🏙️",
    description:
      "Team project where I was the Team Lead, responsible for team meetings, splitting up work, and final edits of the SRS document.",
    tech: ["SRS Documentation", "Team Leadership", "Requirements Analysis"],
    image: srsCityImg,
    alt: "City Registration SRS",
    download: { href: srsCityDoc, label: "Download SRS Document", filename: "SRSCityRegistrationApp.docx" },
  },
  {
    title: "Restaurant Website",
    emoji: "🍽️",
    description:
      "Created solo using basic HTML & CSS, implementing photos, contact page, reviews, and more.",
    tech: ["HTML", "CSS"],
    image: restaurantImg,
    alt: "Restaurant Website",
  },
];

function Projects() {
  const [apiProjects, setApiProjects] = useState([]);
  const token = localStorage.getItem("token");

  const fetchProjects = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/projects");
      const data = await res.json();
      setApiProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="projects">
      <h1>Projects</h1>
      <p className="projects-intro">
        A mix of solo builds, team leadership, and full-stack work from my studies and
        personal projects. Each one taught me something new!
      </p>

      {showcaseProjects.map((project) => (
        <div className="project" key={project.title}>
          {project.image ? (
            <img src={project.image} alt={project.alt} />
          ) : (
            <div className="project-placeholder">{project.emoji}</div>
          )}
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            {project.image && <span className="project-emoji">{project.emoji}</span>}
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="tech-tags">
            {project.tech.map((tag) => (
              <span className="tech-tag" key={tag}>{tag}</span>
            ))}
          </div>
          {project.download && (
            <p style={{ marginTop: "14px" }}>
              <a href={project.download.href} download={project.download.filename} className="btn">
                {project.download.label}
              </a>
            </p>
          )}
        </div>
      ))}

      {apiProjects.length > 0 && (
        <>
          <h2 style={{ textAlign: "center", marginTop: "40px" }}>More from the Database</h2>
          {apiProjects.map((project) => (
            <div className="project" key={project._id}>
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-placeholder">📁</div>
              )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              {project.tech && (
                <div className="tech-tags">
                  {project.tech.split(",").map((tag) => (
                    <span className="tech-tag" key={tag.trim()}>{tag.trim()}</span>
                  ))}
                </div>
              )}
              {project.github && (
                <p style={{ marginTop: "12px" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                    View on GitHub
                  </a>
                </p>
              )}
              {token && (
                <button onClick={() => deleteProject(project._id)} style={{ marginTop: "12px" }}>
                  Delete
                </button>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Projects;
