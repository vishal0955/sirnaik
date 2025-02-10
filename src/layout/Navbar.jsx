import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar, onBack }) => {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid nav-conte">
          <div className="nav-content d-flex justify-content-between align-items-center w-100">
            <div className="nav-bran d-flex align-items-center">
           
              <a className="nav-brand" href="#" onClick={onBack}>
                Logo
              </a>
              <div className="nav-taggle-icon ms-3" onClick={toggleSidebar}>
                <a href="#">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </a>
              </div>
              
            </div>
            <div className="nav-main-icon d-flex align-items-center">
              {/* Search Bar */}
              <div className="search-bar-container me-3">
                <input
                  className="form-control search-bar"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </div>

              {/* Notification Bell */}
              <a className="bell-icon me-3" href="#">
                <i className="fa-regular fa-bell"></i>
              </a>

              {/* Profile Dropdown */}
              <div className="dropdown profile-elemen">
                <div
                  className="me-2 fw-bold p-1 rounded-4 profile d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="profile-element">
                    <div className="avatar online">
                      <i className="fa-solid user-icon fa-circle-user"></i>
                    </div>
                  </div>
                </div>

                <ul className="dropdown-menu dropdown-menu-end">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://smarthr.dreamstechnologies.com/html/template/assets/img/profiles/avatar-12.jpg"
                      alt="User Image"
                      className="rounded-circle me-2"
                      style={{ width: 50, height: 50 }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">Kevin Larry</h6>
                      <small className="text-muted">warren@example.com</small>
                    </div>
                  </div>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <span className="me-2">⚫</span> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/changepassword">
                      <span className="me-2">⚙️</span> Settings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/changepassword">
                      <span className="me-2">⚪</span> My Account
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/changepassword">
                      <span className="me-2">❓</span> Knowledge Base
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <span className="me-2">🚪</span> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
