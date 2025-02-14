import React, { useState } from "react";
import { Container, Table, Button,Dropdown } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TaskForm from "../Forms/AddTask";
import TableHeader from 
export const TaskTable = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowModal(true);
  };
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

  const [tasks, setTasks] = useState([
    {
      item: "00001",
      brand: "Galaxy",
      subBrand: "Flutes",
      flavour: "Vanilla",
      packType: "Overwrap",
      size: "300g",
      packCode: "1234567",
      fgCode: "98765432",
      barcode: "600001234567",
      status: "In Progress",
    },
    {
      item: "00002",
      brand: "Galaxy",
      subBrand: "Flutes",
      flavour: "Vanilla",
      packType: "Overwrap",
      size: "300g",
      packCode: "1234567",
      fgCode: "98765432",
      barcode: "600001234567",
      status: "In Progress",
    },
  ]);
  const handleStatusChange = (index, status) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = status;
    setJobs(updatedJobs);
  };
  const handleJobClick = () => {

    navigate(`/taskdetails`);
  };

  return (
    <div>
      <Container className="mt-4">
        <div className="d-flex justify-content-between mb-3">
          <Button variant="primary" onClick={handleClick}>
            <FaPlus className="me-2" /> Add Task
          </Button>
        </div>

        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Item #</th>
              <th>Brand</th>
              <th>Sub Brand</th>
              <th>Flavour</th>
              <th>PackType</th>
              <th>Size</th>
              <th>PackCode</th>
              <th>FGCode</th>
              <th>Barcode</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td   style={{ cursor: 'pointer'}}
              onClick={() => handleJobClick()} >{task.item}</td>
                <td   style={{ cursor: 'pointer'}}
              onClick={() => handleJobClick()}  
                >{task.brand}</td>
                <td>{task.subBrand}</td>
                <td>{task.flavour}</td>
                <td>{task.packType}</td>
                <td>{task.size}</td>
                <td>{task.packCode}</td>
                <td>{task.fgCode}</td>
                <td>{task.barcode}</td>
                <td>
              <Dropdown onSelect={(eventKey) => handleStatusChange(index, eventKey)}>
                <Dropdown.Toggle variant={statusColors[job.status]} id="dropdown-status" style={{width:"110px"}}>
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
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <TaskForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

const TaskPage = () => {
  return (
    <div style={{height: "100vh"}}>
      <TableHeader title="All Tasks" buttonText="Add Task" />  
      <TaskTable className="tabledown" />
    </div>
  );
};

export default TaskPage;




// import React, { useState } from "react";
// import { Table, Dropdown } from "react-bootstrap";
// import { FaEllipsisV } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; 
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

// export const TaskTable = () => {
//   const [jobs, setJobs] = useState(initialJobs);
//   const navigate = useNavigate(); // Initialize useNavigate hook

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


//   const handleJobClick = () => {

//     navigate(`/taskdetails`);
//   };

//   return (
//     <div  style={{height: "100vh"}}>
//     <Table responsive bordered hover className="tabledown" >
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
//             <td 
//               style={{ cursor: 'pointer'}}
//               onClick={() => handleJobClick()} 
//             >
//               {job.jobId}
             
//             </td>
//             <td 
//               style={{ cursor: 'pointer'}} 
//               onClick={() => handleJobClick()}
//             >
//               {job.jobName}
//             </td>
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
//                 <Dropdown.Toggle variant={priorityColors[job.priority]} id="dropdown-priority" style={{width:"90px"}}>
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
//                 <Dropdown.Toggle variant={statusColors[job.status]} id="dropdown-status" style={{width:"110px"}}>
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
//                           <Dropdown.Item href="#">Post To Production</Dropdown.Item>
//                   <Dropdown.Item href="#">Edit</Dropdown.Item>
//                   <Dropdown.Item href="#">Delete</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//     </div>
//   );
// };







