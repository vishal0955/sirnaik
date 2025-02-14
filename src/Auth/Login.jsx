import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  // Predefined credentials for each role
  const credentials = {
    admin: { email: "admin@example.com", password: "admin123" },
    deginer: { email: "owner@example.com", password: "owner123" },
    projectmanager: { email: "guest@example.com", password: "guest123" },
    product_team: { email: "maintenance@example.com", password: "maintenance123" },
  };

  // Function to fill email & password when a role button is clicked
  const handleRoleSelect = (role) => {
    setEmail(credentials[role].email);
    setPassword(credentials[role].password);
    setSelectedRole(role);
  };

  // Login handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if credentials match a predefined role
    const matchedRole = Object.keys(credentials).find(
      (role) => credentials[role].email === email && credentials[role].password === password
    );

    if (matchedRole) {
      navigate(`/${matchedRole}`); // Navigate to the corresponding route
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Section */}
        <div className="login-image">
         
        </div>

        {/* Right Section */}
        <div className="login-form">
          <h2 className="text-center">Welcome Back</h2>
          <p className="text-center">Sign in to continue</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="privacy-policy" />
              <label htmlFor="privacy-policy">
                I agree to <a href="#">privacy policy & terms</a>
              </label>
            </div>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>

          {/* Role Selection */}
          <div className="role-selection">
            {Object.keys(credentials).map((role) => (
              <button
                key={role}
                className={`role-btn ${selectedRole === role ? "active" : ""}`}
                onClick={() => handleRoleSelect(role)}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;