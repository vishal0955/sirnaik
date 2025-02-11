
// import React, { useState } from "react";
// import { Table, Dropdown } from "react-bootstrap";
// import { FaEllipsisV } from "react-icons/fa";
// import TableHeader from "./TableHeader";

// const priorityColors = {
//   High: "danger",
//   Medium: "warning",
//   Low: "primary",
//   Normal: "success",
// };

// const statusColors = {
//   Pending: "warning",
//   InProgress: "info",
//   "On Hold": "danger",
//   "To Start": "info",
//   Completed: "success",
//   Cancelled: "secondary",
// };

// const initialJobs = [
//   {
//     jobId: "J001",
//     jobName: "Banner Design",
//     projectId: "P1001",
//     projectName: "Summer Campaign",
//     client: "ABC Corp",
//     promotion: "Discount Offer",
//     brand: "XYZ",
//     subBrand: "Premium",
//     flavour: "N/A",
//     dateCreated: "2025-02-01",
//     targetDate: "2025-02-10",
//     packCode: "PK123",
//     fgCode: "FG456",
//     barcode: "789456123",
//     instructions: "Use brand colors.",
//     priority: "High",
//     status: "InProgress",
//   },
//   {
//     jobId: "J002",
//     jobName: "Social Media Ad",
//     projectId: "P1002",
//     projectName: "Winter Campaign",
//     client: "DEF Ltd",
//     promotion: "Holiday Special",
//     brand: "LMN",
//     subBrand: "Budget",
//     flavour: "N/A",
//     dateCreated: "2025-02-02",
//     targetDate: "2025-02-15",
//     packCode: "PK789",
//     fgCode: "FG987",
//     barcode: "123456789",
//     instructions: "Follow branding guidelines.",
//     priority: "Medium",
//     status: "Pending",
//   },
// ];

//  export const TaskTable = () => {
//   const [jobs, setJobs] = useState(initialJobs);

//   const handlePriorityChange = (index, priority) => {
//     const updatedJobs = [...jobs];
//     updatedJobs[index].priority = priority;
//     setJobs(updatedJobs);
//   };

//   const handleStatusChange = (index, status) => {
//     const updatedJobs = [...jobs];
//     updatedJobs[index].status = status;
//     setJobs(updatedJobs);
//   };

