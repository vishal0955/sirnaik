// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faInfoCircle,
//   faCog,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

// // import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for sidebar toggle
// import { Link, useNavigate } from "react-router-dom";
// // import { HiChevronLeft } from "react-icons/hi2";
// // import { Style } from "@mui/icons-material";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// // import { FiSettings } from "react-icons/fi";

// function Sidebar({ isOpen, toggleSidebar }) {
//   const [openMenuIndex, setOpenMenuIndex] = useState(null);

//   const [activeMenuIndex, setActiveMenuIndex] = useState(null);
//   const navigate = useNavigate();

//   const toggleMenu = (index) => {
//     setOpenMenuIndex(openMenuIndex === index ? null : index);
//   };

//   const handlesubmenuclick = (menuindex, path) => {
//     setActiveMenuIndex(menuindex);
//     navigate(path);
//   };

//   return (
//     <div className={`sidebar ${isOpen ? "expanded" : ""}`}>
//       {/* Sidebar toggle icon */}
//       <div className="sidebar-toggle" onClick={toggleSidebar}>
//         <FontAwesomeIcon
//           icon={isOpen ? faChevronLeft : faChevronRight}
//           className="sidebar-toggle-icon"
//         />
//       </div>

//       <ul className="menu">
//         {/* dashbord */}
//         <li
//           className={`menu-item ${activeMenuIndex === 0 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(0, "/dashboard")}>
//           <div className="menu-link">
//             <i
//               className="nav-icon fas fa-home menu-icon"
//               style={{ color: "var(--first-color" }}
//             />
//             {isOpen && <span className="menu-text ">Dashboard</span>}
//           </div>
//         </li>

//         {/*  Student Enquiry */}
//         <li
//           className={`menu-item ${activeMenuIndex === 1 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(1, "/studentenq")}>
//           <div className="menu-link dashmenu ">
//             <i class="nav-icon fa fa-diamond menu-icon"
//               style={{ color: "var(--second-color" }}></i>

//             {isOpen && <span className="menu-text"> Project Owner</span>}
//           </div>
//         </li>

//         {/* Student Management */}
//         <li
//           className={`menu-item ${openMenuIndex === 2 ? "open" : ""} ${
//             activeMenuIndex === 2 ? "active" : ""
//           }`}
//           onClick={() => toggleMenu(2)}>
//           <div className="menu-link menu-i">
//             <i
//               className="nav-icon fas fa-money-check menu-icon"
//               style={{ color: "var(--third-color" }}
//             />
//             {isOpen && <span className="menu-text"> Production Department</span>}
//             <FontAwesomeIcon
//               icon={openMenuIndex === 1 ? faChevronLeft : faChevronRight}
//               className="menu-toggle-icon"
//               style={{ background: "transparent", float: "inline-end" }}
//             />
//           </div>
//           <ul className={`submenu ${openMenuIndex === 2 ? "open" : ""}`}>
//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(2, "/promationdetention")}>
//               Promotion /Detention
//             </li>

//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(2, "/termination")}>
//               Termination / Active-Inactive
//             </li>

//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(2, "/assignsection")}>
//               Assign Section
//             </li>
//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(2, "/assignroll")}>
//               Assign Roll Number
//             </li>
//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(2, "/addstudent")}>
//               Add New Student
//             </li>
//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(2, "/editstudentprofile")}>
//               Edit Profile
//             </li>
//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(2, "/assignhouse")}>
//               Assign House
//             </li>
//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(2, "/assignsubject")}>
//               Assign Subjects
//             </li>
//           </ul>
//         </li>

//         {/* Student */}
//         <li
//           className={`menu-item ${activeMenuIndex === 3 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(3, "/student")}>
//           <i
//             className="nav-icon hvr-buzz-out fas fa-user-tie menu-icon"
//             style={{ color: "var(--fourth-color" }}
//           />
//           {isOpen && <span className="menu-text"> Designer</span>}
//         </li>

//         {/* Staff Enquiry
//         <li
//           className={`menu-item ${activeMenuIndex === 4 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(4, "/staffenq")}>
          
//           <i class="fa fa-user-circle-o menu-icon" style={{ color: "var(--fifth-color" }}></i>
          
//           {isOpen && <span className="menu-text"> Staff Enquiry</span>}
//         </li>

