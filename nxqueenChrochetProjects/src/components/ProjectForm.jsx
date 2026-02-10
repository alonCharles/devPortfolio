
const ProjectForm = () => {
    return (
        <form className="project_form">
            <div>
                <label htmlFor="form_clientName">Client Name</label>
                <input type="text" id="form_clientName" />
            </div>
            <div>
                <label htmlFor="form_productName">Product Name</label>
                <input type="text" id="form_productName" />
            </div>
            <div>
                <label htmlFor="form_Price">Price</label>
                <input type="number" id="form_Price" />
            </div>
            <div>
                <label htmlFor="form_Time">Time Estimate</label>
                <input type="text" id="form_Time" />
            </div>
           
            <br />
            <fieldset>
                <legend>Select a Status</legend>
                
                <div>
                    <label htmlFor="inProgress">In Progress</label>
                    <input type="radio" name="status" id="inProgress" value='inProgress' />
                </div>
                <div>
                    <label htmlFor="pending">Pending</label>
                    <input type="radio" name="status" id="pending" value='pending' />
                </div>
                <div>
                    <label htmlFor="complete">Complete</label>
                    <input type="radio" name="status" id="complete" value='complete' />
                </div>
            </fieldset>
            <label htmlFor="form_notes">Notes</label>
            <textarea id="form_notes"></textarea>
        </form>
    )
}

export default ProjectForm