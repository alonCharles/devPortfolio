import { useState } from "react"

const ModalForm = ({ isOpen, onClose, mode, onSubmit }) => {
    const [rate, setRate] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [job, setJob] = useState('')
    const [status, setStatus] = useState(false)

    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'Active')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onClose(e)
    }

  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {" "}
            {mode === "edit" ? "Edit Client" : "Client Details"}{" "}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            <label className="input input-bordered my-4 flex items-center gap-2">
              Name
              <input type="text" placeholder="Type here" className="grow" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
              Email
              <input type="text" placeholder="Type here" className="grow" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
              Job
              <input type="text" placeholder="Type here" className="grow" value={job} onChange={(e) => setJob(e.target.value)} />
            </label>

            <div className="flex mb-4 justify=between">
              <label className="input input-bordered my-4 flex items-center gap-2">
                Rate
                <input type="number" placeholder="Type here" className="grow" value={rate} onChange={(e) => setRate(e.target.value)} />
              </label>
              <select value={status ? 'Active' : 'Inactive'} className="select m-4" onChange={handleStatusChange}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              {" "}
              ✕
            </button>

            <button className="btn btn-success">
              {" "}
              {mode === "edit" ? "Save Changes?" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
