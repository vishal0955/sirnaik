// import { Route, Routes, useLocation } from "react-router-dom";
// import "./App.css";
// import { useState } from "react";
// import Navbar from "./layout/Navbar";
// import Sidebar from "./layout/Sidebar";
// // import Login from "./components/AuthPage/Login";
// import Login from './authtication/Login';

 

// import ProjectOwner from "./components/Tables/ProjectOwner";
// import TaskPage from "./components/Tables/TaskTable";
// import AddProject from "./components/Forms/AddProject";
// import TaskForm from "./components/Forms/AddTask";
// import DashBoard from "./components/DashBoard";
// import Timesheet from "./components/Tables/TimesheetTable";
// import TimeLogForm from "./components/Forms/AddLog";
// import Tasks from "./Designer/Tasks";
// import DTimesheet from "./Designer/Timesheet";
// import Designer from "./Designer/Dashboard";
// import ProjectManagementDashboard from "./components/ProjectMDashboard";
// import Jobs from "./Pages/Productionteam/Jobs";
// import TaskDetails from "./Designer/TaskDetails";

// import Traffic from "./Pages/Productionteam/Traffic";
// import AdminDashboard from "./components/Admin/AdminDashboard";
// import TaskDetailsForm from "./Pages/Productionteam/EditTaskDetails";
// import EmployeePage from "./components/Admin/EmployeeList";
// import EmployeeProfile from "./components/Admin/EmployeeProfile";
// import ClientProfile from "./components/Admin/ClientProfile";
// import ClientPage from "./components/Admin/ClientTable";
// import  ClientTable  from "./components/Admin/ClientTable";
// import ClientForm from "./components/Admin/ClientForm";
// import DesignationTable from "./components/Admin/DesignationTable";
// import AddDesignation from "./components/Admin/AddDesignation";
// import Department from "./components/Admin/Department";
// import AddDepartment from "./components/Admin/AddDepartment";
// import InvoiceTable from "./components/Admin/invoices";
// import ProjectDetail from "./components/Admin/ProjectOverview";
// import AddMembers from "./components/Admin/AddMembers";
// import FileUpload from "./components/Admin/FileUpload";
// import TableTask from "./components/Admin/TableTask";



// function App() {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [isClinicSidebarOpen, setIsClinicSidebarOpen] = useState(false);
//   const menusidebarcollaps = () => {
//     setIsSidebarCollapsed(true);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarCollapsed((prev) => !prev);
//   };
//   // Open ClinicManageSidebar (on EMR menu click)
//   const openClinicSidebar = () => {
//     setIsClinicSidebarOpen(true);
//   };
//   // Back button in ClinicManageSidebar to show the main sidebar again
//   const closeClinicSidebar = () => {
//     setIsClinicSidebarOpen(false);
//   };
//   const location = useLocation();

//   const hideLayout = location.pathname === "/";
//   // console.log("-----------------",isClinicSidebarOpen)
//   return (
//     <>
//       {/* navbar */}
//       {!hideLayout && (
//         <Navbar toggleSidebar={toggleSidebar} onBack={closeClinicSidebar} />
//       )}
//       {/* navbar end */}
//       {/* sidebar start */}
//       <div className={`main-content  ${hideLayout ? "" : ""}`}>
//         {!hideLayout &&
//           (isClinicSidebarOpen ? (
//             <>
//               <ClinicManageSidebar
//                 collapsed={isSidebarCollapsed}
//                 menuItemClick={menusidebarcollaps}
//                 onBack={closeClinicSidebar} // Back button click event
//               />
//             </> 
//           ) : (
//             <Sidebar
//               collapsed={isSidebarCollapsed}
//               // menuItemClick={menusidebarcollaps}
//               onEMRClick={openClinicSidebar} // Open ClinicManageSidebar on EMR click
//             />
//           ))}
//         {/* sidebar end */}
//         {/* right side  */}
//         <div
//           className={`right-side-content ${
//             isSidebarCollapsed ? "collapsed " : ""
//           }`}>
//           <Routes>
//             {/* login signup */}
//             <Route path="/" element={<Login />} />
//             {/* <Route path="/dashboard" element={<DashBoard />} /> */}
//             <Route path="/dashboard" element={<AdminDashboard />} />
           

