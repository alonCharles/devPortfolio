import { useState } from "react"
import ModalForm from "./components/ModalForm"
import Navbar from "./components/Navbar"
import Tablelist from "./components/Tablelist"
import Test from "../../notesBackend/src/Test";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleOpen = (mode) => {
    setIsOpen(true)
    setModalMode(mode)
  }

  const handleSubmit = () => {
    if (modalMode === 'add') {
      console.log('modal mode add')
    } else {
      console.log('modal mode edit')
    }
  }

  return (
    <>
      <Navbar onOpen={() => handleOpen('add')}/>
      <Tablelist handleOpen={handleOpen}/>
      <ModalForm isOpen={isOpen} onSubmit={handleSubmit} mode={modalMode} onClose={() => setIsOpen(false)}/>

    </>
  )
}

export default App
