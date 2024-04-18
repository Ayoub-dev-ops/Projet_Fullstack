const ProjectPage = () => {
    const name = "Project Name";
    const bio = "Write a short bio about yourself.";

    return (
        <div>
            <h1>Projects</h1>
            <p>Welcome to my project page!</p>
            <h2>{name}</h2>
            <p>Bio: {bio}</p>
            <br />
        </div>
    );
};

export default ProjectPage;