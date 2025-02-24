import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
   Image,
  InputGroup,
} from "react-bootstrap";
import {
  FaSearch,
  FaEdit,
  FaUpload,
  FaPlusCircle,
  FaTrash,
} from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaPaperclip } from "react-icons/fa";

const ProjectUpdate = () => {
  const projectUpdates = [
    { title: "Project details", description: "New project created" },
    { title: "Project details", description: "Project task completed" },
    { title: "Project brainstorming", description: "Project task updated" },
    { title: "Project illustrations", description: "Project task on hold" },
    { title: "Project summary", description: "Project task completed" },
  ];

  return (
    <Container fluid className="p-4">
      {/* Search Bar & Buttons */}
      <Row className="mb-4">
      <Col md={10}>
      <div
        className="shadow-lg p-3 d-flex flex-column flex-md-row align-items-center justify-content-between"
        style={{ borderRadius: "30px", backgroundColor: "#fff" }}
      >
        {/* Search Input */}
        <InputGroup
          className="shadow-sm mb-2 mb-md-0"
          style={{ borderRadius: "40px", width: "250px" }}
        >
          <Form.Control
            type="text"
            placeholder="Enter Project Name"
            style={{
              border: "none",
              borderRadius: "40px",
              padding: "10px",
            }}
          />
          <InputGroup.Text
            style={{
              border: "none",
              borderRadius: "40px",
              backgroundColor: "#f1f1f1",
              cursor: "pointer",
            }}
          >
            <IoMdSearch style={{ fontSize: "20px" }} />
          </InputGroup.Text>
        </InputGroup>

        {/* Buttons */}
        <div className="d-flex align-items-center gap-2 flex-wrap mt-2 mt-md-0">
          <Button
            variant="primary"
            className="px-4"
            style={{ borderRadius: "20px" }}
          >
            Create Project
          </Button>
          <Button
            variant="outline-primary"
            className="px-4"
            style={{ borderRadius: "20px" }}
          >
            Edit
          </Button>
        </div>
      </div>
    </Col>
      </Row>

      <Row>
        {/* Left Sidebar: Project Updates */}
      

<Col md={4}>
  <Card className="shadow-sm p-3">
    <h5>Project Updates</h5>
    <ul className="list-unstyled">
      {projectUpdates.map((update, index) => (
        <li key={index} className=" ">
          <div className="d-flex align-items-center justify-content-between">
      
      {/* Left Section: Checkbox, Title, and Description */}
      <div className="d-flex align-items-center">
        <Form.Check type="checkbox" checked className="me-3" />
        <div>
          <strong>{update.title}</strong>
          <p className="text-muted mb-0">{update.description}</p>
        </div>
      </div>

      {/* Right Section: Circular Image with Small Size */}
      <div>
        <Image
          src="https://i.ibb.co/ZpYpVjVw/demo-text-businessman-dark-vintage-background-108609906.webp"
          roundedCircle
          alt="User"
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
        />
      </div>
      
    </div>

          
        </li>
      ))}
    </ul>
  </Card>
</Col>


        {/* Right Panel: Project Details */}
        <Col md={8}>
          <Card className="shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h4>Project details</h4>
              <Button variant="light">
                <FaPlusCircle />
              </Button>
            </div>

            {/* Project Info */}
            <p>
              <strong>Project team:</strong>
              <button
                style={{
                  border: "none",
                  borderRadius: "20px",
                  backgroundColor: "lightgrey",
                  marginLeft: "10px",
                }}
              >
                {" "}
                Myself
              </button>
            </p>
            <p>
              <strong>Project deadline:</strong>
              <button
                style={{
                  border: "none",
                  borderRadius: "20px",
                  backgroundColor: "lightgrey",
                  marginLeft: "10px",
                }}
              >
                Today
              </button>
            </p>
            <p>
              <strong>Project tasks:</strong>{" "}
              <button
                style={{
                  border: "none",
                  borderRadius: "20px",
                  backgroundColor: "lightgrey",
                  marginLeft: "10px",
                }}
              >
                Confidential
              </button>
            </p>
            <p>
              <strong>Project priority:</strong>
              <button
                style={{
                  border: "none",
                  borderRadius: "20px",
                  backgroundColor: "lightgrey",
                  marginLeft: "10px",
                }}
              >
                Medium
              </button>
            </p>

            {/* Project Attachments */}
            <h5>Project attachments</h5>
            <div
              className="d-flex justify-content-between shadow-sm p-3"
              style={{ borderRadius: "20px" }}
            >
              <div>
                <button
                  style={{
                    border: "none",
                    background: "white",
                    
                    borderRadius: "8px",
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                    marginLeft:"20px"
                  }}
                >
                  <FaPaperclip size={20} color="gray" />
                </button>
                <input
                  type="text"
                  placeholder="no Project Attachement"
                  style={{ border: "none" }}
                />
              </div>
              <div>
                <button
                  style={{
                    border: "none",
                    borderRadius: "20px",
                    backgroundColor: "lightgrey",
                  }}
                >
                  Upload
                </button>
              </div>
            </div>

            {/* Project Links */}
            <h5>Project links</h5>
           
            <div
              className="d-flex justify-content-between shadow-sm p-3"
              style={{ borderRadius: "20px" }}
            >
              <div>
              <button
              style={{
                border: "none",
                background: "white",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                marginLeft:"20px"
              }}
            >
              <FaPaperclip size={20} color="gray" />
            </button>
                <input
                  type="text"
                  placeholder="no Project Links"
                  style={{ border: "none" }}
                />
              </div>
              <div>
                <button
                  style={{
                    border: "none",
                    borderRadius: "20px",
                    backgroundColor: "lightgrey",
                  }}
                >
                  Includes
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="d-flex justify-content-end mt-5">
              <Button
                variant="light"
                className="me-3"
                style={{ borderRadius: "20px" }}
              >
                Archive project
              </Button>
              <Button variant="primary" style={{ borderRadius: "20px" }}>
                <FaTrash /> Delete project
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectUpdate;
