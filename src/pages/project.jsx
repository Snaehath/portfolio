import Proj1 from "../assets/proj1.png";

import { useState } from "react";

const Project = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="card">
      <img src={Proj1} alt="project-image" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Tic-Tac-Toe</h2>
        <p className="card-description">
          Responsive tic-tac-toe game using javascript class method.
        </p>
        <p className="card-tech-stack">Tech Stack: HTML,CSS,JS</p>
        <div className="card-footer">
          <span
            className={`like-icon ${liked ? "liked" : ""}`}
            onClick={toggleLike}
          >
            &#x2764;
          </span>
          <button>
            <a
              href="https://snaehath.github.io/Tic-Tac-Toe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
