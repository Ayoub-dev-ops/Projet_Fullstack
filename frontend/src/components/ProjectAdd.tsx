import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import axios from "axios";

export default function AddProject() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    const addProject = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/project/addProject"
        );
        setProject(response.data); // Mettre à jour le state avec les projets récupérés
      } catch (error) {
        console.error("Erreur lors de l'ajout du projet:", error);
      }
    };

    addProject();
  }, []);

  return (
    <>
      <div>
        <Form action="edit">
          <button type="submit" onClick={AddProject}>
            Add
          </button>
        </Form>
      </div>
    </>
  );
}
