import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import axios from "axios";

export function DeleteProject() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    const deleteProject = async () => {
      try {
        const response = await axios.delete(
          "http://localhost:3000/project/deleteProject"
        );
        setProject(response.data); // Mettre à jour le state avec les projets récupérés
      } catch (error) {
        console.error("Erreur lors de la suppression du projet:", error);
      }
    };

    deleteProject();
  }, []);
}

export function UpdateProject() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    const updateProject = async () => {
      try {
        const response = await axios.put(
          "http://localhost:3000/project/updateProject"
        );
        setProject(response.data); // Mettre à jour le state avec les projets récupérés
      } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
      }
    };

    updateProject();
  }, []);
}

export default function ProjectChange() {
  return (
    <>
      <div>
        <Form action="edit">
          <button type="submit" onClick={UpdateProject}>
            Edit
          </button>
          <button type="submit" onClick={DeleteProject}>
            Delete
          </button>
        </Form>
      </div>
    </>
  );
}