//         {/* Staff Management */}
//         <li
//           className={`menu-item ${openMenuIndex === 5 ? "open" : ""} ${
//             activeMenuIndex === 5 ? "active" : ""
//           }`}
//           onClick={() => toggleMenu(5)}>
//           <div className="menu-link menu-i">
//             <i
//               className="nav-icon fas fa-user-secret menu-icon"
//               style={{ color: "var(--sixth-color" }}
//             />
//             {isOpen && <span className="menu-text"> Staff Management</span>}
//             <FontAwesomeIcon
//               icon={openMenuIndex === 5 ? faChevronLeft : faChevronRight}
//               className="menu-toggle-icon"
//               style={{ background: "transparent", float: "inline-end" }}
//             />
//           </div>
//           <ul className={`submenu ${openMenuIndex === 5 ? "open" : ""}`}>
//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(5, "/addnewstaff")}>
//               {" "}
//               Add new staff{" "}
//             </li>

//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(5, "/editstafprofile")}>
//               Edit Profile
//             </li>

//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(5, "/terminationactive")}>
//               Termination/Active-Inactive
//             </li>
//           </ul>
//         </li>

//         {/* Staff */}

//         <li
//           className={`menu-item ${activeMenuIndex === 6 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(6, "/staff")}>
//           <i
//             className="nav-icon hvr-buzz-out fas fa-exchange-alt menu-icon"
//             style={{ color: "var(--first-color" }}
//           />
//           {isOpen && <span className="menu-text ">Staff</span>}
//         </li>

//         {/* Attendance */}

//         <li
//           className={`menu-item ${activeMenuIndex === 7 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(7, "/attendence")}>
//           <i
//             class="fa fa-address-book-o menu-icon"
//             style={{ color: "var(--second-color" }}></i>
//           {isOpen && <span className="menu-text ">Attendance</span>}
//         </li>

//         {/* Syllabus */}

//         <li
//           className={`menu-item ${activeMenuIndex === 8 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(8, "/Syllabus")}>
//           <i
//             class="fa fa-file-o menu-icon"
//             style={{ color: "var(--third-color" }}></i>
//           {isOpen && <span className="menu-text ">Syllabus</span>}
//         </li>

//         {/* Admit Card */}
//         <li
//           className={`menu-item ${activeMenuIndex === 9 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(9, "/admitcard")}>
//           <i
//             class="fa fa-id-card-o menu-icon"
//             style={{ color: "var(--fourth-color" }}></i>
//           {isOpen && <span className="menu-text">Admit Card</span>}
//         </li>

//         {/* Time Table */}
//         <li
//           className={`menu-item ${activeMenuIndex === 10 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(10, "/timetable")}>
//           <i
//             class="fa fa-calendar menu-icon"
//             style={{ color: "var(--fifth-color" }}></i>
//           {isOpen && <span className="menu-text"> Time Table</span>}
//         </li>

//         {/* Result */}

//         <li
//           className={`menu-item ${activeMenuIndex === 11 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(11, "/result")}>
//           <i
//             class="fa fa-address-book menu-icon"
//             style={{ color: "var(--sixth-color" }}></i>
//           {isOpen && <span className="menu-text">Result</span>}
//         </li>

//         {/* Sub-Admin */}

//         <li
//           className={`menu-item ${activeMenuIndex === 12 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(12, "/subadmin")}>
//           <i
//             class="fa fa-user-circle-o menu-icon"
//             style={{ color: "var(--first-color" }}></i>
//           {isOpen && <span className="menu-text">Sub-Admin</span>}
//         </li>

//         {/* Annual Calendar */}

//         <li
//           className={`menu-item ${activeMenuIndex === 13 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(13, "/anualcalander")}>
//           <i
//             class="fa fa-id-card menu-icon"
//             style={{ color: "var(--second-color" }}></i>
//           {isOpen && <span className="menu-text">Annual Calendar</span>}
//         </li>

//         {/* Certificate */}
//         <li
//           className={`menu-item ${activeMenuIndex === 14 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(14, "/certificate")}>
//           <i
//             class="fa fa-certificate menu-icon"
//             style={{ color: "var(--third-color" }}></i>
//           {isOpen && <span className="menu-text">Certificate</span>}
//         </li>

//         {/* Ticket */}
//         <li
//           className={`menu-item ${activeMenuIndex === 15 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(15, "/ticket")}>
//           <i
//             class="fa fa-ticket menu-icon"
//             style={{ color: "var(--fourth-color" }}></i>
//           {isOpen && <span className="menu-text">Ticket</span>}
//         </li>

//         {/* Fee */}
//         <li
//           className={`menu-item ${activeMenuIndex === 16 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(16, "/fee")}>
//           <i
//             class="fa fa-money menu-icon"
//             style={{ color: "var(--fifth-color" }}></i>
//           {isOpen && <span className="menu-text">Fee</span>}
//         </li>

