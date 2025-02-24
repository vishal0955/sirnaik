import React, {useState} from "react";
import { Container, Row, Col,InputGroup, Card, Button, Form, Modal } from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import EditProjectForm from "./EditProjectForm";
import { TbLayoutDashboard } from "react-icons/tb";

const tasks = [
  {
    owner: "John Doe",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "Update UI Design",
    deadline: "Tomorrow",
    time: "09:00",
    action: "Delete Project",
  },
  {
    owner: "Jane Smith",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Review Marketing",
    deadline: "Next Week",
    time: "10:00",
    action: "Edit Task",
  },
  {
    owner: "Alex Johnson",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    description: "Prepare Financial",
    deadline: "Today",
    time: "12:00",
    action: "Delete Task",
  },
  {
    owner: "Sarah Brown",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    description: "Brainstorm New",
    deadline: "Next Month",
    time: "14:00",
    action: "Edit Task",
  },
  {
    owner: "Michael White",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    description: "Debugging Code",
    deadline: "Next Week",
    time: "16:00",
    action: "Delete Task",
  },
  {
    owner: "Emily Green",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    description: "Launch New Feature",
    deadline: "Tomorrow",
    time: "18:00",
    action: "Edit Task",
  },
];

const ProjectDetailVM = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleProjectEdit = () => {
  
    setShowModal(true);
    }
  
  return (
    <Container fluid className="p-4" style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      {/* Search Bar & Profile */}
      <Row className="align-items-center mb-4">
      <Col md={6}>
      <Form>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Project Name"
          className="shadow-sm"
          style={{
            width: "100px",
            borderRadius: "40px",
            paddingLeft: "35px",
            position: "relative",
          
          }}
        />
        <IoMdSearch
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#aaa",
          }}
        />
      </InputGroup>
    </Form>
</Col>
        <Col md={6} className="d-flex justify-content-end">
          <Button variant="light" className="me-2" onClick={() => {navigate("/projectupdate")}}>🔔</Button>
            <Button variant="light" className="me-2" onClick={() => {navigate("/projectkanban")}}> <TbLayoutDashboard /></Button> 
          <Button variant="primary" onClick={handleProjectEdit}>Add Project</Button>
        </Col>
      </Row>

      {/* Project Details Header */}
      <h4>Project Details</h4>
      <p className="text-muted">4 Tasks Remaining</p>

      {/* Task List */}
      {tasks.map((task, index) => (
        <Card key={index} className="mb-3 shadow-none">
        <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Task Owner */}
          <div className="d-flex align-items-center">
            <img
              src={task.img}
              alt={task.owner}
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px" }}
              onClick={() => {navigate("/projectdetailtable")}}
            />
            <div className="pointer: cursor" onClick={() => {navigate("/projectdetailtable")}}>
              <strong>Task Owner: {task.owner}</strong>
              <p className="text-muted mb-0">{task.description}</p>
            </div>
          </div>

          {/* Task Deadline */}
          <div className="text-center text-md-end">
            <strong>Task Deadline: {task.deadline}</strong>
            <p className="text-muted mb-0">Due Time: {task.time}</p>
          </div>

          {/* Action Button */}
          <Button variant="" className="shadow-sm rounded" onClick={handleProjectEdit} >{task.action}</Button>
        </Card.Body>
      </Card>

      ))}

      {/* Pagination */}
      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <Button variant="light">←</Button>
          <Button variant="primary" className="mx-2">1</Button>
          <Button variant="light">2</Button>
          <Button variant="light">3</Button>
          <Button variant="light">→</Button>
        </Col>
      </Row>

      
      {/* Project Add  */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
           <EditProjectForm setShowModal={setShowModal} />
          </Modal.Body>
        </Modal>
    </Container>
  );
};

export default ProjectDetailVM;
