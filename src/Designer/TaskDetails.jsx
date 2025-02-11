import React from "react";
import { FaClock, FaPlay, FaFileUpload, } from "react-icons/fa";

const TaskDetails = () => {
  const statuses = ["Pending", "Completed", "In Progress", "To Start", "On Hold", "Cancelled"];
  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Task #2 - Transcribe Lesson 2</h4>
        <div className="d-flex align-items-center mb-3">
          
          <button className="btn btn-primary btn-sm ms-3">
            <FaPlay className="me-1" /> Start
          </button>

          <button type="button" className="btn btn-primary btn-sm ms-3">
                < span>Post For Review</span>
             </button>
        </div>
        <div className="row">
          <div className="col-md-8">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Project: <b>Transcription of Obey Me!</b></li>
              <li className="list-group-item">Priority: <span className="badge bg-warning">Medium</span></li>
              <li className="list-group-item">Assigned To: <img src="https://via.placeholder.com/30" className="rounded-circle ms-2" alt="User" /></li>
              <li className="list-group-item">Milestones: Transcribe First 10 Lessons</li>
              <li className="list-group-item">Assigned By: <b>Tyreek Auer (Senior)</b></li>
              <li className="list-group-item">Description: Transcribe lesson 2.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="card p-3 bg-light">
            <label className="form-label fw-semibold">Status</label>
              <p className="text-primary"> Doing  </p>
              <p className="mb-1"><b>Created On:</b> 10-02-2025 10:26 PM</p>
              <p className="mb-1"><b>Start Date:</b> 10-02-2025</p>
              <p className="mb-1"><b>Hours Logged:</b> 25m</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#files">Files</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#subtask">Sub Task</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#timesheet">Timesheet</a>
            </li>
          
          </ul>
          <div className="tab-content mt-3">
            <div className="tab-pane fade show active" id="files">
              <p>No file uploaded.</p>
              <button className="btn btn-outline-primary btn-sm">
                <FaFileUpload className="me-1" /> Upload File
              </button>
            </div>
            <div className="tab-pane fade show active" id="subtask">
              <p>Sub Tasks</p>
              
            </div>
            <div className="tab-pane fade show active" id="timesheet">
              <p> TimeSheet</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;

// import React from "react";
// import { FaClock, FaPlay, FaFileUpload } from "react-icons/fa";

// const TaskDetails = () => {
//   return (
//     <div className="Column container">
//     <div>
//       <h1>Task#EMA-46</h1>
//       <h1>I shant you do</h1>
//       <div>
//         <div className="row">
//           <div className="col-md-8">
//             <div className="main div d-flex justify-content-between">
//               <div>
//                 <button type="button" className="btn btn-outline-dark">
//                   <i className="fa-solid fa-play" />
//                   Start Button
//                 </button>
//               </div>
//               <div>
//                 <i className="fa-solid fa-ellipsis" />
//               </div>
//             </div>
//             <div>
//               <table className="table table-borderless">
//                 <tbody>
//                   <tr>
//                     <th scope="row">Project</th>
//                     <td>Email marketing and newsletter service</td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Priority</th>
//                     <td>High</td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Assigned to</th>
//                     <td colSpan={2}>Cordia rau</td>
//                   </tr>
//                   <tr>
//                     <th scope="row">MileStones</th>
//                     <td colSpan={2}>...</td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Label</th>
//                     <td colSpan={2}>...</td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Task categiry</th>
//                     <td colSpan={2}>..</td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Description</th>
//                     <td colSpan={2}>dfasfaf fafasf safas fasf asf asf asf</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <h3>Doing</h3>
//             <table className="table table-borderless">
//               <tbody>
//                 <tr>
//                   <th scope="row">Created On</th>
//                   <td>29-01-2025 10:56 am</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">Start Date</th>
//                   <td>15-01-2025</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">Due Date</th>
//                   <td colSpan={2}>23-01-2025</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">Hours Logged</th>
//                   <td colSpan={2}>0s</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-8">
//             <table className="table table-borderless">
//               <thead>
//                 <tr>
//                   <th scope="col">Files</th>
//                   <th scope="col">Sub Task</th>
//                   <th scope="col">Comment</th>
//                   <th scope="col">Notes</th>
//                   <th scope="col">History</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <i className="fa-solid fa-plus" />
//                     Upload
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default TaskDetails;
