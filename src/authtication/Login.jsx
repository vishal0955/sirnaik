import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const credentials = {
    admin: { email: "admin@example.com", password: "admin123", dashboard: "/dashboard", role: "admin" },
    designer: { email: "designer@example.com", password: "designer123", dashboard: "/designerdashboard", role: "designer" },
    projectmanager: { email: "projectmanager@example.com", password: "projectmanager123", dashboard: "/projectmanagementdashboard", role: "projectmanager" },
    productionteam: { email: "productionteam@example.com", password: "productionteam123", dashboard: "/productiondashboard", role: "productionteam" },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSetCredentials = (role) => {
    setFormData({ email: credentials[role].email, password: credentials[role].password });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const role = Object.keys(credentials).find(
      (key) => credentials[key].email === formData.email && credentials[key].password === formData.password
    );

    if (role) {
      navigate(credentials[role].dashboard);
      localStorage.setItem("role", role);
    } else {
      setError("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 bg-white text-dark" style={{ maxWidth: "400px", width: "100%", borderRadius: "10px" }}>
        <h3 className="text-center mb-3">Welcome Back!</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="text-danger text-center">{error}</p>}

          <button type="submit" className="btn btn-primary w-100">Log In</button>
        </form>
      </div>

      <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
        {Object.keys(credentials).map((role) => (
          <button key={role} className="btn btn-outline-primary" onClick={() => handleSetCredentials(role)}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Login;
