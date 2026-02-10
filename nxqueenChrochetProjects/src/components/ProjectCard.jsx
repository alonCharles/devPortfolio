
const ProjectCard = ({clientName, productName, cost, time, status, notes}) => {
    return (
        <article className="project_card">
            <header className="project_header">
                <h2 className="project_title">{clientName} - {productName}</h2>
                <span className="project_status">{status}</span>
            </header>

            <section className="project_details">
                <p className="project_cost">Price: ${cost}</p>
                <p className="project_time">Time Estimate: {time}</p>
            </section>

            <footer className="project_notes">{notes}</footer>
        </article>
    )
}

export default ProjectCard