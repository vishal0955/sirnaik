import React, { useState} from "react";
import { Container, Row, Col, Card, Button, Form, InputGroup,Modal } from "react-bootstrap";
import { FaSearch, FaEllipsisH, FaPlus } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import EditProjectForm from "./EditProjectForm";
import TaskForm from "../Forms/AddTask";


const ProjectKanbanBoard = () => {

  const [showModal , setShowModal] = useState(false);
  const [ShowAddTaskModal, setShowAddTaskModal] = useState(false);

  const handleAddTask = () => {
    setShowAddTaskModal(true);
  };

  const tasks = {
    notStarted: [
      {
        title: "Task Updates",
        description: "All Projects",
        team: ["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/2.jpg"],
      },
      {
        title: "Project Planning Meeting",
        description: "Session 8 of 12, Team Collaboration",
        team: ["https://randomuser.me/api/portraits/women/3.jpg", "https://randomuser.me/api/portraits/men/4.jpg"],
      },
      {
        title: "Market Analysis",
        description: "Data Collection for Marketing Strategies",
        team: ["https://randomuser.me/api/portraits/men/5.jpg", "https://randomuser.me/api/portraits/women/6.jpg"],
      },
    ],
    ongoing: [
      {
        title: "Product Design Part 13",
        image: "https://source.unsplash.com/400x300/?technology",
        description: "Development & Design Review",
        team: ["https://randomuser.me/api/portraits/men/7.jpg", "https://randomuser.me/api/portraits/women/8.jpg"],
      },
    ],
    completed: [
      {
        title: "Template Revision",
        description: "Quarter 3 Product Evaluation",
        team: ["https://randomuser.me/api/portraits/men/9.jpg", "https://randomuser.me/api/portraits/women/10.jpg"],
      },
      {
        title: "Project Strategy Session",
        image: "https://source.unsplash.com/400x300/?computers",
        description: "Idea Generation",
        team: ["https://randomuser.me/api/portraits/women/11.jpg", "https://randomuser.me/api/portraits/men/12.jpg"],
      },
    ],
  };

  return (
    <Container fluid className="p-4">
      {/* Search Bar & New Project Button */}
      <Row className="mb-4 align-items-center">
      <Col md={8} style={{ position: "relative" }}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Enter project name, description, deadline, priority, and tags"
          className="shadow-sm"
          style={{
            paddingLeft: "40px", // आइकॉन के लिए जगह
            borderRadius: "40px",
          }}
        />
        <FaSearch
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#aaa",
            pointerEvents: "none",
          }}
        />
      </InputGroup>
    </Col>
     {/* <Button variant="light" className="me-2" onClick={() => {navigate("/projectlist")}}> <FaList /></Button>  */}
        <Col md={4} className="text-end">
          <Button variant="primary" style={{borderRadius:"30px"}} onClick={() => {setShowModal(true);}}>
            <FaPlus className="me-2" /> New Project
          </Button>
        </Col>
      </Row>

      {/* Filters */}
      <Row className="mb-3">
        <Col>
          <Button variant="light" className="me-2">
            Filter by ▼
          </Button>
          <Button variant="light">Group by: Progress ▼</Button>
        </Col>
      </Row>

      {/* Project List */}
      <Row className="g-4">
        {/* Not Started */}
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Not Started</h5>
              <FaEllipsisH />
            </div>
            {tasks.notStarted.map((task, index) => (
              <Card key={index} className="mb-3 p-3 shadow-sm">
                <strong>{task.title}</strong>
                <p className="text-muted">{task.description}</p>
                <div className="d-flex">
                  {task.team.map((member, i) => (
                    <img
                      key={i}
                      src={member}
                      alt="team"
                      className="rounded-circle me-1"
                      width="30"
                      height="30"
                    />
                  ))}
                </div>
              </Card>
            ))}
            <Button variant="light" onClick={handleAddTask}>+ New Task</Button>
          </Card>
        </Col>

        {/* Ongoing */}
        <Col md={4}>
          <Card className="p-3 shadow-sm shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Ongoing Tasks</h5>
              <FaEllipsisH />
            </div>
            {tasks.ongoing.map((task, index) => (
              <Card key={index} className="mb-3 p-3">
                {/* <img src={task.image} alt="Task" className="img-fluid rounded mb-2" /> */}
                <strong>{task.title}</strong>
                <p className="text-muted">{task.description}</p>
                <div className="d-flex">
                  {task.team.map((member, i) => (
                    <img
                      key={i}
                      src={member}
                      alt="team"
                      className="rounded-circle me-1"
                      width="30"
                      height="30"
                    />
                  ))}
                </div>
              </Card>
            ))}
            <Button variant="light" onClick={handleAddTask}>+ New Task</Button>
          </Card>
        </Col>

        {/* Completed */}
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Completed Tasks</h5>
              <FaEllipsisH />
            </div>
            {tasks.completed.map((task, index) => (
              <Card key={index} className="mb-3 p-3 shadow-sm">
                {/* {task.image && <img src={task.image} alt="Task" className="img-fluid rounded mb-2" />} */}
                <strong>{task.title}</strong>
                <p className="text-muted">{task.description}</p>
                <div className="d-flex">
                  {task.team.map((member, i) => (
                    <img
                      key={i}
                      src={member}
                      alt="team"
                      className="rounded-circle me-1"
                      width="30"
                      height="30"
                    />
                  ))}
                </div>
              </Card>
            ))}
            <Button variant="light" onClick={handleAddTask}>+ New Task</Button>
          </Card>
        </Col>
      </Row>
      <Modal show={ShowAddTaskModal} onHide={() => setShowAddTaskModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
<TaskForm />
        </Modal.Body>
      </Modal>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
           <EditProjectForm  setShowModal={setShowModal}/>
          </Modal.Body>
        </Modal>
    </Container>
  );
};

export default ProjectKanbanBoard;
