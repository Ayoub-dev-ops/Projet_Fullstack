import { useEffect, useState } from "react";

const ProjectPage = () => {

    const [message, setMessage] = useState("");
        useEffect(() => {
            fetch("http://localhost:3000/message")
              .then((res) => res.json())
              .then((data) => setMessage(data.message));
          }, []);

    return (
        <div>
            <h1>Projects</h1>
            <p>Welcome to my project page!</p>
            <h1>{message}</h1>
            <br />
        </div>
    );
};

export default ProjectPage;