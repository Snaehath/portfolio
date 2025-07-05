import { useState } from "react";
import { Projects } from "../data/projects";
import { Heart } from "lucide-react";

const Project = () => {
  const [likedProjects, setLikedProjects] = useState(new Set());

  const toggleLike = (index) => {
    setLikedProjects((prev) => {
      const updated = new Set(prev);
      updated.has(index) ? updated.delete(index) : updated.add(index);
      return updated;
    });
  };

  return (
    <div
      className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      id="projects"
    >
      {Projects.map((proj, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-300"
        >
          <img
            src={proj.image}
            alt={`Project ${proj.title}`}
            className="w-full h-52 object-cover"
          />
          <div className="p-6 text-gray-800 dark:text-gray-200">
            <h2 className="font-bold text-2xl mb-2">{proj.title}</h2>
            <p className="mb-2">{proj.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <strong>Tech Stack:</strong> {proj.tech_stack}
            </p>
            <div className="flex justify-between items-center">
              <Heart
                size={28}
                strokeWidth={2}
                className={`cursor-pointer transition duration-200 ease-in-out ${
                  likedProjects.has(index)
                    ? "fill-red-500 "
                    : "fill-transparent hover:stroke-red-500"
                }`}
                onClick={() => toggleLike(index)}
              />

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
