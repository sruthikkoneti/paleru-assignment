import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <img src="/left-arrow.png" alt="Back" className="w-10 h-10 mr-2" />
        <span className="text-2xl" >Back</span>
      </div>
    </nav>
  );
};

export default Navbar;
