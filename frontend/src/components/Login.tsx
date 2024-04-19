import React from "react";
import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function CreateUser() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const addUser = async () => {
      try {
        const response = await axios.post("http://localhost:3000/user/addUser");
        setUser(response.data); // Mettre à jour le state avec les projets récupérés
      } catch (error) {
        console.error("Erreur lors de la suppression du projet:", error);
      }
    };

    addUser();
  }, []);
}

export function AuthLogin() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await axios.post("http://localhost:3000/auth/login");
        setUser(response.data); // Mettre à jour le state avec les projets récupérés
      } catch (error) {
        console.error("Erreur lors de la suppression du projet:", error);
      }
    };

    loginUser();
  }, []);
}

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="Text"></div>
        </div>
        <div className="inputs">
          <img src="../img/person.png" alt="" />
          <div className="input">
            <img src="../img/email.png" alt="" />
            <input type="email" />
          </div>
          <div className="input">
            <img src="../img/password.png" alt="" />
            <input type="password" />
          </div>
        </div>
        <div className="submit-container">
          <Form action="edit">
            <button type="submit" onClick={CreateUser}>
              Sign Up
            </button>
            <button type="submit" onClick={AuthLogin}>
              Login
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
