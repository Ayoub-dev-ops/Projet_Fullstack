import ListProject from '../components/ProjectList';
import ProjectAdd from "../components/ProjectAdd";

const ProjectPage = () => {

    return (
        <div>
            <h1>Projects</h1>
            <p>Welcome to my project page!</p>
            <ProjectAdd />
            <h3><ListProject/></h3>
            <br />
        </div>
    );
};

export default ProjectPage;