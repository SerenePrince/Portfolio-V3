import PropTypes from "prop-types";
import { FaGithub, FaLink } from "react-icons/fa";

const Project = ({ url, title, description, skills, github, demo }) => {
  return (
    <div className="bg-black bg-opacity-50 rounded-lg p-3">
      <img
        src={`/images/${url}`}
        alt={`Project thumbnail for ${title}`}
        className="rounded-lg mb-3"
      />
      <div className="text-2xl mb-2 inline-flex gap-3 items-center">
        <h1>{title}</h1>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-white transition"
          >
            <FaLink size={24} />
          </a>
        )}
      </div>
      <p className=" mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-purple-300  px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

function Projects() {
  const projectData = [
    {
      url: "vgdb_thumbnail.png",
      title: "Video Game Database",
      description:
        "A fullstack project to manage game data and user reviews, featuring a responsive UI and RESTful API integration.",
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Java",
        "Spring Boot",
        "RESTful APIs",
        "MongoDB",
        "Maven",
      ],
      github: "https://github.com/SerenePrince/VGDB",
    },
    {
      url: "wordle_thumbnail.png",
      title: "Wordle Clone",
      description:
        "A React-based clone of the popular word-guessing game, with color-coded feedback and mobile-responsive design.",
      skills: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/SerenePrince/Wordle",
      demo: "https://sereneprince.github.io/Wordle",
    },
    {
      url: "flashcards_thumbnail.png",
      title: "Flashcard Web App",
      description:
        "A simple flashcard app for managing custom decks with local storage and JSON import/export for efficient studying.",
      skills: ["React", "JavaScript", "Tailwind CSS", "IndexedDB", "JSON"],
      github: "https://github.com/SerenePrince/Flashcards",
      demo: "https://sereneprince.github.io/Flashcards",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3 fade-in-bottom">
      {projectData.map((project, index) => (
        <Project
          key={index}
          url={project.url}
          title={project.title}
          description={project.description}
          skills={project.skills}
          github={project.github}
          demo={project.demo}
        />
      ))}
    </div>
  );
}

Project.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  github: PropTypes.string,
  demo: PropTypes.string,
};

export default Projects;
