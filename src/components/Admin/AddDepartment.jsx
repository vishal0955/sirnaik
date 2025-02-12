import React from 'react';

function AddDepartment() {
  return (
    <div>
      <div className="container">
        <div className="add-designa-main">
          <h5><b>Department</b></h5>
          <div className='bg-white mt-5 p-5 rounded-5'>
            <div className="row">
              <h5>Add Department</h5>
              <hr />
              <div className="col-md-6">
                <label>Name</label>
                <br />
                <input
                  type='text'
                  placeholder='e.g. Team Lead'
                  className="form-control" // Bootstrap class for responsive input
                  style={{ height: '45px', borderRadius: '5px' }}
                />
              </div>
              <div className="col-md-6">
                <label>Parent</label>
                <br />
                <select
                  className="form-select" // Bootstrap class for responsive select
                  style={{ height: '45px', borderRadius: '5px' }}
                >
                  <option>--</option>
                </select>
              </div>
            </div>
            <hr />
            <div className='d-flex gap-3 flex-wrap '>
              <button className='btn btn-primary rounded'>
                <i className="fa-solid fa-check"></i> Save
              </button>
              <button className='btn btn-light border-0'>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDepartment;
