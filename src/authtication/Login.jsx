import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 bg-dark " style={{ maxWidth: "450px", width: "100%" }}>
        <div className="d-flex gap-4 mb-3">
          <button
            className={`btn w-50 ${activeTab === "signup" ? "btn-success" : "btn-outline-light"}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
          
          <button
            className={`btn w-50 ${activeTab === "login" ? "btn-success" : "btn-outline-light"}`}
            onClick={() => setActiveTab("login")}
          >
            Log In
          </button>
          
        </div>

        <h3 className="text-center mb-3">{activeTab === "signup" ? "Sign Up" : "Welcome Back!"}</h3>

        <form onSubmit={handleSubmit}>
          {activeTab === "signup" && (
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="First Name"
                    required
                  />
                  <label>First Name</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                  <label>Last Name</label>
                </div>
              </div>
            </div>
          )}

          <div className="mb-3">
            <div className="form-floating">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Email Address"
                required
              />
              <label>Email Address</label>
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Password"
                required
              />
              <label>Password</label>
            </div>
          </div>

          {activeTab === "login" && (
            <div className="text-end mb-3">
              <a href="#" className="text-success">
                Forgot Password?
              </a>
            </div>
          )}

          <button type="submit" className="btn btn-success w-100">
            {activeTab === "signup" ? "Get Started" : "Log In"}
          </button>
        </form>
      </div>

      {/* Role Buttons for UI Navigation */}
      <div className="mt-4 d-flex gap-3">
        <Link to="/admin" className="btn btn-outline-light">Admin</Link>
        <Link to="/project-owner" className="btn btn-outline-light">Project Owner</Link>
        <Link to="/user" className="btn btn-outline-light">User</Link>
        <Link to="/designer" className="btn btn-outline-light">Designer</Link>
      </div>
    </div>
  );
};

export default Login;
