import NavBar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectForm from "./components/ProjectForm";

function App() {
  let clientName = 'Sample'
  let productName = 'Beanie'
  let cost = 80
  let time = '2 weeks'
  let status = 'pending'
  let notes = 'got yarn, working on it now'

  return (
    <>
      <header className="banner">
          <NavBar/>
      </header>
      <ProjectForm/>
      <ProjectCard clientName={clientName} productName={productName} cost={cost} time={time} status={status} notes={notes} />
    </>
  )
}

export default App
