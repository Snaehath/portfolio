import Proj1 from "../assets/proj1.png";
import { useState } from "react";
import { Projects } from "../data/projects";

const Project = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex justify-start gap-2.5" id="projects">
      {Projects.map((proj, index) => (
        <div className="card" key={index}>
          <img
            src={proj.image}
            alt="project-image"
            className="w-full object-fill"
          />
          <div className="p-6">
            <h2 className="font-bold text-2xl">{proj.title}</h2>
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
