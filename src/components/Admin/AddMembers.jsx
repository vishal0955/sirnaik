import React from "react";
import { FaCheck } from "react-icons/fa";

function AddMembers() {
  return (
    <div>
      <div className="container">
        <div className="add-member-main">
          <h5> Add Project Member</h5>
          <hr />
          <div className="d-flex gap-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Choose Member
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Choose Department
              </label>
            </div>
          </div>

          <div className="mt-3">

            <h6>Add Project Member</h6>
            <select className="w-100 " style={{height:'40px',color:'grey'}}>
              <option>
                Nathing Selected
              </option>
            </select>
            <hr/>
          </div>

          <div className="d-flex justify-content-end gap-2">
            <button style={{border:'none'}}> Close</button>
            <button className="btn btn-primary"><FaCheck />Save</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddMembers;
