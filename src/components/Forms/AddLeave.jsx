import React from "react";


const AssignLeave = () => {
  return (
    <div className="container mt-4">
      <h3 className="mb-3">Assign Leave</h3>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Choose Member *</label>
            <select className="form-select">
              <option>-- Select Member --</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Leave Type *</label>
            <div className="d-flex">
              <select className="form-select me-2">
                <option>-- Select Leave Type --</option>
              </select>
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Select Duration</label>
            <div className="d-flex flex-wrap">
              <div className="form-check me-3">
                <input className="form-check-input" type="radio" name="duration" />
                <label className="form-check-label">Full Day</label>
              </div>
              <div className="form-check me-3">
                <input className="form-check-input" type="radio" name="duration" />
                <label className="form-check-label">Multiple</label>
              </div>
              <div className="form-check me-3">
                <input className="form-check-input" type="radio" name="duration" />
                <label className="form-check-label">First Half</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="duration" />
                <label className="form-check-label">Second Half</label>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Reason for absence *</label>
          <textarea className="form-control" placeholder="e.g. Feeling not well"></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Add File</label>
          <input type="file" className="form-control" />
        </div>

        <div className="d-flex">
          <button type="submit" className="btn btn-primary me-2">Save</button>
          <button type="button" className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AssignLeave;