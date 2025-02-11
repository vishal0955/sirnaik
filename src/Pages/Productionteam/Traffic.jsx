import React, { useState } from "react";
import Jobs from "./Jobs";

const components = [
    <div className="p-3">
        <p>New </p><Jobs /></div>,
    <div className="p-3">
        <p>In Progress </p>
        <Jobs /></div>,
  <div className="p-3"><p>Completed </p><Jobs /></div>
];

const tabLabels = ["New", "In Progress", "Completed"];
const statusFilters = ["Pending", "InProgress", "Completed"];

const Traffic = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mt-3">
      <ul className="nav nav-tabs">
        {tabLabels.map((label, index) => (
          <li className="nav-item" key={index}>
            <button
              className={`nav-link ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      <div className="border p-3 mt-2"> 
         <Jobs filterStatus={statusFilters[activeIndex]} />
      </div>
    </div>
  );
};

export default Traffic;
