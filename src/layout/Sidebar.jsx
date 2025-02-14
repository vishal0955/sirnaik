


import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ collapsed, menuItemClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");

  const isActive = (path) => location.pathname === path;
  const isSubmenuActive = (paths) => paths.some((path) => location.pathname.startsWith(path));

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {/* Admin Section */}
          {role === "admin" && (
            <>
              <li className={`menu-item ${isActive("/dashboard") ? "active" : ""}`}
                onClick={() => { navigate("/dashboard"); menuItemClick(); }}>
                <div className="menu-link menu-i">
                  <span className="menu-text">Dashboard</span>
                </div>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                  <span className="menu-text">HRM</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/employeelist") ? "active" : ""}`}
                    onClick={() => { navigate("/employeelist"); menuItemClick(); }}>
                    Employee Management
                  </li>
                  <li className={`submenu-item ${isActive("/department") ? "active" : ""}`}
                    onClick={() => { navigate("/department"); menuItemClick(); }}>
                    Department
                  </li>
                  <li className={`submenu-item ${isActive("/designation") ? "active" : ""}`}
                    onClick={() => { navigate("/designation"); menuItemClick(); }}>
                    Designation
                  </li>
                  <li className={`submenu-item ${isActive("/leavetable") ? "active" : ""}`}
                    onClick={() => { navigate("/leavetable"); menuItemClick(); }}>
                    Leave
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                  <span className="menu-text">Project</span>
                </div>
                <ul className="submenu expanded">
                <li className={`submenu-item ${isActive("/contract") ? "active" : ""}`}
                    onClick={() => { navigate("/contract"); menuItemClick(); }}>
                    Contract
                  </li>
                  <li className={`submenu-item ${isActive("/project") ? "active" : ""}`}
                    onClick={() => { navigate("/project"); menuItemClick(); }}>
                    Project
                  </li>
                  <li className={`submenu-item ${isActive("/tasklist") ? "active" : ""}`}
                    onClick={() => { navigate("/tasklist"); menuItemClick(); }}>
                    Task
                  </li>
                  <li className={`submenu-item ${isActive("/timesheet") ? "active" : ""}`}
                    onClick={() => { navigate("/timesheet"); menuItemClick(); }}>
                    TimeSheet
                  </li>
                </ul>
              </li>
            </>
          )}

          {/* Project Manager Section */}
          {role === "projectmanager" && (
            <>
              <li className="menu-item">
                <div className="menu-link menu-i">
                  <span className="menu-text">Project Owner</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/projectmanagementdashboard") ? "active" : ""}`}
                    onClick={() => { navigate("/projectmanagementdashboard"); menuItemClick(); }}>
                    Dashboard
                  </li>
                  <li className={`submenu-item ${isActive("/project") ? "active" : ""}`}
                    onClick={() => { navigate("/project"); menuItemClick(); }}>
                    Project
                  </li>
                  <li className={`submenu-item ${isActive("/tasklist") ? "active" : ""}`}
                    onClick={() => { navigate("/tasklist"); menuItemClick(); }}>
                    Task
                  </li>
                  <li className={`submenu-item ${isActive("/timesheet") ? "active" : ""}`}
                    onClick={() => { navigate("/timesheet"); menuItemClick(); }}>
                    TimeSheet
                  </li>
                </ul>
              </li>
            </>
          )}

          {/* Production Team Section */}
          {role === "productionteam" && (
            <>
              <li className="menu-item">
                <div className="menu-link menu-i">
               
                </div>
                <ul className="submenu expanded">
                <li className={`submenu-item ${isActive("/production") ? "active" : ""}`}
                    onClick={() => { navigate("/jobs"); menuItemClick(); }}>
                    Dashboard
                  </li>
                  <li className={`submenu-item ${isActive("/jobs") ? "active" : ""}`}
                    onClick={() => { navigate("/jobs"); menuItemClick(); }}>
                    Tasks
                  </li>
                 
                  <li className={`submenu-item ${isActive("/traffic") ? "active" : ""}`}
                    onClick={() => { navigate("/traffic"); menuItemClick(); }}>
                    Traffic
                  </li>
                </ul>
              </li>
            </>
          )}

          {/* Designer Section */}
          {role === "designer" && (
            <>
              <li className="menu-item">
                <div className="menu-link menu-i">
                  <span className="menu-text">Designer</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/designerdashboard") ? "active" : ""}`}
                    onClick={() => { navigate("/designerdashboard"); menuItemClick(); }}>
                    Dashboard
                  </li>
                  <li className={`submenu-item ${isActive("/designertask") ? "active" : ""}`}
                    onClick={() => { navigate("/designertask"); menuItemClick(); }}>
                    Task
                  </li>
                  <li className={`submenu-item ${isActive("/dtimesheet") ? "active" : ""}`}
                    onClick={() => { navigate("/dtimesheet"); menuItemClick(); }}>
                    TimeSheet
                  </li>
                </ul>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

