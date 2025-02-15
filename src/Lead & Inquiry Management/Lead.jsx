import React, { useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import AddLeadContact from "../components/Forms/AddLeadContract";

const Lead = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick=()=>{
    setShowModal(true);
   }
   const handleClose =() => {
    setShowModal(false);
   }

  const [leads, setLeads] = useState([
    { id: 11, name: "Alvina Tillman", email: "fake@example.com", date: "29-01-2025" },
    { id: 10, name: "Mr. Eddie Jenkins", email: "fake@example.com", date: "29-01-2025" },
    { id: 9, name: "Ahmed Ankunding", email: "fake@example.com", date: "29-01-2025" },
    { id: 8, name: "Justine Franeki", email: "fake@example.com", date: "29-01-2025" },
    { id: 7, name: "Misael Padberg", email: "fake@example.com", date: "29-01-2025" },
    { id: 6, name: "Cary Daugherty PhD", email: "fake@example.com", date: "29-01-2025" },
    { id: 5, name: "Efrain Feil", email: "fake@example.com", date: "29-01-2025" },
    { id: 4, name: "Royal Emser", email: "fake@example.com", date: "29-01-2025" },
    { id: 3, name: "Chelsea Weber", email: "fake@example.com", date: "29-01-2025" },
    { id: 2, name: "Mrs. Yesenia Okuneva", email: "fake@example.com", date: "29-01-2025" },
  ]);

  return (
    <div className="container mt-4">
      <h5 className="mt-3 mb-4">Leads</h5>
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={handleClick}>+ Add Lead Contact</Button>
        <div>
          <Button variant="outline-secondary" className="me-2">Lead Form</Button>
          <Button variant="outline-secondary" className="me-2">Import</Button>
          <Button variant="outline-secondary">Export</Button>
        </div>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>ID</th>
            <th>Contact Name</th>
            <th>Email</th>
            <th>Lead Owner</th>
            <th>Added By</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>--</td>
              <td>--</td>
              <td>{lead.date}</td>
              <td>
                <Button variant="light">
                  <FaEllipsisV />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <div className="d-flex justify-content-between">
        <p>Showing 1 to 10 of {leads.length} entries</p>
        <div>
          <Button variant="outline-secondary" className="me-2">Previous</Button>
          <Button variant="primary">1</Button>
          <Button variant="outline-secondary" className="ms-2">Next</Button>
        </div>
      </div>
      
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
           <AddLeadContact />
          </Modal.Body>
        </Modal>
    </div>
  );
};

export default Lead;
