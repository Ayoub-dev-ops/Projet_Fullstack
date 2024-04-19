import React, { useState, useEffect } from "react";
import axios from "axios";
import ChgmtProject from "../components/ProjectChange";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/project/getProjects"
        );
        setProjects(response.data); // Mettre à jour le state avec les projets récupérés
      } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {projects.map(
        (project: {
          _id: number;
          title: string;
          description: string;
          period: string;
          technologyUsed: [string];
          thumbnail: string;
        }) => (
          <div key={project._id}>
            <p>{project.title}</p>
            <ul key={project._id}>
              <li>
                Miniature :<br />
                {project.thumbnail}
              </li>
              <li>
                Description :<br />
                {project.description}
              </li>
              <li>
                Période du projet :<br />
                {project.period}
              </li>
              <li>
                Technologies utilisées :<br />
                {project.technologyUsed}
              </li>
              <ChgmtProject />
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectList;
