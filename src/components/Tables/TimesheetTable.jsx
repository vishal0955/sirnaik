import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import TableHeader from "./TableHeader";

const initialTasks = [
  {
    id: "T001",
    code: "PROJ-001",
    task: "Design UI for dashboard",
    employee: "John Doe",
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    totalHours: "8h",
  },
  {
    id: "T002",
    code: "PROJ-002",
    task: "Develop API endpoints",
    employee: "Jane Smith",
    startTime: "10:00 AM",
    endTime: "06:00 PM",
    totalHours: "8h",
  },
  {
    id: "T003",
    code: "PROJ-003",
    task: "Write test cases",
    employee: "Mark Lee",
    startTime: "08:00 AM",
    endTime: "04:00 PM",
    totalHours: "8h",
  },
];

const TimesheetTable = () => {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <Table responsive bordered hover className="tabledown">
      <thead>
        <tr className="table-secondary">
          <th>Id</th>
          <th>Code</th>
          <th>Task</th>
          <th>Employee</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Total Hours</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.id}</td>
            <td>{task.code}</td>
            <td>{task.task}</td>
            <td>{task.employee}</td>
            <td>{task.startTime}</td>
            <td>{task.endTime}</td>
            <td>{task.totalHours}</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <FaEllipsisV />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Edit</Dropdown.Item>
                  <Dropdown.Item href="#">Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Timesheet = () => {
  return (
    <div>
      <TableHeader title="Timesheet" buttonText="Add Log" />
      <TimesheetTable />
    </div>
  );
};

export default Timesheet;