import ButtonBar from '../components/ProjectChange'
import ButtonAdd from '../components/ProjectAdd'

const managementPage = () => {
    
        return (
            <div>
                <h1>Management</h1>
                <p>Welcome to the management page!</p>
                <h3><ButtonAdd/><ButtonBar/></h3>
                <br />
            </div>
        );
    }

export default managementPage;