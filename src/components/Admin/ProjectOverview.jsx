import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";
import { FaDollarSign, FaClock } from "react-icons/fa";

// Colors for the Pie Chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF4444"];

// Task data for Pie Chart
const pieData = [
  { name: "Completed", value: 40 },
  { name: "Pending", value: 30 },
  { name: "In Progress", value: 20 },
  { name: "Stuck", value: 10 },
];

// Hours Logged & Budget Data
const hoursLoggedData = [
  { name: "Planned", value: 0 },
  { name: "Actual", value: 5 },
];

const budgetData = [
  { name: "Planned", value: 0 },
  { name: "Actual", value: 0 },
];

// Task Progress Data
const taskProgressData = [
  { name: "Completed", value: 40, color: "#28a745" },
  { name: "Pending", value: 30, color: "#ffc107" },
  { name: "Overdue", value: 30, color: "#dc3545" },
];

const ProjectOverview = () => {
  return (
    <div className="container mt-4">
      <Row className="g-4">
        {/* Project Progress */}
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h5>Project Progress</h5>
            <div className="d-flex align-items-center justify-content-evenly">
              <div style={{ width: "40%" }}>
                <PieChart width={100} height={80}>
                  <Pie
                    data={[
                      { name: "Completed", value: 48 },
                      { name: "Remaining", value: 52 },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={35}
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                  >
                    <Cell fill="green" />
                    <Cell fill="#ddd" />
                  </Pie>
                </PieChart>
              </div>
              <div className="d-flex justify-content-evenly gap-5">
                <div>
                  <span>Start Date</span>
                  <p className="mb-0 fw-bold">29-12-2024</p>
                </div>
                <div>
                  <span>Deadline</span>
                  <p className="mb-0 fw-bold">29-04-2025</p>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        {/* Client Info */}
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h5>Client</h5>
            <div className="d-flex align-items-center">
              <Image
                src="https://i.pravatar.cc/300?u=myrl.yundt@example.net9"
                className="mb-2"
                style={{ width: "70px", height: "70px", borderRadius: "50%" }}
              />
              <div className="ms-3">
                <h6 className="mb-1">Kailee Kuvalis</h6>
                <small className="text-muted">Langworth-Miller</small>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mt-3">
        {/* Tasks Pie Chart */}
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h5>Tasks</h5>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={60} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Statistics Section */}
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h5>Statistics</h5>
            <Row>
              <Col xs={6}>
                <Card className="p-2 text-center">
                  <h6>Project Budget</h6>
                  <FaDollarSign size={20} />
                  <p className="mb-0">$0</p>
                </Card>
              </Col>
              <Col xs={6}>
                <Card className="p-2 text-center">
                  <h6>Hours Logged</h6>
                  <FaClock size={20} />
                  <p className="text-primary mb-0">5 Hour(s) 0 Minute(s)</p>
                </Card>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs={4}>
                <Card className="p-2 text-center">
                  <h6>Earnings</h6>
                  <FaDollarSign size={20} />
                  <p className="text-primary mb-0">$0.00</p>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className="p-2 text-center">
                  <h6>Expenses</h6>
                  <FaDollarSign size={20} />
                  <p className="text-primary mb-0">$0.00</p>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className="p-2 text-center">
                  <h6>Profit</h6>
                  <FaDollarSign size={20} />
                  <p className="text-primary mb-0">$0.00</p>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mt-3">
        {/* Hours Logged */}
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h5>Hours Logged</h5>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={hoursLoggedData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="red" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Project Budget */}
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h5>Project Budget</h5>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={budgetData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="red" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mt-3">
        {/* Pie Chart for Task Progress */}
        <Col md={12}>
          <Card className="p-3 shadow-sm">
           <h5>Project Details</h5>
           <p>Voluptas assumenda minus tempora quis et quia. Deleniti eum totam necessitatibus dolor eum quo. Blanditiis deleniti quo necessitatibus dolor adipisci minus voluptatem iure. Non sit reprehenderit ducimus.</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectOverview;
