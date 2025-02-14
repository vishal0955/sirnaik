import React from "react";
import { Table, Button, Form } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";

const LeaveTable = () => {
  const leaves = [
    { name: "Ambrose Jenkins", role: "Team Lead", date: "19-01-2025 (Sunday)", duration: "Full Day", status: "Approved", type: "Sick", paid: "Paid" },
    { name: "Ambrose Jenkins", role: "Team Lead", date: "14-01-2025 (Tuesday)", duration: "Full Day", status: "Pending", type: "Sick", paid: "Paid" },
    { name: "Ambrose Jenkins", role: "Team Lead", date: "25-01-2025 (Saturday)", duration: "Full Day", status: "Pending", type: "Sick", paid: "Paid" },
    { name: "Ambrose Jenkins", role: "Team Lead", date: "15-01-2025 (Wednesday)", duration: "Full Day", status: "Pending", type: "Sick", paid: "Paid" },
    { name: "Ambrose Jenkins", role: "Team Lead", date: "09-01-2025 (Thursday)", duration: "Full Day", status: "Pending", type: "Sick", paid: "Paid" },
    { name: "Ambrose Jenkins", role: "Team Lead", date: "16-01-2025 (Thursday)", duration: "Full Day", status: "Rejected", type: "Sick", paid: "Paid" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Approved": return "success";
      case "Pending": return "warning";
      case "Rejected": return "danger";
      default: return "secondary";
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <Button variant="primary" className="mb-2">+ New Leave</Button>
        <Button variant="outline-secondary" className="mb-2">Export</Button>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><Form.Check /></th>
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
            {leaves.map((leave, index) => (
              <tr key={index}>
                <td><Form.Check /></td>
                <td>
                  <div>{leave.name}</div>
                  <small className="text-muted">{leave.role}</small>
                </td>
                <td>{leave.date}</td>
                <td>{leave.duration}</td>
                <td>
                  <span className={`badge bg-${getStatusBadge(leave.status)}`}>{leave.status}</span>
                </td>
                <td><span className="badge bg-danger">{leave.type}</span></td>
                <td><span className="badge bg-success">{leave.paid}</span></td>
                <td><FaEllipsisV /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default LeaveTable;
