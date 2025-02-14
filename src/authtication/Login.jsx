import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login"); // Default to login
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Predefined credentials for each role
  const credentials = {
    admin: { email: "admin@example.com", password: "admin123", dashboard: "/dashboard",role:"admin" },
    designer: { email: "designer@example.com", password: "designer123", dashboard: "/designerdashboard",role:"designer" },
    projectmanager: { email: "projectmanager@example.com", password: "projectmanager123", dashboard: "/projectmanagementdashboard" , role:"projectmanager" },
    productionteam: { email: "productionteam@example.com", password: "productionteam123", dashboard: "/user" , role:"productionteam" },
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Autofill login fields based on role
  const handleSetCredentials = (role) => {
    setFormData({ email: credentials[role].email, password: credentials[role].password });
  };

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Find the matching role
    const role = Object.keys(credentials).find(
      (key) =>
        credentials[key].email === formData.email &&
        credentials[key].password === formData.password
    );

    if (role) {
      navigate(credentials[role].dashboard);
      localStorage.setItem("role",role);
    } else {
      setError("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 bg-dark text-light" style={{ maxWidth: "450px", width: "100%" }}>
        {/* Login / Signup Toggle */}
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

        {/* Form Heading */}
        <h3 className="text-center mb-3">{activeTab === "signup" ? "Sign Up" : "Welcome Back!"}</h3>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {activeTab === "signup" && (
            <>
              <div className="mb-3">
                <input type="text" name="firstName" placeholder="First Name" className="form-control" required />
              </div>
              <div className="mb-3">
                <input type="text" name="lastName" placeholder="Last Name" className="form-control" required />
              </div>
            </>
          )}

          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          {error && <p className="text-danger text-center">{error}</p>}

          <button type="submit" className="btn btn-success w-100">
            {activeTab === "signup" ? "Get Started" : "Log In"}
          </button>
        </form>
      </div>

      {/* Role-Based Credential Buttons */}
      <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
        {Object.keys(credentials).map((role) => (
          <button key={role} className="btn btn-primary" onClick={() => handleSetCredentials(role)}>
             {role} 
          </button>
        ))}
      </div>
    </div>
  );
};

export default Login;
