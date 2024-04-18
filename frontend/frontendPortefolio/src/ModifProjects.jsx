import BNP from './components/Button/BNextPage'
import BL from './components/Button/BLogin'
import BUP from './components/Button/BUpdateProject'
import BDP from './components/Button/BDeleteProject'
import BCP from './components/Button/BCreateProject'
import BH from './components/Button/BHome'
import './ModifProjects.css'

function ModifProjects() {
  return (
    <>
    <div>
      <BH/><BL/><br />
      <br />
      <BUP/><br />
      <br />
      <BDP/><br />
      <br />
      <BCP/><br />
      <br />
      <BNP/>
    </div>
  </>
    )
}

export default ModifProjects