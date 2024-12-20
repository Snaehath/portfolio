import Proj1 from "../assets/proj1.png";
import { useState } from "react";
import { Projects } from "../data/projects";

const Project = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="project-cards">
      {Projects.map((proj, index) => (
        <div className="card" key={index}>
          <img src={proj.image} alt="project-image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{proj.title}</h2>
            <p className="card-description">{proj.description}</p>
            <p className="card-tech-stack">Tech Stack: {proj.tech_stack}</p>
            <div className="card-footer">
              <span
                className={`like-icon ${liked ? "liked" : ""}`}
                onClick={toggleLike}
              >
                &#x2764;
              </span>
              <button>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
