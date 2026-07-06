import { useState } from "react";

const ProjectForm = ({ projectList, setProjectList, isOpen, mode, onClose }) => {
  const [project, setProject] = useState({
    clientName: "",
    productName: "",
    price: 0,
    time: "",
    status: "",
    notes: "",
  });

  const handleAdd = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjectList((prev) => [...new Set([...projectList, project])]);
    setProject({
    clientName: "",
    productName: "",
    price: 0,
    time: "",
    status: "",
    notes: "",
  })
  };

  console.log(project);
  return (
    <dialog open={isOpen}>
      <form method="dialog" className="project_form" onSubmit={handleSubmit}>
        <div>
          {mode === "edit" ? "Edit Project Details" : "Project Details"}
          <label htmlFor="form_clientName">Client Name</label>
          <input
            value={project.clientName}
            onChange={handleAdd}
            type="text"
            id="form_clientName"
            name="clientName"
          />
        </div>
        <div>
          <label htmlFor="form_productName">Product Name</label>
          <input
            value={project.productName}
            onChange={handleAdd}
            type="text"
            name="productName"
            id="form_productName"
          />
        </div>
        <div>
          <label htmlFor="form_Price">Price</label>
          <input
            value={project.cost}
            onChange={handleAdd}
            name="price"
            type="number"
            id="form_Price"
          />
        </div>
        <div>
          <label htmlFor="form_Time">Time Estimate</label>
          <input
            value={project.time}
            name="time"
            type="text"
            id="form_Time"
            onChange={handleAdd}
          />
        </div>

        <br />
        <fieldset>
          <legend>Select a Status</legend>

          <div>
            <label htmlFor="inProgress">In Progress</label>
            <input
              type="radio"
              name="status"
              id="inProgress"
              value="inProgress"
              checked={project.status === "inProgress"}
              onChange={handleAdd}
            />
          </div>
          <div>
            <label htmlFor="pending">Pending</label>
            <input
              type="radio"
              name="status"
              id="pending"
              value="pending"
              checked={project.status === "pending"}
              onChange={handleAdd}
            />
          </div>
          <div>
            <label htmlFor="complete">Complete</label>
            <input
              type="radio"
              name="status"
              id="complete"
              value="complete"
              checked={project.status === "complete"}
              onChange={handleAdd}
            />
          </div>
        </fieldset>
        <div>
          <label htmlFor="form_notes">Notes</label>
          <textarea
            id="form_notes"
            value={project.notes}
            onChange={handleAdd}
            name="notes"
          ></textarea>
        </div>
        <button id="submitBtn" type="submit">
          Add Project
        </button>
        <button onClick={onClose}>
              {" "}
              ✕
            </button>

      </form>
    </dialog>
  );
};

export default ProjectForm;