//   return (
//     <Table responsive bordered hover className="tabledown">
//       <thead>
//         <tr className="table-secondary">
//           <th>Job ID</th>
//           <th>Job Name</th>
//           <th>Project</th>
//           <th>Client</th>
//           <th>Promotion</th>
//           <th>Brand</th>
//           <th>Date Created</th>
//           <th>Target Date</th>
//           <th>Pack Code</th>
//           <th>FG Code</th>
//           <th>Barcode</th>
//           <th>Priority</th>
//           <th>Status</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {jobs.map((job, index) => (
//           <tr key={index}>
//             <td >{job.jobId}</td>
//             <td>{job.jobName}</td>
//             <td>{job.projectName} ({job.projectId})</td>
//             <td>{job.client}</td>
//             <td>{job.promotion}</td>
//             <td>{job.brand} - {job.subBrand}</td>
//             <td>{job.dateCreated}</td>
//             <td>{job.targetDate}</td>
//             <td>{job.packCode}</td>
//             <td>{job.fgCode}</td>
//             <td>{job.barcode}</td>
//             <td>
//               <Dropdown onSelect={(eventKey) => handlePriorityChange(index, eventKey)}>
//                 <Dropdown.Toggle variant={priorityColors[job.priority]} id="dropdown-priority">
//                   {job.priority}
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   {Object.keys(priorityColors).map((priority) => (
//                     <Dropdown.Item key={priority} eventKey={priority} className={`text-${priorityColors[priority]}`}>
//                       {priority}
//                     </Dropdown.Item>
//                   ))}
//                 </Dropdown.Menu>
//               </Dropdown>
//             </td>
//             <td>
//               <Dropdown onSelect={(eventKey) => handleStatusChange(index, eventKey)}>
//                 <Dropdown.Toggle variant={statusColors[job.status]} id="dropdown-status">
//                   {job.status}
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   {Object.keys(statusColors).map((status) => (
//                     <Dropdown.Item key={status} eventKey={status} className={`text-${statusColors[status]}`}>
//                       {status}
//                     </Dropdown.Item>
//                   ))}
//                 </Dropdown.Menu>
//               </Dropdown>
//             </td>
//             <td>
//               <Dropdown>
//                 <Dropdown.Toggle variant="light" id="dropdown-basic">
//                   <FaEllipsisV />
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#">Edit</Dropdown.Item>
//                   <Dropdown.Item href="#">Delete</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// const TaskPage = () => {
//   return (
//      <div>
//        <TableHeader title="All Tasks" buttonText="Add Task" />  
//        <TaskTable />
//       </div>
   
//   );
// };

// export default TaskPage;

import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import TableHeader from "./TableHeader";

const priorityColors = {
  High: "danger",
  Medium: "warning",
  Low: "primary",
  Normal: "success",
};

const statusColors = {
  Pending: "warning",
  InProgress: "info",
  "On Hold": "danger",
  "To Start": "info",
  Completed: "success",
  Cancelled: "secondary",
};

const initialJobs = [
  {
    jobId: "J001",
    jobName: "Banner Design",
    projectId: "P1001",
    projectName: "Summer Campaign",
    client: "ABC Corp",
    promotion: "Discount Offer",
    brand: "XYZ",
    subBrand: "Premium",
    flavour: "N/A",
    dateCreated: "2025-02-01",
    targetDate: "2025-02-10",
    packCode: "PK123",
    fgCode: "FG456",
    barcode: "789456123",
    instructions: "Use brand colors.",
    priority: "High",
    status: "InProgress",
  },
  {
    jobId: "J002",
    jobName: "Social Media Ad",
    projectId: "P1002",
    projectName: "Winter Campaign",
    client: "DEF Ltd",
    promotion: "Holiday Special",
    brand: "LMN",
    subBrand: "Budget",
    flavour: "N/A",
    dateCreated: "2025-02-02",
    targetDate: "2025-02-15",
    packCode: "PK789",
    fgCode: "FG987",
    barcode: "123456789",
    instructions: "Follow branding guidelines.",
    priority: "Medium",
    status: "Pending",
  },
];

export const TaskTable = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handlePriorityChange = (index, priority) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].priority = priority;
    setJobs(updatedJobs);
  };

  const handleStatusChange = (index, status) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = status;
    setJobs(updatedJobs);
  };

  // const handleJobClick = (jobId) => {
  //   // Navigate to the details page with the jobId as a parameter
  //   navigate(`/details/${jobId}`);
  // };
  const handleJobClick = () => {
    // Navigate to the details page with the jobId as a parameter
    navigate(`/taskdetails`);
  };

  return (
    <Table responsive bordered hover className="tabledown">
      <thead>
        <tr className="table-secondary">
          <th>Job ID</th>
          <th>Job Name</th>
          <th>Project</th>
          <th>Client</th>
          <th>Promotion</th>
          <th>Brand</th>
          <th>Date Created</th>
          <th>Target Date</th>
          <th>Pack Code</th>
          <th>FG Code</th>
          <th>Barcode</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr key={index}>
            <td 
              style={{ cursor: 'pointer'}} // Add styles for clickable cell
              onClick={() => handleJobClick()} // On click navigate to details
            >
              {job.jobId}
             
            </td>
            <td 
              style={{ cursor: 'pointer'}} // Add styles for clickable cell
              onClick={() => handleJobClick()} // On click navigate to details
            >
              {job.jobName}
            </td>
            <td>{job.projectName} ({job.projectId})</td>
            <td>{job.client}</td>
            <td>{job.promotion}</td>
            <td>{job.brand} - {job.subBrand}</td>
            <td>{job.dateCreated}</td>
            <td>{job.targetDate}</td>
            <td>{job.packCode}</td>
            <td>{job.fgCode}</td>
            <td>{job.barcode}</td>
            <td>
              <Dropdown onSelect={(eventKey) => handlePriorityChange(index, eventKey)}>
                <Dropdown.Toggle variant={priorityColors[job.priority]} id="dropdown-priority">
                  {job.priority}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {Object.keys(priorityColors).map((priority) => (
                    <Dropdown.Item key={priority} eventKey={priority} className={`text-${priorityColors[priority]}`}>
                      {priority}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </td>
            <td>
              <Dropdown onSelect={(eventKey) => handleStatusChange(index, eventKey)}>
                <Dropdown.Toggle variant={statusColors[job.status]} id="dropdown-status">
                  {job.status}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {Object.keys(statusColors).map((status) => (
                    <Dropdown.Item key={status} eventKey={status} className={`text-${statusColors[status]}`}>
                      {status}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <FaEllipsisV />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                          <Dropdown.Item href="#">Post To Production</Dropdown.Item>
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

const TaskPage = () => {
  return (
    <div>
      <TableHeader title="All Tasks" buttonText="Add Task" />  
      <TaskTable />
    </div>
  );
};

export default TaskPage;
