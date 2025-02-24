import React, { useState } from "react";
import Calendar from "react-calendar";
import { Container, Row, Col, Card, Button, ListGroup, Modal } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import { MdOutlineWatchLater } from "react-icons/md";

import CreateProjectModal from "./CreateProjectModal";

const ProjectDashboard = () => {
  const [date, setDate] = useState(new Date());
   const [showModal, setShowModal] = useState(false);

    const handleCreateProject = () => {
      setShowModal(true);
    }
  // Task List
  const tasks = [
    { text: "Complete project setup", due: "Today", done: true },
    { text: "Review project contracts", due: "Today", done: true },
    { text: "Explore market trends", due: "Tomorrow", done: true },
    { text: "Conduct project analysis", due: "Upcoming", done: true },
    { text: "Create project tasks", due: "This week", done: true },
  ];

  return (
    <Container
      fluid
      className="p-4"
      style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}
    >
      {/* Search & Buttons */}
      <Row className="mb-3">
        <Col className="p-3 d-flex flex-column flex-md-row align-items-center justify-content-between shadow-sm border rounded-5">
          {/* Search Bar (Full width on small screens) */}
          <input
            type="text"
            placeholder="Search projects"
            className="form-control mb-2 mb-md-0"
            style={{
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              maxWidth: "400px", // Ensures it doesn't break on small screens
            }}
          />

          {/* Buttons (Wraps on smaller screens) */}
          <div className="d-flex gap-2 flex-wrap">
            <Button
              variant="primary"
              style={{ borderRadius: "40px", whiteSpace: "nowrap" }}
              onClick={handleCreateProject}
            >
              Create project
            </Button>
            <Button variant="dark" style={{ borderRadius: "50%" }}>
              +
            </Button>
            <Button variant="primary" style={{ borderRadius: "50%" }}>
              Edit
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Calendar */}
        <Col md={4} style={{ borderRadius: "30px", marginBottom:"10px"}}>
          <Card className="shadow-sm p-3">
            <Card.Body>
              <Calendar
                onChange={setDate}
                value={date}
                className="custom-calendar"
              />
            </Card.Body>
          </Card>
        </Col>

        {/* Task List */}
        <Col md={6} style={{ marginBottom:"10px"}}>
          <Card className="shadow-sm" style={{ borderRadius: "20px" }}>
            <Card.Body>
              <Card.Title>My tasks (05)</Card.Title>
              <ListGroup style={{ border: "none" }}>
                {tasks.map((task, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center p-3"
                  >
                    <div>
                      <input
                        type="checkbox"
                        checked={task.done}
                        className="me-2"
                      />
                      {task.text}
                    </div>
                    <small>{task.due}</small>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Project Updates */}
        <Col md={2} style={{ marginBottom:"10px"}}>
          <Card className="shadow-sm " style={{ borderRadius: "20px"}}>
            <Card.Body>
              <Card.Title>Project updates</Card.Title>
              <hr />
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Task progress{" "}
                  <span className="text-muted">
                    <br />
                    View attached files
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Task status{" "}
                  <span className="text-muted">
                    <br />
                    Review project data
                  </span>
                </ListGroup.Item>
              </ListGroup>
              <Button
                variant="light"
                className="mt-3 "
                style={{ borderRadius: "50px" }}
              >
                New
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        {/* Project Categories */}
        <Col md={4} style={{marginBottom:"10px"}}>
          <Card className="shadow-sm p-3" style={{ borderRadius: "20px" }}>
            <Card.Body>
              <Card.Title>Project categories</Card.Title>
              <ListGroup>
                <ListGroup.Item
                  style={{ border: "none", borderBottom: "1px solid #ddd" }}
                >
                  📂 Project overview
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ border: "none", borderBottom: "1px solid #ddd" }}
                >
                  👥 Team collaboration
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ border: "none", borderBottom: "1px solid #ddd" }}
                >
                  🎨 Freelance project
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ border: "none", borderBottom: "1px solid #ddd" }}
                >
                  📅 Event organization
                </ListGroup.Item>
              </ListGroup>
              <Button
                variant="light"
                className="mt-3"
                style={{ borderRadius: "30px" }}
              >
                New task
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Task Tracking */}
        <Col md={6} style={{marginBottom:"10px"}}>
          <Card className="shadow-sm p-3 " style={{ borderRadius: "20px" }}>
            <Card.Body>
              <Card.Title>Task tracking</Card.Title>
              <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div>
                    <MdOutlineWatchLater className="me-2" />
                    Task planning
                  </div>
                  <span>
                    <strong>1 hour 25</strong>
                  </span>
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="ms-2"
                      style={{ borderRadius: "60%" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="ms-2"
                      style={{ borderRadius: "60%" }}
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="">
                    <MdOutlineWatchLater className="me-2" />
                    Design project logo
                  </div>
                  <span>30 min</span>
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      style={{ borderRadius: "60%" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="ms-2"
                      style={{ borderRadius: "60%" }}
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div>
                    <MdOutlineWatchLater className="me-2" />
                    Dashboard layout
                  </div>
                  <span>1 hour 48</span>
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      style={{ borderRadius: "60%" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="ms-2"
                      style={{ borderRadius: "60%" }}
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div>
                    <MdOutlineWatchLater className="me-2" />
                    Task wireframing
                  </div>
                  <span>17 Minutes 1</span>
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      style={{ borderRadius: "60%" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="ms-2"
                      style={{ borderRadius: "60%" }}
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div>
                    <MdOutlineWatchLater className="me-2" />
                    Project Mood Tracking
                  </div>
                  <span>15 hour 5</span>
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      style={{ borderRadius: "60%" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="ms-2"
                      style={{ borderRadius: "60%" }}
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col
          md={2}
          className="d-flex justify-content-center align-items-center shadow-sm"
          style={{
            border: "none",
            borderRadius: "20px",
            padding: "2px",
            backgroundColor: "#fff",
            height: "120px",
            marginTop: "210px",
            marginBottom:"10px"
          }}
        >
          <button
            className="btn btn-light shadow-sm"
            style={{ borderRadius: "8px" }}
          >
            New Widget
          </button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <CreateProjectModal setShowModal={setShowModal}  />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProjectDashboard;
