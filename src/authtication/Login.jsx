import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <main>
        <div className="login-container">
          <h1 className="fw-bold">
            <img src="https://i.ibb.co/1fzryCGk/LOGO.png" alt="" />
          </h1>

          {!showSignUp ? (
            // Login Form
            
            <form>
          <h2 className="text-center mt-5 mb-4">LOG IN</h2>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control p-3 rounded-pill"
                  placeholder="Email"
                  required=""
                  style={{ color: "#578e7e" }}
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="password"
                  className="form-control p-3 rounded-pill"
                  placeholder="Password"
                  required=""
                  style={{ color: "#578e7e" }}
                />
              </div>
              <div className="row">
                <Link style={{ color: "white" }} to="/dashboard">
                  <button
                    type="submit"
                    className="px-4 py-2 ms-1 login-btn shadow w-100 rounded-pill">
                    Log In
                  </button>
                </Link>
                <Link>
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="px-4 py-2 ms-1 mt-2 btn-outline-primary w-100 rounded-pill">
                    Sign Up
                  </button>
                </Link>
              </div>
              <div className="d-flex justify-content-center mt-4 mb-4">
                <a href="#" className="text-decoration-none text-secondary">
                  Forgot Password?
                </a>
              </div>
            </form>
          ) : (
            // Sign-Up Form
            <form className="signup-form">
                <h2 className="text-center mt-5 mb-4">Sign Up</h2>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control p-3 rounded-pill"
                  placeholder="Email"
                  required=""
                  style={{ color: "#578e7e" }}
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="password"
                  className="form-control p-3 rounded-pill"
                  placeholder="Password"
                  required=""
                  style={{ color: "#578e7e" }}
                />
              </div>
              <div className="row">
                  <button
                    type="submit"
                    className="px-4 py-2 ms-1 login-btn shadow w-100 rounded-pill">
                    Sign Up
                  </button>

                  <button
                    type="button"
                    onClick={toggleForm}
                    className="px-4 py-2 ms-1 mt-2 btn-outline-primary w-100 rounded-pill">
                    Log In
                  </button>
              </div>
              <div className="d-flex justify-content-center mt-4 mb-4">
                <a href="#" className="text-decoration-none text-secondary">
                  Forgot Password?
                </a>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
};

export default Login;
