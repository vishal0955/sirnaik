import React from "react";
import { Container, Row, Col, Card, Table, ProgressBar } from "react-bootstrap";
import { Line, Doughnut  } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ProjectManagementDashboard = () => {
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [5, 15, 25, 20, 30, 40],
        borderColor: "#36a2eb",
        fill: false,
      },
      {
        label: "Ongoing Tasks",
        data: [8, 12, 18, 28, 22, 35],
        borderColor: "#ff6384",
        fill: false,
      },
    ],
  };

  const doughnutData = {
    labels: ["Ongoing", "On Hold", "Finished"],
    datasets: [
      {
        data: [55, 22, 22],
        backgroundColor: ["#ff6384", "#ffce56", "#36a2eb"],
      },
    ],
  };

  return (
    <Container fluid>
      <Row className="mt-4 justify-content-center">
        <Col xs={12} sm={6} md={3} className="bg-dark rounded text-white p-3">
          <div className="d-flex align-items-center text-center text-md-start">
            <img
              src="https://i.ibb.co/5JkFzc4/300.jpg"
              alt="300"
              border="0"
              width={70}
              height={70}
              
            />
            <div>
              <p className="mb-1">Project Manager</p>
              <p className="mb-0">Employee Id: EMP 1</p>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="text-center p-3 bg-light shadow-sm">
            <h5>Total Projects</h5>
            <h2>12</h2>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="text-center p-3 bg-light shadow-sm">
            <h5>Total Tasks</h5>
            <h2>36</h2>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="text-center p-3 bg-light shadow-sm">
            <h5>Total Users</h5>
            <h2>18</h2>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={8}>
          <Card className="p-3 shadow-sm">
            <h5>Tasks Overview</h5>
            <Line data={lineData} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <h5>Project Status</h5>
            <Doughnut data={doughnutData} />
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="p-3 shadow-sm">
            <h5>Tasks</h5>
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
                    <td>
                      <span className="badge bg-success">Done</span>
                    </td>
                    <td>Newsletter Templates</td>
                  </tr>
                  <tr>
                    <td>The Marketplace Strategy</td>
                    <td>2024-09-15</td>
                    <td>
                      <span className="badge bg-warning">In Progress</span>
                    </td>
                    <td>Newsletter Templates</td>
                  </tr>
                  <tr>
                    <td>Design Test</td>
                    <td>2024-08-10</td>
                    <td>
                      <span className="badge bg-primary">To Do</span>
                    </td>
                    <td>Payment Integration</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectManagementDashboard;
