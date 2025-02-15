


import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { LuTreePalm } from "react-icons/lu";
import { FaTrafficLight } from "react-icons/fa6";
import { SiCrayon } from "react-icons/si";



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
                <i class="fa-solid fa-chart-column"></i>
                  <span className="menu-text">Dashboard</span>
                </div>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                  <span className="menu-text">CRM</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/lead") ? "active" : ""}`}
                    onClick={() => { navigate("/lead"); menuItemClick(); }}>
                    Lead
                  </li>
                  <li className={`submenu-item ${isActive("/deal") ? "active" : ""}`}
                    onClick={() => { navigate("/deal"); menuItemClick(); }}>
                    Deal
                  </li>
                  <li className={`submenu-item ${isActive("/contract") ? "active" : ""}`}
                    onClick={() => { navigate("/contract"); menuItemClick(); }}>
                    Contract
                  </li>
               
                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                <i class="fa-solid fa-user"></i>
                  <span className="menu-text">HRM</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/employeelist") ? "active" : ""}`}
                    onClick={() => { navigate("/employeelist"); menuItemClick(); }}>
                      <i class="fa-regular fa-building"></i>
                    <span className="menu-text">Employee Management</span>
                  </li>
                  <li className={`submenu-item ${isActive("/department") ? "active" : ""}`}
                    onClick={() => { navigate("/department"); menuItemClick(); }}>
                      <i class="fa-solid fa-file"></i>
                    <span className="menu-text">Department</span>
                  </li>
                  <li className={`submenu-item ${isActive("/designation") ? "active" : ""}`}
                    onClick={() => { navigate("/designation"); menuItemClick(); }}>
                      <i class="fa-solid fa-medal"></i>
                    <span className="menu-text">Designation</span>
                  </li>
                  <li className={`submenu-item ${isActive("/leavetable") ? "active" : ""}`}
                    onClick={() => { navigate("/leavetable"); menuItemClick(); }}>
                    <LuTreePalm />
                    <span className="menu-text">Leave</span>
                  </li>
                  <li className={`submenu-item ${isActive("/attendance") ? "active" : ""}`}
                    onClick={() => { navigate("/attendance"); menuItemClick(); }}>
                    Attendance
                  </li>
                  <li className={`submenu-item ${isActive("/shiftroster") ? "active" : ""}`}
                    onClick={() => { navigate("/shiftroster"); menuItemClick(); }}>
                    Shift Roster
                  </li>

                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                <i class="fa-solid fa-folder"></i>
                  <span className="menu-text">Project</span>
                </div>
                <ul className="submenu expanded">
               
                  <li className={`submenu-item ${isActive("/project") ? "active" : ""}`}
                    onClick={() => { navigate("/project"); menuItemClick(); }}>
                      <i class="fa-solid fa-folder"></i>
                    <span className="menu-text">Project</span>
                  </li>
                  <li className={`submenu-item ${isActive("/tasklist") ? "active" : ""}`}
                    onClick={() => { navigate("/tasklist"); menuItemClick(); }}>
                      <i class="fa-solid fa-square-check"></i>
                    <span className="menu-text">Task</span>
                  </li>
                  <li className={`submenu-item ${isActive("/timesheet") ? "active" : ""}`}
                    onClick={() => { navigate("/timesheet"); menuItemClick(); }}>
                      <i class="fa-duotone fa-solid fa-hourglass"></i>
                    <span className="menu-text">TimeSheet</span>
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
                <i class="fa-solid fa-folder"></i>
                  <span className="menu-text">Project Owner</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/projectmanagementdashboard") ? "active" : ""}`}
                    onClick={() => { navigate("/projectmanagementdashboard"); menuItemClick(); }}>
                      <i class="fa-solid fa-chart-column"></i>
                    <span className="menu-text">Dashboard</span>
                  </li>
                  <li className={`submenu-item ${isActive("/project") ? "active" : ""}`}
                    onClick={() => { navigate("/project"); menuItemClick(); }}>
                      <i class="fa-solid fa-folder"></i>
                    <span className="menu-text">Project</span>
                  </li>
                  <li className={`submenu-item ${isActive("/tasklist") ? "active" : ""}`}
                    onClick={() => { navigate("/tasklist"); menuItemClick(); }}>
                      <i class="fa-solid fa-square-check"></i>
                    <span className="menu-text">Task</span>
                  </li>
                  <li className={`submenu-item ${isActive("/timesheet") ? "active" : ""}`}
                    onClick={() => { navigate("/timesheet"); menuItemClick(); }}>
                      <i class="fa-duotone fa-solid fa-hourglass"></i>
                    <span className="menu-text">TimeSheet</span>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                  <span className="menu-text">CRM</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/lead") ? "active" : ""}`}
                    onClick={() => { navigate("/lead"); menuItemClick(); }}>
                    Lead
                  </li>
                  <li className={`submenu-item ${isActive("/deal") ? "active" : ""}`}
                    onClick={() => { navigate("/deal"); menuItemClick(); }}>
                    Deal
                  </li>
                  <li className={`submenu-item ${isActive("/contract") ? "active" : ""}`}
                    onClick={() => { navigate("/contract"); menuItemClick(); }}>
                    Contract
                  </li>
               
                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                <i class="fa-solid fa-user"></i>
                  <span className="menu-text">HRM</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/employeelist") ? "active" : ""}`}
                    onClick={() => { navigate("/employeelist"); menuItemClick(); }}>
                      <i class="fa-regular fa-building"></i>
                    <span className="menu-text">Employee Management</span>
                  </li>
                 
                  <li className={`submenu-item ${isActive("/leavetable") ? "active" : ""}`}
                    onClick={() => { navigate("/leavetable"); menuItemClick(); }}>
                    <LuTreePalm />
                    <span className="menu-text">Leave</span>
                  </li>
                  <li className={`submenu-item ${isActive("/attendance") ? "active" : ""}`}
                    onClick={() => { navigate("/attendance"); menuItemClick(); }}>
                    Attendance
                  </li>
                  <li className={`submenu-item ${isActive("/shiftroster") ? "active" : ""}`}
                    onClick={() => { navigate("/shiftroster"); menuItemClick(); }}>
                    Shift Roster
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
                <li className={`submenu-item ${isActive("/productiondashboard") ? "active" : ""}`}
                    onClick={() => { navigate("/productiondashboard"); menuItemClick(); }}>
                      <i class="fa-solid fa-chart-column"></i>
                    <span className="menu-text">Dashboard</span>
                  </li>
                  <li className={`submenu-item ${isActive("/project") ? "active" : ""}`}
                    onClick={() => { navigate("/project"); menuItemClick(); }}>
                      <i class="fa-solid fa-folder"></i>
                    <span className="menu-text">Project</span>
                  </li>
                  <li className={`submenu-item ${isActive("/jobs") ? "active" : ""}`}
                    onClick={() => { navigate("/jobs"); menuItemClick(); }}>
                      <i class="fa-solid fa-square-check"></i>
                    <span className="menu-text">Tasks</span>
                  </li>
               
                 
                  <li className={`submenu-item ${isActive("/traffic") ? "active" : ""}`}
                    onClick={() => { navigate("/traffic"); menuItemClick(); }}>
                      <FaTrafficLight />
                    <span className="menu-text">Traffic</span>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                <i class="fa-solid fa-user"></i>
                  <span className="menu-text">HRM</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/employeelist") ? "active" : ""}`}
                    onClick={() => { navigate("/employeelist"); menuItemClick(); }}>
                      <i class="fa-regular fa-building"></i>
                    <span className="menu-text">Employee Management</span>
                  </li>
                 
                  <li className={`submenu-item ${isActive("/leavetable") ? "active" : ""}`}
                    onClick={() => { navigate("/leavetable"); menuItemClick(); }}>
                   <LuTreePalm />
                    <span className="menu-text">Leave</span>
                  </li>
                  <li className={`submenu-item ${isActive("/attendance") ? "active" : ""}`}
                    onClick={() => { navigate("/attendance"); menuItemClick(); }}>
                    Attendance
                  </li>
                  <li className={`submenu-item ${isActive("/shiftroster") ? "active" : ""}`}
                    onClick={() => { navigate("/shiftroster"); menuItemClick(); }}>
                    Shift Roster
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
                <SiCrayon />
                  <span className="menu-text">Designer</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/designerdashboard") ? "active" : ""}`}
                    onClick={() => { navigate("/designerdashboard"); menuItemClick(); }}>
                      <i class="fa-solid fa-chart-column"></i>
                    <span className="menu-text">Dashboard</span>
                  </li>
                  <li className={`submenu-item ${isActive("/designertask") ? "active" : ""}`}
                    onClick={() => { navigate("/designertask"); menuItemClick(); }}>
                      <i class="fa-solid fa-square-check"></i>
                    <span className="menu-text">Task</span>
                  </li>
                  <li className={`submenu-item ${isActive("/dtimesheet") ? "active" : ""}`}
                    onClick={() => { navigate("/dtimesheet"); menuItemClick(); }}>
                      <i class="fa-duotone fa-solid fa-hourglass"></i>
                    <span className="menu-text">TimeSheet</span>
                  </li>
                </ul>

                <li className="menu-item">
                <div className="menu-link menu-i">
                <i class="fa-solid fa-user"></i>
                  <span className="menu-text">HRM</span>
                </div>
                <ul className="submenu expanded">
                  
                 
                  <li className={`submenu-item ${isActive("/leavetable") ? "active" : ""}`}
                    onClick={() => { navigate("/leavetable"); menuItemClick(); }}>
                   <LuTreePalm />
                    <span className="menu-text">Leave</span>
                  </li>
                  <li className={`submenu-item ${isActive("/attendance") ? "active" : ""}`}
                    onClick={() => { navigate("/attendance"); menuItemClick(); }}>
                    Attendance
                  </li>
                  <li className={`submenu-item ${isActive("/shiftroster") ? "active" : ""}`}
                    onClick={() => { navigate("/shiftroster"); menuItemClick(); }}>
                    Shift Roster
                  </li>
                </ul>
              </li>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

