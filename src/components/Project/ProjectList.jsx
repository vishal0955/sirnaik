import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EditProjectForm from "./EditProjectForm";


const ProjectList = () => {
  const [showModal , setShowModal] = useState(false);
  // const [project, setProject] = useState(projects);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // const filteredProjects = () => {
  //   return projects.filter((project) =>
  //     project.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // };

  const handleProjectEdit = () => {
  
  setShowModal(true);
  }

  const projects = [
    {
      title: "Project Apollo",
      deadline: "2023-12-31",
      priority: "High",
      tags: ["Development", "UI/UX"],
    },
    {
      title: "Project Odyssey",
      deadline: "2024-03-15",
      priority: "Medium",
      tags: ["Marketing", "Sales"],
    },
    {
      title: "Project Titan",
      deadline: "2024-06-10",
      priority: "Low",
      tags: ["Research", "Development"],
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="p-4">
      {/* Search Bar */}
      <Row className="justify-content-end mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{borderRadius:"20px"}}
          />
        </Col>
      </Row>

      {/* Project List */}
      <h3>Project List</h3>
      <Row className="">
        {filteredProjects.map((project, index) => (
          <Col key={index} md={4}>
            <Card className="p-3 shadow-lg " style={{borderRadius:"20px"}}>
              <h5>{project.title}</h5>
              <p>Deadline: {project.deadline}</p>
              <p>Priority: {project.priority}</p>
              <div>
                {project.tags.map((tag, i) => (
                  <span key={i} className="badge bg-light text-dark me-2">{tag}</span>
                ))}
              </div>
              <div className="mt-3 d-flex ">
                <Button variant="primary" style={{borderRadius:"15px" ,marginLeft:"10px"}} onClick={() => {navigate("/projectdetailtable")}}>View Details</Button>
                <Button variant="light" style={{borderRadius:"15px" ,marginLeft:"10px"}} onClick={handleProjectEdit}>Edit</Button>
                <Button variant="light" style={{borderRadius:"15px",marginLeft:"10px"}}>Delete</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
           <EditProjectForm />
          </Modal.Body>
        </Modal>
    </Container>
  );
};

export default ProjectList;
