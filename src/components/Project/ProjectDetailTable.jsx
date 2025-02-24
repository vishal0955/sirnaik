import React, { useState}  from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import EditProjectForm from "./EditProjectForm";

const ProjectDetailTable = () => {
  const [showModal, setShowModal] = useState(false);
  const project = {
    title: "New Website Design",
    description:
      "This project involves redesigning the company's main website to improve user experience and engagement.",
    deadline: "December 15, 2023",
    priority: "High",
    tags: ["Design", "Website", "UX"],
    tasks: [
      {
        title: "Wireframe Design",
        description: "Create initial wireframes for the homepage and key sections.",
      },
      {
        title: "Content Strategy",
        description: "Develop a content strategy that aligns with the new design.",
      },
      {
        title: "UI/UX Design",
        description: "Design the user interface and user experience for the website.",
      },
    ],
  };

  return (
    <Container fluid className="p-4" style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <Row>
        {/* Sidebar Actions */}
        <Col md={3}>
          <Card className="p-3 shadow-sm">
            <h5>Project Actions</h5>
            <Button variant="primary" className="w-100 mb-2 " style={{borderRadius:"20px"}} onClick={() => setShowModal(true)}>Edit Project</Button>
            <Button variant="light" className="w-100" style={{borderRadius:"20px"}}>Delete Project</Button>
          </Card>
        </Col>

        {/* Main Project Details */}
        <Col md={9}>
          <Card className="p-4 shadow-sm" style={{border:"15px"}}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Deadline:</strong>{" "}
              <span className="text-primary">{project.deadline}</span>
            </p>
            <p>
              <strong>Priority:</strong>{" "}
              <span className="text-danger">{project.priority}</span>
            </p>
            <p>
              <strong>Tags:</strong>{" "}
              {project.tags.map((tag, index) => (
                <span key={index} className="text-primary me-2">{tag}</span>
              ))}
            </p>

            {/* Associated Tasks */}
            <h5>Associated Tasks</h5>
            {project.tasks.map((task, index) => (
              <Card key={index} className="p-3 mb-3" style={{ backgroundColor: "#e7d8fc", borderRadius: "10px" }}>
                <strong>{`Task ${index + 1}: ${task.title}`}</strong>
                <p className="m-0">{task.description}</p>
              </Card>
            ))}
          </Card>
        </Col>
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

export default ProjectDetailTable;
