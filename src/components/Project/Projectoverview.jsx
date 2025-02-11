import React from "react";
import { Container, Row, Col, Card, ProgressBar, Table } from "react-bootstrap";
import { Pie, Bar } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const ProjectOverview = () => {
    const pieData = {
        labels: ["Completed", "In Progress", "Pending"],
        datasets: [
            {
                data: [30, 20, 50],
                backgroundColor: ["green", "yellow", "red"],
            },
        ],
    };

    const barData = {
        labels: ["Planned", "Actual"],
        datasets: [
            {
                label: "Hours Logged",
                data: [0, 7],
                backgroundColor: "red",
            },
        ],
    };

    return (
        <Container fluid className="p-4">
            <Row>
                <Col md={6}>
                    <Card className="p-3">
                        <h5>Project Progress</h5>
                        <ProgressBar now={42} label={`42%`} />
                        <p>Start Date: 29-12-2024</p>
                        <p>Deadline: 29-04-2025</p>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="p-3">
                        <h5>Client</h5>
                        <p>Laila Gerlach</p>
                        <p>Hudson-Daniel</p>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="p-3" >
                        <h5>Tasks</h5>
                        <Pie data={pieData}/>
                    </Card>
                </Col>
                <Col>
                  <Row>
                    <Col md={3}>
                    
                    </Col>
                  </Row>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <Card className="p-3">
                        <h5>Hours Logged</h5>
                        <Bar data={barData} />
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="p-3">
                        <h5>Project Budget</h5>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td>Planned</td>
                                    <td>$0</td>
                                </tr>
                                <tr>
                                    <td>Actual</td>
                                    <td>$35,940</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectOverview ;
