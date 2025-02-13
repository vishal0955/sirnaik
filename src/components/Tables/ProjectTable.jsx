import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Dropdown } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const priorityColors = {
  High: "danger",
  Medium: "warning",
  Low: "primary",
  Normal: "success",
};

const statusColors = {
  Pending: "warning",
  InProgress: "info",
  "On Hold": "danger",
  "To Start": "info",
  Completed: "success",
  Cancelled: "secondary",
};

const initialProjects = [
  {
    id: "BOT",
    name: "Chatbots",
    members: 5,
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    priority: "Normal",
    status: "Pending",
  },
  {
    id: "ALT",
    name: "Android local train ticketing system",
    members: 6,
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Laila Gerlach",
    priority: "High",
    status: "On Hold",
  },
  {
    id: "OMF",
    name: "Opinion mining for social networking platforms",
    members: 7,
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Halie Wilkinson Sr.",
    priority: "Medium",
    status: "To Start",
  },
];

 const ProjectTable = () => {
  const navigate= useNavigate();
  const [projects, setProjects] = useState(initialProjects);

  const handlePriorityChange = (index, priority) => {
    const updatedProjects = [...projects];
    updatedProjects[index].priority = priority;
    setProjects(updatedProjects);
  };

  const handleStatusChange = (index, status) => {
    const updatedProjects = [...projects];
    updatedProjects[index].status = status;
    setProjects(updatedProjects);
  };

  const handleClick = () => {
    // Handle click event here
    navigate("/projectdetails");
  };
  return (


//  tabledown class in APp.css
      <Table responsive bordered hover className="tabledown" >
        <thead>
          <tr className="table-secondary">
            <th>Project ID</th>
            <th>Project Name</th>
            <th>Members</th>
            <th>Start Date</th>
            <th>Deadline</th>
            <th>Client</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td onClick={handleClick}>{project.id}</td>
              <td onClick={handleClick}>{project.name}</td>
              <td>{project.members}+</td>
              <td>{project.startDate}</td>
              <td>{project.deadline}</td>
              <td>{project.client}</td>
              <td>
                <Dropdown onSelect={(eventKey) => handlePriorityChange(index, eventKey)}>
                  <Dropdown.Toggle variant={priorityColors[project.priority]} id="dropdown-priority">
                    {project.priority}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {Object.keys(priorityColors).map((priority) => (
                      <Dropdown.Item key={priority} eventKey={priority} className={`text-${priorityColors[priority]}`}>
                        {priority}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Dropdown onSelect={(eventKey) => handleStatusChange(index, eventKey)}>
                  <Dropdown.Toggle variant={statusColors[project.status]} id="dropdown-status">
                    {project.status}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {Object.keys(statusColors).map((status) => (
                      <Dropdown.Item key={status} eventKey={status} className={`text-${statusColors[status]}`}>
                        {status}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <FaEllipsisV />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item href="#">Post To Production</Dropdown.Item>
                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

       

  );
};

export default ProjectTable;

// const ProjectPage = () => {
//   return (

    
//       <ProjectTable />
 
//   );
// };

// export default ProjectPage;
