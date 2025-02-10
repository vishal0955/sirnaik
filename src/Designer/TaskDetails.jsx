import React from "react";
import { FaClock, FaPlay, FaFileUpload } from "react-icons/fa";

const TaskDetails = () => {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Task #2 - Transcribe Lesson 2</h4>
        <div className="d-flex align-items-center mb-3">
          <FaClock className="me-2" /> <span>00:25:51</span>
          <button className="btn btn-primary btn-sm ms-3">
            <FaPlay className="me-1" /> Resume Timer
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
              <h6 className="text-primary">Doing</h6>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
