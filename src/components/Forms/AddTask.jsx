

import React, { useState, useEffect } from "react";
import { initialEmployees } from "../Admin/EmployeeList";

export const initialProjects = [
  { id: "BOT", name: "Chatbots", members: 5, startDate: "2024-12-29", deadline: "2025-04-29", client: "Kailee Kuvalis", priority: "Normal", status: "Pending" },
  { id: "ALT", name: "Android Ticketing", members: 6, startDate: "2024-12-29", deadline: "2025-04-29", client: "Laila Gerlach", priority: "High", status: "On Hold" },
  { id: "OMF", name: "Opinion Mining", members: 7, startDate: "2024-12-29", deadline: "2025-04-29", client: "Halie Wilkinson", priority: "Medium", status: "To Start" },
  { id: "WEB", name: "Web Scraper", members: 3, startDate: "2024-11-15", deadline: "2025-03-20", client: "John Doe", priority: "High", status: "InProgress" },
  { id: "AIX", name: "AI Chat Assistant", members: 10, startDate: "2024-10-05", deadline: "2025-07-10", client: "Jane Smith", priority: "Low", status: "Completed" },
];

const clients = [
  {
    clientId: "C001",
    name: "ABC Corp",
    email: "contact@abccorp.com",
    mobile: "123-456-7890",
    status: "Active",
    created: "2024-01-10",
  },
  {
    clientId: "C002",
    name: "XYZ Ltd",
    email: "support@xyzltd.com",
    mobile: "987-654-3210",
    status: "Inactive",
    created: "2023-12-05",
  },
  {
      clientId: "C003",
      name: "DEF Ltd",
      email: "support@xsedyzltd.com",
      mobile: "987-654-3210",
      status: "Inactive",
      created: "2023-12-05",
    },
];
const TaskForm = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Load employees from initialEmployees array
    setEmployees(initialEmployees);
  }, []);

  

  return (
    <div className="container mt-4">
    
      <form>
        <div className="row">
          {/* Left Side Fields */}
          <div className="col-md-6">
            <div className="mb-2">
              <label className="form-label">Job ID</label>
              <input type="text" className="form-control" />
            </div>
            
         
            <div className="mb-2">
            <label className="form-label">Project Name</label>
            <select className="form-control">

        <option value="">Select a project</option>
        {initialProjects.map((project) => (
          <option key={project.id} value={project.name}>
            {project.name}
          </option>
        ))}
      </select>
            </div>
            <div className="mb-2">
              <label className="form-label">Client</label>
              <select className="form-control">

        <option value="">Select Client</option>
        {clients.map((client) => (
          <option key={client.clientId} value={client.name}>
            {client.name}
          </option>
        ))}
      </select>
            </div>
            <div className="mb-2">
              <label className="form-label">Promotion</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Brand</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Sub-Brand</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Flavour</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Pack Type</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Pack Size</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          {/* Right Side Fields */}
          <div className="col-md-6">
            <div className="mb-2">
              <label className="form-label">Date Created</label>
              <input type="date" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Target Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Pack Code</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">FG Code</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Barcode</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">TD No.</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Dimensions</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Trim Size</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">No. of Colours</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Print Process</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>

        {/* Assigned Members Dropdown */}
        <div className="mb-3">
          <label className="form-label">Assign Members</label>
          <select className="form-select">
            <option>Nothing selected</option>
            {employees.map((employee, index) => (
              <option key={index} value={employee.employeeId}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        {/* Instructions & Attachments */}
        <div className="mb-3">
          <label className="form-label">Instructions:</label>
          <div className="d-flex">
            <input type="file" className="form-control me-2" />
          </div>
        </div>
        
        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-success">Save & Close</button>
          <button type="submit" className="btn btn-success">Save & Add...</button>
          <button type="button" className="btn btn-danger">Discard</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
