import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectForm from "./components/ProjectForm";

function App() {
  const [project, setProject] = useState({
        clientName: '',
        productName: '',
        cost:0,
        time:'',
        status:'',
        notes:''
  })

  const [projectList, setProjectList] = useState([])

  let clientName = 'Sample'
  let productName = 'Beanie'
  let cost = 80
  let time = '2 weeks'
  let status = 'pending'
  let notes = 'got yarn, working on it now'

  return (
    <>
      <header className="banner">
          <h3 className="pageHeading">NxQueen Chrochet Projects</h3>
      </header>
      <ProjectForm project={project} setProject={setProject} />
      <ProjectCard clientName={clientName} productName={productName} cost={cost} time={time} status={status} notes={notes} />
    </>
  )
}

export default App
