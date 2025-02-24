import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Modal } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaList, FaTh, FaPlusCircle } from "react-icons/fa";
import  TaskForm from "../Forms/AddTask";
const WeeklyCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentWeek, setCurrentWeek] = useState("February 2023");

  const tasks = [
    { day: "11", time: "10:00 AM", title: "Task Assignment Meeting", duration: "10:00 - 11:00" },
    { day: "11", time: "11:00 AM", title: "Task Team Check-in", duration: "10:30 - 11:00" },
    { day: "12", time: "10:00 AM", title: "Task Coaching", duration: "10:10 - 11:00" },
    { day: "13", time: "12:00 PM", title: "Task Brainstorming: Specialist Hiring", duration: "10:10 - 11:00" },
    { day: "14", time: "09:30 AM", title: "Task Progress Review", duration: "9:30 - 10:30" },
    { day: "14", time: "10:30 AM", title: "Task Presentation", duration: "9:30 - 10:30" },
    { day: "15", time: "09:30 AM", title: "Task Lunch with Team", duration: "9:30 - 10:30" },
  ];

  return (
    <Container fluid className="p-4" style={{ minHeight: "100vh" }}>
      {/* Top Navigation */}
      <Row className="mb-4 align-items-center">
        <Col md={6} className="d-flex align-items-center">
          <Button variant="link" className=" me-2">
            <FaChevronLeft size={20} />
          </Button>
          <h3 className="fw-bold">{currentWeek}</h3>
          <Button variant="link" className=" ms-2">
            <FaChevronRight size={20} />
          </Button>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="secondary" className="me-2">
            <FaList />
          </Button>
          <Button variant="primary" className="me-2">
            <FaTh />
          </Button>
          <Button variant="light" onClick={() => setShowModal(true)}>
            Add <FaPlusCircle className="ms-1" />
          </Button>
        </Col>
      </Row>

      {/* Weekly Calendar Grid */}
      <Row className="g-2">
        <Col md={12}>
          <Table borderless variant="" className="">
            <thead>
              <tr>
                <th></th>
                <th>11 Mon</th>
                <th>12 Tue</th>
                <th>13 Wed</th>
                <th>14 Thu</th>
                <th>15 Fri</th>
                <th>16 Sat</th>
                <th>17 Sun</th>
              </tr>
            </thead>
            <tbody>
              {["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"].map((time) => (
                <tr key={time}>
                  <td className="fw-bold">{time}</td>
                  {[11, 12, 13, 14, 15, 16, 17].map((day) => {
                    const task = tasks.find((t) => t.day === day.toString() && t.time === time);
                    return (
                      <td key={`${day}-${time}`} className="position-relative">
                        {task ? (
                          <div
                            className="p-2 rounded text-white"
                            style={{
                              backgroundColor: "#282828",
                              borderLeft: "4px solid red",
                              fontSize: "12px",
                              cursor: "pointer",
                              
                            }}
                          >
                            <strong>{task.title}</strong>
                            <br />
                            <small>{task.duration}</small>
                          </div>
                        ) : (
                          <div style={{ minHeight: "30px" }}></div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
<TaskForm />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default WeeklyCalendar;
