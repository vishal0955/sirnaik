import React from "react";
import { Table, Button, Form, Image } from "react-bootstrap";

function CreateProjectModal( ) {

  return (
    <div className="container">
      <div className="create-project-main">
        <div>
          <div></div>
          <div></div>
        </div>

        <h4>Create New Project</h4>
        <hr />

        <div>
          {/* Simplified Table with Only Two Columns */}
          <Table className="border-0" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th className="border-0" style={{ whiteSpace: "nowrap" }}>
                  Project
                  <strong style={{ marginLeft: "10px" }}>
                    <img
                      src="https://i.ibb.co/ZpYpVjVw/demo-text-businessman-dark-vintage-background-108609906.webp"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      alt="User"
                    />
                  </strong>
                </th>
              </tr>
              <tr>
                <th className="border-0" style={{ whiteSpace: "nowrap" }}>
                  Project <strong style={{ marginLeft: "10px" }}>Save</strong>
                </th>
              </tr>
              <tr>
                <th className="border-0" style={{ whiteSpace: "nowrap" }}>
                  Deadline{" "}
                  <strong style={{ marginLeft: "10px" }}>
                    Select Deadline
                  </strong>
                </th>
              </tr>
              <tr>
                <th className="border-0" style={{ whiteSpace: "nowrap" }}>
                  Priority Level{" "}
                  <strong style={{ marginLeft: "10px" }}>Choose</strong>
                </th>
              </tr>
              <tr>
                <th className="border-0" style={{ whiteSpace: "nowrap" }}>
                  Tags <strong style={{ marginLeft: "10px" }}>Add Tag</strong>
                </th>
              </tr>
            </thead>
          </Table>

          {/* Project Description Section */}
          <div className="mb-3">
            <label className="form-label">Project Description</label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter project description"
            />
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
            {/* Associate Tasks Section */}
            <div className="flex-grow-1">
              <h5>Associate Tasks</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
            </div>

            {/* Notes Section */}
            <div className="flex-grow-1">
              <h5>Notes</h5>
              <div className="col-card">
                <input
                  type="text"
                  placeholder="No note available"
                  className="form-control"
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    border: "none",
                  }}
                />

                <Button variant="light" ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProjectModal;
