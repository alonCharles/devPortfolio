import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectForm from "./components/ProjectForm";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
    console.log(mode);
  };
  console.log(projectList);

  return (
    <>
      <header className="banner">
        <h3 className="pageHeading">NxQueen Chrochet Projects</h3>
        <button onClick={() => handleOpen("add")}>Add Project</button>
      </header>
      <ProjectForm
        projectList={projectList}
        setProjectList={setProjectList}
        isOpen={isOpen}
        mode={modalMode}
         onClose={() => setIsOpen(false)}
      />
      {projectList
        ? projectList.map((p) => (
            <ProjectCard
              clientName={p.clientName}
              productName={p.productName}
              cost={p.cost}
              time={p.time}
              status={p.status}
              notes={p.notes}
              handleOpen={handleOpen}
            />
          ))
        : null}
    </>
  );
}

export default App;