//             <Route path="/employeelist" element={<EmployeePage />} />
//             <Route path="/employeeprofile" element={<EmployeeProfile />} />
//             <Route path="/client" element={<ClientPage />} />
//             <Route path="/clientprofile" element={<ClientProfile />} />
//             <Route path="/designation" element={<DesignationTable />} />
//             <Route path="/department" element={<Department/>}/>
//             <Route path="/adddesigna" element={<AddDesignation/>}/>
          
//             <Route path="/addDepart" element={<AddDepartment/>}/>

//             <Route path="/projectmanagementdashboard" element={<ProjectManagementDashboard />} />
//             <Route path="/project" element={<ProjectOwner />} />
//             <Route path="/projectdetails" element={<ProjectDetail />} />
            
//             <Route path="/tasklist" element={<TaskPage />} />
//             <Route path="/addproject" element={<AddProject />} />
//             <Route path="/addtask" element={<TaskForm />} />
//             <Route path="/addlog" element={<TimeLogForm />} />
//             <Route path="/timesheet" element={<Timesheet />} />
//             <Route path="/clientTable" element={<ClientTable/>}/>
//             <Route path="/clientForm" element={<ClientForm/>}/>
//             {/* <Route path="/desigTable" element={<DesignationTable/>}/> */}
            
//             <Route path="/desigTable" element={<DesignationTable/>}/>
//             <Route path="/adddesigna" element={<AddDesignation/>}/>
//             <Route path="/depaForm" element={<Department/>}/>
//             <Route path="/addDepart" element={<AddDepartment/>}/>
//             <Route path="/invoices" element={<InvoiceTable/>}/>
//             <Route path="/addMember" element={<AddMembers/>}/>
//             <Route path="/fileUpload" element={<FileUpload/>}/>
//             <Route path="tableTask" element={<TableTask/>}/>
            

//             {/* Designer Routes */}

//             <Route path="/designerdashboard" element={<Designer />} />
//             <Route path="/designertask" element={<Tasks />} />
//             <Route path="/dtimesheet" element={<DTimesheet />} />
//             <Route path="/taskdetails" element={<TaskDetails />} />
//             {/* Production Team  */}

//             <Route path="/jobs" element={<Jobs /> } />
//             <Route path="/traffic" element={<Traffic /> } />
//            {/* <Route path="/ProjectOverview" element={<ProjectOverview  />} /> */}
//             <Route path="/edittaskdetails" element={<TaskDetailsForm  />} />

//           </Routes>
//         </div>
//         {/* right end  */}
//       </div>
//     </>
//   );
// }
// export default App;

