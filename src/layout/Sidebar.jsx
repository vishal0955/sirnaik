import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ collapsed , menuItemClick, onEMRClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState("Dashboard"); // Tracks the open submenu
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu((prev) => (prev === menuName ? "Dashboard" : menuName));
  };

   // Function to check if a path is active
   const isActive = (path) => {
    return location.pathname === path;
  };

    // Function to check if any of the subm enu items are active
    const isSubmenuActive = (paths) => {
      return paths.some((path) => location.pathname.startsWith(path));
    };

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">


          {/* Admin  */}
        <li className={`menu-item ${isSubmenuActive(["/admindashboard","/dashboard", "/project","/designation","/department","/tasklist","/timesheet","/billingpayments"]) ? "active" : ""}`}>
            <div className="menu-link menu-i" onClick={() => toggleSubmenu("dashboard")}>
              <i className="fa-solid fa-list-check"></i>
              <span className="menu-text">Dashboard</span>
              <i className={`fa-solid fa-chevron-down submenu-arrow ${openSubmenu === "dashboard" ? "rotated" : ""}`}></i>
            </div>
          </li>
          <ul className={`submenu ${openSubmenu === "dashboard" ? "expanded" : "collapsed"}`}>
            <li className={`submenu-item ${isActive("/dashboard") ? "active" : ""}`}
              onClick={() => {navigate("/dashboard");setOpenSubmenu(null);}}>
              <i className="fa-solid fa-arrow-trend-up"></i> Dashboard
            </li>
            <li className={`submenu-item ${isActive("/employeelist") ? "active" : ""}`}
              onClick={() => {
                navigate("/employeelist");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i>Employee Manangement
            </li>
            <li className={`submenu-item ${isActive("/department") ? "active" : ""}`}
              onClick={() => {
                navigate("/department");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Department
            </li>
            <li className={`submenu-item ${isActive("/designation") ? "active" : ""}`}
              onClick={() => {
                navigate("/designation");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Designation
            </li>

            <li className={`submenu-item ${isActive("/project") ? "active" : ""}`}
              onClick={() => {
                navigate("/project");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Project
            </li>
            <li className={`submenu-item ${isActive("/client") ? "active" : ""}`}
              onClick={() => {
                navigate("/client");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Client
            </li>

          
            <li className={`submenu-item ${isActive("/tasklist") ? "active" : ""}`}
              onClick={() => {
                navigate("/tasklist");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Task
            </li>
            <li className={`submenu-item ${isActive("/timesheet") ? "active" : ""}`}
              onClick={() => {
                navigate("/timesheet");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i>  TimeSheet
            </li>
            </ul>

          {/* Dashboard Section */}
       

          <li className={`menu-item ${isSubmenuActive(["/projectmanagementdashboard", "/project","/tasklist","/timesheet","/billingpayments"]) ? "active" : ""}`}>
            <div className="menu-link menu-i" onClick={() => toggleSubmenu("projectmanagementdashboard")}>
              <i className="fa-solid fa-list-check"></i>
              <span className="menu-text">Project Owner</span>
              <i className={`fa-solid fa-chevron-down submenu-arrow ${openSubmenu === "projectmanagementDAshboard" ? "rotated" : ""}`}></i>
            </div>
          </li>
          <ul className={`submenu ${openSubmenu === "projectmanagementdashboard" ? "expanded" : "collapsed"}`}>
            <li className={`submenu-item ${isActive("/projectmanagementdashboard") ? "active" : ""}`}
              onClick={() => {navigate("/projectmanagementdashboard");setOpenSubmenu(null);}}>
              <i className="fa-solid fa-arrow-trend-up"></i> Dashboard
            </li>
            <li className={`submenu-item ${isActive("/project") ? "active" : ""}`}
              onClick={() => {
                navigate("/project");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Project
            </li>
            
            
            <li className={`submenu-item ${isActive("/tasklist") ? "active" : ""}`}
              onClick={() => {
                navigate("/tasklist");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Task
            </li>
            <li className={`submenu-item ${isActive("/timesheet") ? "active" : ""}`}
              onClick={() => {
                navigate("/timesheet");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i>  TimeSheet
            </li>
            </ul>

            <li className={`menu-item ${isSubmenuActive(["/production", "/jobs","/traffic","/patienthistory","/billingpayments"]) ? "active" : ""}`}>
            <div className="menu-link menu-i" onClick={() => toggleSubmenu("production")}>
              <i className="fa-solid fa-list-check"></i>
              <span className="menu-text">Production Team</span>
              <i className={`fa-solid fa-chevron-down submenu-arrow ${openSubmenu === "production" ? "rotated" : ""}`}></i>
            </div>
          </li>
          <ul className={`submenu ${openSubmenu === "production" ? "expanded" : "collapsed"}`}>
            <li className={`submenu-item ${isActive("/") ? "active" : ""}`}
              onClick={() => {navigate("/projectmanagementdashboard");setOpenSubmenu(null);menuItemClick();}}>
              <i className="fa-solid fa-arrow-trend-up"></i> Dashboard
            </li>
            <li className={`submenu-item ${isActive("/jobs") ? "active" : ""}`}
              onClick={() => {
                navigate("/jobs");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Tasks
            </li>
            <li className={`submenu-item ${isActive("/traffic") ? "active" : ""}`}
              onClick={() => {
                navigate("/traffic");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Traffic
            </li>
          
          </ul>

            {/* Designer */}
            <li className={`menu-item ${isSubmenuActive(["/designerdashboard", "/dtimesheet","/designertask","/billingpayments"]) ? "active" : ""}`}>
            <div className="menu-link menu-i" onClick={() => toggleSubmenu("designerdashboard")}>
              <i className="fa-solid fa-list-check"></i>
              <span className="menu-text">Designer</span>
              <i className={`fa-solid fa-chevron-down submenu-arrow ${openSubmenu === "projectmanagementDAshboard" ? "rotated" : ""}`}></i>
            </div>
          </li>
          <ul className={`submenu ${openSubmenu === "designerdashboard" ? "expanded" : "collapsed"}`}>
            <li className={`submenu-item ${isActive("/designerdashboard") ? "active" : ""}`}
              onClick={() => {navigate("/designerdashboard");setOpenSubmenu(null);menuItemClick();}}>
              <i className="fa-solid fa-arrow-trend-up"></i> Dashboard
            </li>
            {/* <li className={`submenu-item ${isActive("/project") ? "active" : ""}`}
              onClick={() => {
                navigate("/project");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Project
            </li> */}
            <li className={`submenu-item ${isActive("/designertask") ? "active" : ""}`}
              onClick={() => {
                navigate("/designertask");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Task
            </li>
            <li className={`submenu-item ${isActive("/dtimesheet") ? "active" : ""}`}
              onClick={() => {
                navigate("/dtimesheet");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i>  TimeSheet
            </li>
            </ul>

            
       
         
 

          {/* Patient Management Section */}
        
        
         
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
