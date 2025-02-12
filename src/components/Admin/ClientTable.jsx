import React, { useState } from "react";
import { Table, Dropdown, Button } from "react-bootstrap";
import { FaEllipsisV, FaPlus, FaFileImport, FaFileExport } from "react-icons/fa";


const ClientTable = () => {
  const [clients] = useState([
    { id: 11, name: "Prof. Eloise Labadie IV", email: "vincenza76@example.net3",mobile:"--", status: "Active", created: "29-01-2025" },
    { id: 10, name: "Halie Wilkinson Sr.", email: "yazmin54@example.org3", mobile:"--", status: "Active", created: "29-01-2025" },
    { id: 9, name: "Mr. Gaylord Hyatt I", email: "eichmann.jarod@example.com1", mobile:"--", status: "Active", created: "29-01-2025" },
    { id: 8, name: "Kailee Kuvalis", email: "myrl.yundt@example.net9",  mobile:"--", status: "Active", created: "29-01-2025" },
    { id: 7, name: "Jacey Grimes", email: "hagenes.wilber@example.com1", mobile:"--", status: "Active", created: "29-01-2025" },
    { id: 6, name: "Daija Pfeffer DVM", email: "avon@example.com0", mobile:"--", status: "Active", created: "29-01-2025" },
    { id: 5, name: "Cecile Brown", email: "kconsidine@example.net7", mobile:"--", status: "Active", created: "29-01-2025" },
    { id: 4, name: "Dr. Martina Champlin Jr.", email: "kevin05@example.org5", mobile:"--", status: "Active", created: "29-01-2025" },
    { id: 3, name: "Blaze Haag", email: "goyette.willa@example.com6", mobile:"--", status: "Active", created: "29-01-2025" },
    { id: 2, name: "Furman Harber", email: "orval31@example.com8", mobile:"--", status: "Active", created: "29-01-2025" },
  ]);

  return (
    <div className="container mt-4">
      {/* Header Buttons */}
      
      <div className="d-flex justify-content-between align-items-center mb-3">
      
        <Button variant="primary"><FaPlus /> Add Client</Button>
  
        <div>
        
          <Button variant="light" className="me-2"><FaFileImport /> Import</Button>
          <Button variant="light"><FaFileExport /> Export</Button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="table-responsive">
        <Table striped bordered hover className="text-center">
          <thead className="bg-light">
            <tr>
              <th><input type="checkbox" /></th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td><input type="checkbox" /></td>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.mobile}</td>
                <td><span>● </span>{client.status}</td>
                <td>{client.created}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle as="button" className="border-0 bg-transparent p-0">
                      <FaEllipsisV />
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                      <Dropdown.Item href="#">Edit</Dropdown.Item>
                      <Dropdown.Item href="#">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <span>Showing 1 to 10 of {clients.length} entries</span>
        <div>
          <Button variant="light" className="me-2">Previous</Button>
          <Button variant="primary">1</Button>
          <Button variant="light" className="ms-2">2</Button>
          <Button variant="light" className="ms-2">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default ClientTable;
