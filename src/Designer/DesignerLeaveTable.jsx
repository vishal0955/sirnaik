import React, { useState } from "react";
import { Table, Button, Badge,Modal } from "react-bootstrap";
import { MoreVertical, List, Grid, User } from "lucide-react";
import DesignerLeaveForm from "./DesignerLeaveForm";

const DesignerLeaveTable = () => {
    const [showModal, setShowModal] = useState(false);
    
  const leaveData = [
    {
      id: 1,
      employee: { name: "Cordia Rau", role: "Trainee", avatar: "https://via.placeholder.com/40" },
      leaveDate: "15-02-2025 (Saturday)",
      duration: "Full Day",
      status: "Pending",
      type: "Sick",
      paid: true,
    },
  ];
   const handleClick=()=>{
    setShowModal(true);
   }

  return (
    <div className="container mt-4">
      {/* Header Buttons */}
      <div className="d-flex justify-content-between mb-3">
        <div>
          <Button variant="primary" className="me-2" onClick={handleClick}>
            + New Leave
          </Button>
          <Button variant="outline-secondary">Export</Button>
        </div>
        <div>
          <Button variant="light" className="me-2">
            <List size={18} />
          </Button>
          <Button variant="light" className="me-2">
            <Grid size={18} />
          </Button>
          <Button variant="light">
            <User size={18} />
          </Button>
        </div>
      </div>

      {/* Leave Table */}
      <div className="table-responsive">
        <Table striped bordered hover className="align-middle">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Leave Date</th>
              <th>Duration</th>
              <th>Leave Status</th>
              <th>Leave Type</th>
              <th>Paid</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((leave) => (
              <tr key={leave.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={leave.employee.avatar}
                      alt={leave.employee.name}
                      className="rounded-circle me-2"
                      width="40"
                      height="40"
                    />
                    <div>
                      <strong>{leave.employee.name}</strong>
                      <div className="text-muted small">{leave.employee.role}</div>
                    </div>
                  </div>
                </td>
                <td>{leave.leaveDate}</td>
                <td>{leave.duration}</td>
                <td>
                  <Badge bg="warning" text="dark">
                    ● {leave.status}
                  </Badge>
                </td>
                <td>
                  <Badge bg="danger">{leave.type}</Badge>
                </td>
                <td>
                  <Badge bg="success">{leave.paid ? "Paid" : "Unpaid"}</Badge>
                </td>
                <td>
                  <Button variant="light">
                    <MoreVertical size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <span>Showing 1 to 1 of 1 entries</span>
        <div>
          <Button variant="light" className="me-2">
            Previous
          </Button>
          <Button variant="primary">1</Button>
          <Button variant="light" className="ms-2">
            Next
          </Button>
        </div>
      </div>
      
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
    <DesignerLeaveForm />
          </Modal.Body>
        </Modal>
    </div>
  );
};

export default DesignerLeaveTable;