//         {/* Transportation */}
//         <li
//           className={`menu-item ${activeMenuIndex === 17 ? "active" : ""}`}
//           onClick={() => handlesubmenuclick(17, "/transport")}>
//           <i
//             class="fa fa-bus menu-icon"
//             style={{ color: "var(--sixth-color" }}></i>
//           {isOpen && <span className="menu-text">Transportation</span>}
//         </li>

//         {/* Settings */}
//         <li
//           className={`menu-item ${openMenuIndex === 18 ? "open" : ""} ${
//             activeMenuIndex === 18 ? "active" : ""
//           }`}
//           onClick={() => toggleMenu(18)}>
//           <div className="menu-link menu-i">
//             <i
//               class="fa fa-cog menu-icon"
//               style={{ color: "var(--first-color" }}></i>
//             {isOpen && <span className="menu-text"> Settings</span>}
//             <FontAwesomeIcon
//               icon={openMenuIndex === 18 ? faChevronLeft : faChevronRight}
//               className="menu-toggle-icon"
//               style={{ background: "transparent", float: "inline-end" }}
//             />
//           </div>
//           <ul className={`submenu ${openMenuIndex === 18 ? "open" : ""}`}>
//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(18, "/classgroup")}>
//               {" "}
//               Class Groups{" "}
//             </li>
//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(18, "/subjectgroup")}>
//               Subject Groups
//             </li>
//             <li
//               className="submenu-item"
//               onClick={() => handlesubmenuclick(18, "/setsession")}>
//               Set Session{" "}
//             </li>
//           </ul>
//         </li> 
//       </ul>
//     </div>
//   );
// }
// export default Sidebar;




import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

// Define menu structure
const menuItems = [
  {
    title: "Project Management",
    icon: "fa-solid fa-list-check",
    submenu: [
      { title: "Dashboard", path: "/projectmanagementdashboard", icon: "fa-solid fa-arrow-trend-up" },
      { title: "Project", path: "/project", icon: "fa-solid fa-arrow-trend-up" },
      { title: "Task", path: "/tasklist", icon: "fa-solid fa-arrow-trend-up" },
      { title: "TimeSheet", path: "/timesheet", icon: "fa-solid fa-arrow-trend-up" }
    ]
  },
  {
    title: "Designer",
    icon: "fa-solid fa-list-check",
    submenu: [
      { title: "Dashboard", path: "/designerdashboard", icon: "fa-solid fa-arrow-trend-up" },
      { title: "Task", path: "/designertask", icon: "fa-solid fa-arrow-trend-up" },
      { title: "TimeSheet", path: "/dtimesheet", icon: "fa-solid fa-arrow-trend-up" }
    ]
  },
  {
    title: "Production Team",
    icon: "fa-solid fa-list-check",
    submenu: [
      { title: "Dashboard", path: "/projectmanagementdashboard", icon: "fa-solid fa-arrow-trend-up" },
      { title: "Tasks", path: "/jobs", icon: "fa-solid fa-arrow-trend-up" },
      { title: "Appointment Scheduling", path: "/appointmentscheduling", icon: "fa-solid fa-arrow-trend-up" },
      { title: "Patient History", path: "/patienthistory", icon: "fa-solid fa-arrow-trend-up" },
      { title: "Billing & Payments", path: "/billingpayments", icon: "fa-solid fa-arrow-trend-up" }
    ]
  }
];

const Sidebar = ({ collapsed, menuItemClick, onEMRClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Tracks the open submenu
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu((prev) => (prev === menuName ? null : menuName));
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isSubmenuActive = (paths) => {
    return paths.some((path) => location.pathname.startsWith(path));
  };

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {/* Dynamically rendering menu items */}
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className={`menu-item ${isSubmenuActive(menu.submenu.map((item) => item.path)) ? "active" : ""}`}
            >
              <div className="menu-link menu-i" onClick={() => toggleSubmenu(menu.title)}>
                <i className={menu.icon}></i>
                <span className="menu-text">{menu.title}</span>
                <i
                  className={`fa-solid fa-chevron-down submenu-arrow ${openSubmenu === menu.title ? "rotated" : ""}`}
                ></i>
              </div>

              {/* Submenu */}
              <ul className={`submenu ${openSubmenu === menu.title ? "expanded" : "collapsed"}`}>
                {menu.submenu.map((submenuItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`submenu-item ${isActive(submenuItem.path) ? "active" : ""}`}
                    onClick={() => {
                      navigate(submenuItem.path);
                      setOpenSubmenu(null);
                      menuItemClick();
                    }}
                  >
                    <i className={submenuItem.icon}></i> {submenuItem.title}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

