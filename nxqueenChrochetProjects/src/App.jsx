import ProjectCard from "./components/ProjectCard";

function App() {
  let clientName = 'Sample'
  let productName = 'Beanie'
  let cost = 80
  let time = '2 weeks'
  let status = 'pending'
  let notes = 'got yarn, working on it now'

  return (
    <>
      <ProjectCard clientName={clientName} productName={productName} cost={cost} time={time} status={status} notes={notes} />
    </>
  )
}

export default App
