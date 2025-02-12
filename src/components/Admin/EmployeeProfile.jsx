import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaLocationDot } from "react-icons/fa6";
import { BsBoxArrowRight } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmployeeProfile = () => {
  const navigate = useNavigate();

  const chartData = {
    labels: ["Completed Tasks", "Pending Tasks"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#FFC107", "#DC3545"],
      },
    ],
  };

  return (
  
    <div className="container-fluid" >
      <div className="row ">
        <div className="col-md-6 border shadow-smp-3 me-3  ">
          <div className="d-flex align-items-start">
            <img
              src="https://i.pravatar.cc/300?u=client@example.com"
              className="img-thumbnail w-25 mt-5 me-4"
              alt="..."
            />
            <div>
              <div className="main div d-flex justify-content-between mt-5 ">
                <div>
                  <h4>Ambrose Jenkins</h4>
                </div>
                <div>
                  <i className="fa-solid fa-ellipsis" />
                </div>
              </div>
              <p>Team Lead • Finance | User Role: Employee</p>
              <p>Last login at --</p>
              <hr />
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col" onClick={() => navigate("/tasklist")}>Open Tasks</th>
                    <th scope="col">Projects</th>
                    <th scope="col">Hours Logged</th>
                    <th scope="col">Tickets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3</td>
                    <td>7</td>
                    <td>13</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-5 border shadow-sm p-3 me-3 text-center">
          <h3 style={{ textAlign: "start" }}>Appreciation</h3>

          <i
            className="fa-solid fa-medal d-block mx-auto"
            style={{ color: "grey", fontSize: "40px" }}
          />

          <h5 style={{ color: "grey", textAlign: "center", marginTop: "10px" }}>
            - No content found -
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 border shadow-sm p-3 me-3 mt-3">
          <h3>About</h3>
          <p>I am a super human</p>
        </div>
        <div className="col-md-5 border shadow-sm p-3 me-3 mt-3">
          <table className="table borderd table-borderless">
            <thead>
              <tr>
                <th scope="col" style={{ color: "grey" }}>
                  Reporting Team
                </th>
                <th scope="col" style={{ color: "grey" }}>
                  Reporting Time
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>--</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 border shadow-sm p-3 me-3">
          <h3>Profile Secondary</h3>
          <div className="row ">
            <div className="col-md-6">
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li className="mb-2 mt-3">
                  <strong>Employee ID:</strong>
                </li>
                <li className="mb-2">
                  <strong>Full Name:</strong>
                </li>
                <li className="mb-2">
                  <strong>Designation:</strong>
                </li>
                <li className="mb-2">
                  <strong>Department:</strong>
                </li>
                <li className="mb-2">
                  <strong>Gender:</strong>
                </li>
                <li className="mb-2">
                  <strong>Work Anniversary:</strong>
                </li>
                <li className="mb-2">
                  <strong>Date of Birth:</strong>
                </li>
                <li className="mb-2">
                  <strong>Email:</strong>
                </li>
                <li className="mb-2">
                  <strong>Mobile:</strong>
                </li>
                <li className="mb-2">
                  <strong>Slack Member ID:</strong>
                </li>
                <li className="mb-2">
                  <strong>Hourly Rate:</strong>
                </li>
                <li className="mb-2">
                  <strong>Address:</strong>
                </li>
                <li className="mb-2">
                  <strong>Skills:</strong>
                </li>
                <li className="mb-2">
                  <strong>Language:</strong>
                </li>
                <li className="mb-2">
                  <strong>Probation End Date:</strong>
                </li>
                <li className="mb-2">
                  <strong>Notice Period Start Date :</strong>
                </li>
                <li className="mb-2">
                  <strong>Notice Period End Date :</strong>
                </li>
                <li className="mb-2">
                  <strong>Marital Status :</strong>
                </li>
                <li className="mb-2">
                  <strong>Business Address :</strong>
                </li>
                <li className="mb-2">
                  <strong>Business Address :</strong>
                </li>
                <li className="mb-2">
                  <strong>Employment Type :</strong>
                </li>
                <li className="mb-2">
                  <strong>Joining Date :</strong>
                </li>
                <li className="mb-2">
                  <strong>Exit Date :</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li className="mb-2 mt-3">EMP-12</li>
                <li className="mb-2">Ambrose Jenkins</li>
                <li className="mb-2">Team Lead</li>
                <li className="mb-2">Finance</li>
                <li className="mb-2">Male</li>
                <li className="mb-2">2 months from now</li>
                <li className="mb-2">--</li>
                <li className="mb-2">keshawn32@example.com</li>
                <li className="mb-2">--</li>
                <li className="mb-2">--</li>
                <li className="mb-2">$27</li>
                <li className="mb-2">
                  22728 Russel Springs Apt. 931, Gwendolynburgh, GA 41669-8782
                </li>
                <li className="mb-2">English</li>
                <li className="mb-2">--</li>
                <li className="mb-2">--</li>
                <li className="mb-2">--</li>
                <li className="mb-2">Single</li>
                <li className="mb-2">IPSs</li>
                <li className="mb-2">--</li>
                <li className="mb-2">--</li>
                <li className="mb-2">29-04-2024</li>
                <li className="mb-2">--</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-5  p-3 me-3">
          <div className="row ">
            <div className="col-md-5 border shadow-sm p-3 me-3">
              <ul
                style={{
                  listStyleType: "none",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Left Section: "Late Attendance" with Question Icon */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <li>Late Attendance</li>
                    <i className="fa-solid fa-circle-question"></i>
                  </div>
                  <li style={{ color: "blue", marginTop: "5px" }}>0</li>
                </div>

                {/* Right Section: Location Icon */}
                <FaLocationDot />
              </ul>
            </div>
            <div className="col-md-5 border shadow-sm p-3 me-3">
              <ul
                style={{
                  listStyleType: "none",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Left Section: "Leaves Taken" with Question Icon */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <li>Leaves Taken</li>
                    <i className="fa-solid fa-circle-question"></i>
                  </div>
                  <li style={{ color: "blue", marginTop: "5px" }}>0</li>
                </div>

                {/* Right Section: Box Arrow Right Icon */}
                <BsBoxArrowRight />
              </ul>
            </div>
          </div>
          <div className="row border  p-3 me-3 mt-3 shadow-sm">
            <div className="col-md-12">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title>Tasks Overview</Card.Title>
                  <Pie
                    data={chartData}
                    style={{ width: "300px", height: "200px" }}
                  />
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row border shadow-sm p-3 me-3 mt-3">
              <h3>Tickets</h3>
              <BsDribbble />
              <p style={{ textAlign: "center" }}>- Not enough data -</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
