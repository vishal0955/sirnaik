import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Card, Table } from "react-bootstrap"; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Designer() {
  const lineData = {
    labels: ["08-May", "09-May", "10-May", "11-May", "12-May", "13-May", "14-May"],
    datasets: [
      {
        label: "Total Completed Task",
        data: [40, 60, 50, 70, 60, 90, 80],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#17a2b8",
      },
    ],
  };

  const barData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Hours Logged",
        data: [40, 80, 20, 50, 20, 60, 30],
        backgroundColor: "#36a2eb",
      },
    ],
  };

  const doughnutData = {
    labels: ["Ongoing", "Pending", "Complete"],
    datasets: [
      {
        data: [55, 22, 22],
        backgroundColor: ["#ff6384", "#ffce56", "#36a2eb"],
      },
    ],
  };

  return (
    <div className="task-over-pro">
      <div className="container-fluid">
        {/* Cards Row */}
        
        <div className="row mb-4">
          <div className="col-12 col-sm-6 col-md-3">
            <Card className="text-center p-3 bg-light shadow-sm">
              <div className="d-flex align-items-center text-center text-md-start">
                <img src="https://i.ibb.co/5JkFzc4/300.jpg" alt="300" border="0" width={70} height={70} />
                <div>
                  <p className="mb-1">John Doe</p>
                  <p className="mb-0">Employee Id: EMP 1</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <Card className="text-center p-3 bg-light shadow-sm">
              <h5>Total Task</h5>
              <h2>12</h2>
            </Card>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <Card className="text-center p-3 bg-light shadow-sm">
              <h5>Pending</h5>
              <h2>36</h2>
            </Card>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <Card className="text-center p-3 bg-light shadow-sm">
              <h5>Completed</h5>
              <h2>18</h2>
            </Card>
          </div>
        </div>

        {/* Charts Row */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card-pro shadow p-3">
              <h5 className="card-title-pro text-center">Tasks Overview</h5>
              <Line data={lineData} />
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card-pro shadow p-3">
              <h5 className="card-title-pro text-center">Timesheet Logged Hours</h5>
              <Bar data={barData} />
            </div>
          </div>
        </div>

        {/* Doughnut Chart & Table */}
        <div className="row">
          <div className="col-md-6">
            <Card className="p-3 shadow-sm">
              <h5>Task Status</h5>
              <div style={{ height: "300px", width: "200px", margin: "auto" }}>
                <Doughnut data={doughnutData} />
              </div>
            </Card>
          </div>

          <div className="col-md-6">
            <Card className="p-3 shadow-sm">
              <h5>Tasks List</h5>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Project</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dashboard Cards</td>
                      <td>2025-09-01</td>
                      <td><span className="badge bg-success">Done</span></td>
                      <td>Newsletter Templates</td>
                    </tr>
                    <tr>
                      <td>The Marketplace Strategy</td>
                      <td>2024-09-15</td>
                      <td><span className="badge bg-warning">In Progress</span></td>
                      <td>Newsletter Templates</td>
                    </tr>
                    <tr>
                      <td>Design Test</td>
                      <td>2024-08-10</td>
                      <td><span className="badge bg-primary">To Do</span></td>
                      <td>Payment Integration</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designer;
