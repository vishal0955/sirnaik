import React from "react";
import { Container, Row, Col, Card, Button, Table , ProgressBar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const TaskManagement = () => {
  return (
    <Container fluid className="p-4" >
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold">Project overview <span className="text-primary">Market trends 2024</span></h2>
        </Col>
       
      </Row>

      <Row className="g-4">
        {/* Calendar */}
        <Col xs={12} md={6} lg={4} className="mb-4">
      <Card className="p-3 shadow-lg rounded-4 h-100">
        <h5 className="mb-3">Current Month</h5>
        <div className="table-responsive">
          <Table bordered className="text-center">
            <thead>
              <tr>
                <th>PLAN</th>
                <th>DO</th>
                <th>CHECK</th>
                <th>ACT</th>
                <th>REVIEW</th>
                <th>MEETING</th>
                <th>EVENT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td className="bg-secondary text-white rounded-2">8</td>
                <td>9</td>
              </tr>
              <tr>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
              </tr>
              <tr>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
              </tr>
              <tr>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>


        {/* Project Status */}
        <Col md={8}>
        <Card className="p-4 shadow-sm " style={{  borderRadius: "20px" }}>
        {/* Title */}
        <h4 className="fw-bold">Project status</h4>

        <Row className="mt-4">
          {/* Left Side: Status Categories */}
          <Col md={3}>
            <Card className="p-3 shadow-sm rounded-3 border-0" style={{  borderRadius: "15px" }}>
              <p>Resource overview</p>
              <p>Team members</p>
              <p>Risk assessment</p>
              <p>User feedback</p>
            </Card>
          </Col>

          {/* Right Side: Timeline Progress */}
          <Col md={9}>
            <div className="d-flex justify-content-between mb-2">
              <span>January</span>
              <span>February</span>
              <span>March</span>
              <span>April</span>
              <span>May</span>
              <span>June</span>
            </div>

            {/* Progress Bars (Simulating Timeline Progress) */}
            <ProgressBar now={70} className="mb-3" style={{ height: "10px", borderRadius: "10px" }} />
            <ProgressBar now={50} className="mb-3" style={{ height: "10px", borderRadius: "10px" }} />
            <ProgressBar now={30} className="mb-3 " style={{ height: "10px", borderRadius: "10px" }} />
            <ProgressBar now={80} className="mb-3 " style={{ height: "10px", borderRadius: "10px" }} />
          </Col>
        </Row>
      </Card>
        </Col>
      </Row>

      {/* Team Members & Task Assignment */}
      <Row className="g-4 mt-4">
        {/* Team Members */}
        <Col md={4}>
          <Card className="p-3 shadow-lg rounded-4" >
            <div className="d-flex justify-content-between">
              <h5>Team members list</h5>
              <small className="text-muted">View all →</small>
            </div>
            <Row className="mt-2">
              <Col xs={6} className="text-center shadow-sm rounded-4 ">
                <img src="https://randomuser.me/api/portraits/women/1.jpg" className="rounded-circle" width="50" alt="team" />
                <p>Alice L. <br /><small>Project coordinator</small></p>
              </Col>
              <Col xs={6} className="text-center shadow-sm rounded-4">
                <img src="https://randomuser.me/api/portraits/men/2.jpg" className="rounded-circle" width="50" alt="team" />
                <p>Bob C. <br /><small>Strategic planner</small></p>
              </Col>
              <Col xs={6} className="text-center shadow-sm rounded-4">
                <img src="https://randomuser.me/api/portraits/men/3.jpg" className="rounded-circle" width="50" alt="team" />
                <p>Charlie P. <br /><small>Product specialist</small></p>
              </Col>
              <Col xs={6} className="text-center shadow-sm rounded-4">
                <img src="https://randomuser.me/api/portraits/men/4.jpg" className="rounded-circle" width="50" alt="team" />
                <p>David S. <br /><small>Tech lead</small></p>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Task Assignment */}
        <Col md={8}>
          <Card className="p-3 shadow-lg rounded-4 ">
            <h5 className="fw-bold">Task assignment</h5>
            <h6 className="mb-3 mt-3">Assigned Tasks</h6>

            <div className="table-responsive">
              <Table borderless variant="" className="">
                <tbody>
                  <tr>
                    <td>📌 <strong>Progress update</strong></td>
                    <td>Today's tasks</td>
                    <td><Button variant="danger">Create</Button></td>
                    <td><Button variant="danger">Priority</Button></td>
                  </tr>
                  <tr>
                    <td>📌 <strong>Task creation</strong></td>
                    <td>Upcoming tasks</td>
                    <td><Button variant="danger">Update</Button></td>
                    <td><Button variant="danger">Status</Button></td>
                  </tr>
                  <tr>
                    <td>📌 <strong>Task brainstorming</strong></td>
                    <td>Weekly review</td>
                    <td><Button variant="danger">Update</Button></td>
                    <td><Button variant="danger">Priority</Button></td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <h6 className="mb-3 mt-3 ">Task Analysis</h6>
            <div className="table-responsive">
              <Table borderless variant="" className="">
                <tbody>
                  <tr>
                    <td>📌 <strong>Deadline tracking</strong></td>
                    <td>Today's tasks</td>
                    <td><Button variant="danger">Create</Button></td>
                    <td><Button variant="danger">Priority</Button></td>
                  </tr>
                  <tr>
                    <td>📌 <strong>Task evaluation</strong></td>
                    <td>Deadline approaching</td>
                    <td><Button variant="danger">Update</Button></td>
                    <td><Button variant="warning">Medium</Button></td>
                  </tr>
                  <tr>
                    <td>📌 <strong>Market research</strong></td>
                    <td>Task completion</td>
                    <td><Button variant="light">Pause</Button></td>
                    <td><Button variant="secondary">Low</Button></td>
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

export default TaskManagement;
