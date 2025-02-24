import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { FaSearch, FaEllipsisH, FaBell, FaUserCircle } from "react-icons/fa";
import TaskForm from "../Forms/AddTask";
 

const TaskBoard = () => {
  const [ShowAddTaskModal, setShowAddTaskModal] = useState(false);
  const handleAddTask = () => {
    setShowAddTaskModal(true);
  };

  const taskCategories = {
    todo: [
      {
        name: "Task description",
        tags: ["High priority", "Urgent task", "Important"],
      },
      { name: "Task assignee", tags: ["Live", "Deployed task", "Completed"] },
      {
        name: "Task assignee",
        tags: ["Bug fixing", "Development task", "Bug resolution"],
      },
    ],
    inProgress: [
      {
        name: "Task assignee",
        tags: ["On hold", "Blocked task", "Needs review"],
      },
    ],
    reviewApprove: [
      {
        name: "Task assignee",
        tags: ["Approved", "Rejected", "Needs revision"],
      },
      {
        name: "Task assignee",
        tags: ["Testing phase", "Quality assurance", "Testing"],
      },
    ],
    deployed: [
      {
        name: "Task assignee",
        tags: ["Completed", "Pending review", "Ready for deployment"],
      },
    ],
  };

  return (
    <Container fluid className="p-4">
      {/* Top Navigation */}
      {/* <Row className="mb-4 align-items-center">
        <Col md={6} style={{ position: "relative" }}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search tasks"
              className="shadow-sm"
              style={{
                paddingLeft: "35px", // आइकॉन के लिए जगह
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
        <Col md={6} className="text-end">
          <FaBell className="me-3" size={20} />
          <FaUserCircle size={30} />
         
        </Col>
      </Row> */}
      <hr/>

      {/* Task Board Title */}
      <h4 className="fw-bold">Task details</h4>
      <p>View task details and progress</p>
      
      
      <div className="d-flex flex-column justify-content-end align-items-end     ">
      <Button variant="primary" className="rounded-4" onClick={handleAddTask}>Assign task</Button>
      
      <div className="d-flex gap-4">
        <p>Task</p>
        <p>Assigned to</p>
        <p>Category</p>
        <p>Due Date</p>
      </div>

      {/* Right Side: Assign Task Button */}
     
    </div>
    <hr/>

      {/* Task Board */}
      <Row className="g-4">
        {/* To Do */}
        <Col md={3}>
          <h5>To do</h5>
          {taskCategories.todo.map((task, index) => (
            <Card key={index} className="p-3 mb-3 shadow-lg rounded-4 ">
              <div className="d-flex justify-content-between">
                <strong>{task.name}</strong>
                <FaEllipsisH />
              </div>
              <div className="mt-2">
                {task.tags.map((tag, i) => (
                  <Button
                    key={i}
                    variant={i === task.tags.length - 1 ? "light" : "primary"}
                    size="sm"
                    className="me-1 mb-1"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </Col>

        {/* In Progress */}
        <Col md={3}>
          <h5>In progress</h5>
          {taskCategories.inProgress.map((task, index) => (
            <Card key={index} className="p-3 mb-3 shadow-lg rounded-4">
              <div className="d-flex justify-content-between">
                <strong>{task.name}</strong>
                <FaEllipsisH />
              </div>
              <div className="mt-2">
                {task.tags.map((tag, i) => (
                  <Button
                    key={i}
                    variant={i === task.tags.length - 1 ? "light" : "primary"}
                    size="sm"
                    className="me-1 mb-1"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </Col>

        {/* Review & Approve */}
        <Col md={3}>
          <h5>Review & approve</h5>
          {taskCategories.reviewApprove.map((task, index) => (
            <Card key={index} className="p-3 mb-3 shadow-lg rounded-4 ">
              <div className="d-flex justify-content-between">
                <strong>{task.name}</strong>
                <FaEllipsisH />
              </div>
              <div className="mt-2">
                {task.tags.map((tag, i) => (
                  <Button
                    key={i}
                    variant={i === task.tags.length - 1 ? "light" : "primary"}
                    size="sm"
                    className="me-1 mb-1"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </Col>

        {/* Deployed */}
        <Col md={3}>
          <h5>Deployed</h5>
          {taskCategories.deployed.map((task, index) => (
            <Card key={index} className="p-3 mb-3 shadow-lg rounded-4">
              <div className="d-flex justify-content-between">
                <strong>{task.name}</strong>
                <FaEllipsisH />
              </div>
              <div className="mt-2">
                {task.tags.map((tag, i) => (
                  <Button
                    key={i}
                    variant={i === task.tags.length - 1 ? "light" : "primary"}
                    size="sm"
                    className="me-1 mb-1"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </Col>
      </Row>

      <Modal show={ShowAddTaskModal} onHide={() => setShowAddTaskModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
<TaskForm setShowAddTaskModal={setShowAddTaskModal} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default TaskBoard;
