import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
// import Login from "./components/AuthPage/Login";
import Login from './authtication/Login';

 

import ProjectOwner from "./components/Tables/ProjectOwner";
import TaskPage from "./components/Tables/TaskTable";
import AddProject from "./components/Forms/AddProject";
import TaskForm from "./components/Forms/AddTask";
import DashBoard from "./components/DashBoard";
import Timesheet from "./components/Tables/TimesheetTable";
import TimeLogForm from "./components/Forms/AddLog";
import Tasks from "./Designer/Tasks";
import DTimesheet from "./Designer/Timesheet";
import Designer from "./Designer/Dashboard";
import ProjectManagementDashboard from "./components/ProjectMDashboard";
import Jobs from "./Pages/Productionteam/Jobs";
import TaskDetails from "./Designer/TaskDetails";
import ProjectOverview from "./components/Project/Projectoverview";
import Traffic from "./Pages/Productionteam/Traffic";
import AdminDashboard from "./components/Admin/AdminDashboard";
import TaskDetailsForm from "./Pages/Productionteam/EditTaskDetails";
import EmployeePage from "./components/Admin/EmployeeList";
import EmployeeProfile from "./components/Admin/EmployeeProfile";
import ClientProfile from "./components/Admin/ClientProfile";
import ClientPage from "./components/Admin/ClientTable";
import  ClientTable  from "./components/Admin/ClientTable";
import ClientForm from "./components/Admin/ClientForm";
import DesignationTable from "./components/Admin/DesignationTable";
import AddDesignation from "./components/Admin/AddDesignation";
import Department from "./components/Admin/Department";
import AddDepartment from "./components/Admin/AddDepartment";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isClinicSidebarOpen, setIsClinicSidebarOpen] = useState(false);
  const menusidebarcollaps = () => {
    setIsSidebarCollapsed(true);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };
  // Open ClinicManageSidebar (on EMR menu click)
  const openClinicSidebar = () => {
    setIsClinicSidebarOpen(true);
  };
  // Back button in ClinicManageSidebar to show the main sidebar again
  const closeClinicSidebar = () => {
    setIsClinicSidebarOpen(false);
  };
  const location = useLocation();

  const hideLayout = location.pathname === "/";
  // console.log("-----------------",isClinicSidebarOpen)
  return (
    <>
      {/* navbar */}
      {!hideLayout && (
        <Navbar toggleSidebar={toggleSidebar} onBack={closeClinicSidebar} />
      )}
      {/* navbar end */}
      {/* sidebar start */}
      <div className={`main-content  ${hideLayout ? "" : ""}`}>
        {!hideLayout &&
          (isClinicSidebarOpen ? (
            <>
              <ClinicManageSidebar
                collapsed={isSidebarCollapsed}
                menuItemClick={menusidebarcollaps}
                onBack={closeClinicSidebar} // Back button click event
              />
            </> 
          ) : (
            <Sidebar
              collapsed={isSidebarCollapsed}
              // menuItemClick={menusidebarcollaps}
              onEMRClick={openClinicSidebar} // Open ClinicManageSidebar on EMR click
            />
          ))}
        {/* sidebar end */}
        {/* right side  */}
        <div
          className={`right-side-content ${
            isSidebarCollapsed ? "collapsed " : ""
          }`}>
          <Routes>
            {/* login signup */}
            <Route path="/" element={<Login />} />
            {/* <Route path="/dashboard" element={<DashBoard />} /> */}
            <Route path="/dashboard" element={<AdminDashboard />} />
           

            <Route path="/employeelist" element={<EmployeePage />} />
            <Route path="/employeeprofile" element={<EmployeeProfile />} />
            <Route path="/client" element={<ClientPage />} />
            <Route path="/clientprofile" element={<ClientProfile />} />
            <Route path="/designation" element={<DesignationTable />} />
            <Route path="/department" element={<Department/>}/>
            <Route path="/adddesigna" element={<AddDesignation/>}/>
          
            <Route path="/addDepart" element={<AddDepartment/>}/>

            <Route path="/projectmanagementdashboard" element={<ProjectManagementDashboard />} />
            <Route path="/project" element={<ProjectOwner />} />
            
            <Route path="/tasklist" element={<TaskPage />} />
            <Route path="/addproject" element={<AddProject />} />
            <Route path="/addtask" element={<TaskForm />} />
            <Route path="/addlog" element={<TimeLogForm />} />
            <Route path="/timesheet" element={<Timesheet />} />
            <Route path="/clientTable" element={<ClientTable/>}/>
            <Route path="/clientForm" element={<ClientForm/>}/>
            {/* <Route path="/desigTable" element={<DesignationTable/>}/> */}
            
            

            {/* Designer Routes */}

            <Route path="/designerdashboard" element={<Designer />} />
            <Route path="/designertask" element={<Tasks />} />
            <Route path="/dtimesheet" element={<DTimesheet />} />
            <Route path="/taskdetails" element={<TaskDetails />} />
            {/* Production Team  */}

            <Route path="/jobs" element={<Jobs /> } />
            <Route path="/traffic" element={<Traffic /> } />
           <Route path="/ProjectOverview" element={<ProjectOverview  />} />
            <Route path="/edittaskdetails" element={<TaskDetailsForm  />} />

          </Routes>
        </div>
        {/* right end  */}
      </div>
    </>
  );
}
export default App;
