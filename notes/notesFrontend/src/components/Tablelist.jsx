const Tablelist = ({ handleOpen }) => {
  const clients = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      job: "developer",
      rate: "100",
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@email.com",
      job: "developer",
      rate: "100",
      isActive: true,
    },
    {
      id: 3,
      name: "John Doe2",
      email: "john.doe2@email.com",
      job: "developer",
      rate: "100",
      isActive: false,
    },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody className="hover:bg-base-300">
          {/* row 1 */}
          {clients.map((c) => (
            <tr>
              <th>{c.id}</th>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.job}</td>
              <td>{c.rate}</td>
              <td>
                <button
                  className={`btn rounded-full w-20 ${c.isActive ? "btn-primary" : "btn-outline-primary"}`}
                >
                  {c.isActive ? "Active" : "Inactive"}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleOpen("edit")}
                >
                  Update
                </button>
              </td>
              <td>
                <button className="btn btn-accent">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablelist;
