import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-blue-100 w-64 h-full p-4 flex flex-col">
      <nav className="flex flex-col">
        <a href="#" className="flex flex-col items-center mb-4">
          {/* <FaHome className="mr-2" /> */}
          <img src="/home.png" alt="Home" className="w-10 h-10 mr-2" />
          <span className="text-center" >Home</span>
        </a>
        <a href="#" className="flex flex-col items-center mb-4">
          {/* <FaTasks className="mr-2" /> */}
          <img src="/edit.png" alt="Edit" className="w-10 h-10 mr-2" />
          <span className="text-center" >Assign Homework</span>
        </a>
        <a href="#" className="flex flex-col items-center mb-4 bg-blue-900 text-white rounded p-2">
          {/* <FaTasks className="mr-2" /> */}
          <img src="/document.png" alt="ViewHomework" className="w-10 h-10 mr-2" />
          <span className="text-center" >View Homework</span>
        </a>
        <a href="#" className="flex flex-col items-center mb-4">
          {/* <FaUserGraduate className="mr-2" /> */}
          <img src="/pupil.png" alt="View Students" className="w-10 h-10 mr-2" />
          <span className="text-center" >View Students</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
