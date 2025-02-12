import React, { useState } from "react";
import AddEmployee from "./AddEmployee";
import { useNavigate } from "react-router-dom";
import { Table, Dropdown, Modal, } from "react-bootstrap";
import AddClient from "./AddClient";

const EmployeeTableHeader = ({ title, buttonText }) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
  
    const formButton = (buttonText) => buttonText.toLowerCase().replace(/\s+/g, '');

    const handleButtonClick = () => {
      if (buttonText === "Add Employee" || buttonText === "Add Client" || buttonText === "Add Log") {
        setShowModal(true);
      } else {
        navigate(`/${formButton(buttonText)}`);
      }
    };
  
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3">
        <div className="d-flex justify-content-between align-items-center">
          {/* Left Section */}
          <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
            <a className="navbar-brand fw-bold text-primary me-3" href="#">
              {title}
            </a>
            <button className="btn btn-primary " onClick={handleButtonClick}>
           {buttonText}
            </button>
              </div>
      
              <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
            
          <Dropdown className="me-2  btn-primary">
        <Dropdown.Toggle  id="employee-dropdown">
          {title}: All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>All</Dropdown.Item>
          <Dropdown.Item>Active</Dropdown.Item>
          <Dropdown.Item>Inactive</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

     {buttonText === "Add Employee" &&  <Dropdown className="me-2">
        <Dropdown.Toggle  id="designation-dropdown">
          Designation: All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>All</Dropdown.Item>
          <Dropdown.Item>Project Manager</Dropdown.Item>
          <Dropdown.Item>Production Team</Dropdown.Item>
          <Dropdown.Item>Junior</Dropdown.Item>
          <Dropdown.Item>Designer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> 
      }
               </div>
          </div>
        </div>
  
        {/* Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{buttonText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {buttonText === "Add Employee" ? <AddEmployee /> : buttonText === "Add Client" ? <AddClient /> : null}
          </Modal.Body>
        </Modal>
      </div>
    );
  };
  export default EmployeeTableHeader;