import { useEffect, useState } from "react";
import API_BASE from "../api/config";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section>
      <h2>Our Projects</h2>
      <div className="card-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt="project" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
