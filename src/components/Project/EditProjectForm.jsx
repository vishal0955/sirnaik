import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const EditProjectForm = (  { setShowModal}) => {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    deadline: "",
    priority: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form Submitted:", formData);
    setShowModal(false);
  };

  return (
  
    <Container fluid className="d-flex justify-content-center align-items-center bg-light">
      <div className="p-4 bg-white shadow-lg rounded-4" style={{ maxWidth: "700px", width: "100%" }}>
        {/* <h4 className="">Create/Edit Project</h4> */}
        
        <Form onSubmit={handleSubmit}>
          {/* Project Name */}
          <Form.Group className="mb-3">
            <Form.Label >Project Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter project name"
              name="projectName"
              className="shadow-sm rounded-4"
              value={formData.projectName}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter project description"
              name="description"
              className="shadow-sm rounded-4"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Deadline & Priority */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                  type="date"
                  name="deadline"
                  className="shadow-sm rounded-4"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Priority</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    label="Low"
                    name="priority"
                    value="Low"
                    checked={formData.priority === "Low"}
                    onChange={handleChange}
                    className="me-3"
                  />
                  <Form.Check
                    type="radio"
                    label="Medium"
                    name="priority"
                    value="Medium"
                    checked={formData.priority === "Medium"}
                    onChange={handleChange}
                    className="me-3"
                  />
                  <Form.Check
                    type="radio"
                    label="High"
                    name="priority"
                    value="High"
                    checked={formData.priority === "High"}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Tags */}
          <Form.Group className="mb-4">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add tags separated by commas"
              name="tags"
              className="shadow-sm rounded-4"
              value={formData.tags}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Buttons */}
          <div className="d-flex justify-content-end">
            <Button variant="light" className="me-3 rounded-4" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button type="submit" variant="primary" className="rounded-4">Submit</Button>
          </div>
        </Form>
      </div>
    </Container>

  );
};

export default EditProjectForm;