import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Login from "./authtication/Login";

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
import Traffic from "./Pages/Productionteam/Traffic";
import AdminDashboard from "./components/Admin/AdminDashboard";
import TaskDetailsForm from "./Pages/Productionteam/EditTaskDetails";
import EmployeePage from "./components/Admin/EmployeeList";
import EmployeeProfile from "./components/Admin/EmployeeProfile";
import ClientProfile from "./components/Admin/ClientProfile";
import ClientPage from "./components/Admin/ClientTable";
import ClientTable from "./components/Admin/ClientTable";
import ClientForm from "./components/Admin/ClientForm";
import DesignationTable from "./components/Admin/DesignationTable";
import AddDesignation from "./components/Admin/AddDesignation";
import Department from "./components/Admin/Department";
import AddDepartment from "./components/Admin/AddDepartment";
import InvoiceTable from "./components/Admin/invoices";
import ProjectDetail from "./components/Admin/ProjectOverview";
import AddMembers from "./components/Admin/AddMembers";
import FileUpload from "./components/Admin/FileUpload";
import TableTask from "./components/Admin/TableTask";
import TimeLogTable from "./components/Admin/TimeLogTable";
import LogTimeForm from "./components/Admin/LogTimeForm";
import ChangeDesginer from "./components/Admin/ChangeDesginer"
import AddProjectTemplate from "./components/Admin/AddProjectTemplate";
import TableTemplate from "./components/Admin/TablwTemplate";
import TaskDashboard from "./components/Admin/TaskDashboard";
import LeaveTable from "./components/Admin/LeaveTable";
import ProductionDashboard from "./Pages/Productionteam/ProductionDashboard";
import ContractTab from "./components/Project/ContractTab";
import Lead from "./Lead & Inquiry Management/Lead";
import Contract from "./Lead & Inquiry Management/Contract";
import Deal from "./Lead & Inquiry Management/Deal";
import Atendence from "./hmr/Atendence";
import ShiftRoster from "./hmr/ShiftRoster";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();

  // Function to check screen size and collapse sidebar on smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarCollapsed(true); // Collapse sidebar on small screens
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const hideLayout = location.pathname === "/";

  return (
    <>
      {!hideLayout  && <Navbar toggleSidebar={toggleSidebar} />}
      
      <div className="main-content">
        {!hideLayout && (
          <Sidebar collapsed={isSidebarCollapsed} />
        )}

        <div className={`right-side-content ${isSidebarCollapsed ? "collapsed" : ""}`}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/employeelist" element={<EmployeePage />} />
            <Route path="/employeeprofile" element={<EmployeeProfile />} />
            <Route path="/client" element={<ClientPage />} />
            <Route path="/clientprofile" element={<ClientProfile />} />
            <Route path="/designation" element={<DesignationTable />} />
            <Route path="/department" element={<Department />} />
            <Route path="/adddesigna" element={<AddDesignation />} />
            <Route path="/addDepart" element={<AddDepartment />} />
            <Route path="/projectmanagementdashboard" element={<ProjectManagementDashboard />} />
            <Route path="/project" element={<ProjectOwner />} />
            <Route path="/projectdetails" element={<ProjectDetail />} />
            <Route path="/tasklist" element={<TaskPage />} />
            <Route path="/addproject" element={<AddProject />} />
            <Route path="/leavetable" element={<LeaveTable />} />
            <Route path="/addtask" element={<TaskForm />} />
            <Route path="/addlog" element={<TimeLogForm />} />
            <Route path="/timesheet" element={<Timesheet />} />
            <Route path="/clientTable" element={<ClientTable />} />
            <Route path="/clientForm" element={<ClientForm />} />
            <Route path="/desigTable" element={<DesignationTable />} />
            <Route path="/adddesigna" element={<AddDesignation />} />
            <Route path="/depaForm" element={<Department />} />
            <Route path="/addDepart" element={<AddDepartment />} />
            <Route path="/invoices" element={<InvoiceTable />} />
            <Route path="/addMember" element={<AddMembers />} />
            <Route path="/fileUpload" element={<FileUpload />} />
            {/* <Route path="tableTask" element={<TableTask />} /> */}
             <Route path="/contract" element={<ContractTab />} />

             {/* Admin CRM  */}
             <Route path="/lead" element={<Lead/>} />
             <Route path="/deal" element={<Deal />} />
             <Route path="/crmcontract" element={< Contract />} />

             <Route path="/attendance" element={<Atendence />} />
             <Route path="/shiftroster" element={<ShiftRoster />} />


            <Route path="/productiondashboard" element={<ProductionDashboard />} />
            
            <Route path="/desigTable" element={<DesignationTable/>}/>
            <Route path="/adddesigna" element={<AddDesignation/>}/>
            <Route path="/depaForm" element={<Department/>}/>
            <Route path="/addDepart" element={<AddDepartment/>}/>
            <Route path="/invoices" element={<InvoiceTable/>}/>
            <Route path="/addMember" element={<AddMembers/>}/>
            <Route path="/fileUpload" element={<FileUpload/>}/>
            {/* <Route path="/tableTask" element={<TableTask/>}/> */}
            <Route path="/timeLog" element={<TimeLogTable/>}/>
            <Route path="/logTable" element={<LogTimeForm/>}/>
            <Route path="/changedes" element={<ChangeDesginer/>}/>
            <Route path="addTemplate" element={<AddProjectTemplate/>}/>
            <Route path="/templateTable" element={<TableTemplate/>}/>
            <Route path="/taskDashboard" element={<TaskDashboard/>}/>
            

            {/* Designer Routes */}
            <Route path="/designerdashboard" element={<Designer />} />
            <Route path="/designertask" element={<Tasks />} />
            <Route path="/dtimesheet" element={<DTimesheet />} />
            <Route path="/taskdetails" element={<TaskDetails />} />
            

            
            
            {/* Production Team */}
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/traffic" element={<Traffic />} />
            <Route path="/edittaskdetails" element={<TaskDetailsForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

