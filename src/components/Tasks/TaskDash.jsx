import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const TaskDash = () => {
  const tasks = [
    {
      title: "Design Homepage",
      due: "2023-10-15",
      priority: "High",
      description: "Create a responsive homepage layout.",
    },
    {
      title: "Develop API Endpoint",
      due: "2023-10-20",
      priority: "Medium",
      description: "Implement and test the new API endpoint.",
    },
    {
      title: "Test User Registration",
      due: "2023-10-25",
      priority: "Low",
      description: "Conduct thorough testing of the registration process.",
    },
  ];

  return (
    <Container fluid className="p-4">
      {/* Navbar */}
      {/* <Row className="mb-4 align-items-center">
        <Col>
          <h3 className="fw-bold"> TaskPro</h3>
        </Col>
        <Col className="text-end">
          <span className="me-3">Dashboard</span>
          <span className="me-3">Task Management</span>
          <span>Project Management</span>
        </Col>
      </Row> */}

      {/* Main Layout */}
      <Row className="g-4">
        {/* Kanban Columns */}
        <Col md={9}>
          <Row className="g-4">
            {tasks.map((task, index) => (
              <Col key={index} md={4}>
                <Card className="p-3 shadow-lg rounded-4">
                  <h5 className="fw-bold">{task.title}</h5>
                  <p>Due: {task.due}</p>
                  <p>Priority: {task.priority}</p>
                  <p>{task.description}</p>
                  <div className="d-flex gap-2">
                    <Button variant="primary" className="rounded-5">Update</Button>
                    <Button variant="light "  className="rounded-5">Assign</Button>
                    <Button variant="primary"  className="rounded-5">Comment</Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Task Creation Panel */}
        <Col md={3}>
          <Card className="p-3 shadow-lg rounded-4">
            <h5 className="fw-bold">Create New Task</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Task Name</Form.Label>
                <Form.Control type="text" placeholder="Enter task name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Priority</Form.Label>
                <Form.Select>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Labels</Form.Label>
                <Form.Control type="text" placeholder="Add labels" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Add comments" />
              </Form.Group>
              <Button variant="light" className="w-100 rounded-5">Add Task</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskDash;
