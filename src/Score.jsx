import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Score = () => {
  return (
    <div className="p-4 w-1/4">
      <h2 className="text-xl mb-4">Score</h2>
      <div className="relative mb-4">
        <CircularProgressbar
          value={78}
          text={`${78}`}
          styles={buildStyles({
            // Customize the root svg element
            pathColor: "#1e40af", // Dark blue color
            textColor: "#1a365d", // Dark blue color
            trailColor: "dbeafe", // Light gray color
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
      <ul className="list-none p-0">
        <li className="flex justify-between items-center mb-2 mt-2">
          <h1 className="text-5xl">78</h1>
        </li>
        <hr className="h-1 bg-gray-300" />
        <li className="flex justify-between items-center mb-2 mt-2">
          <span>down</span>
          <img src="/play-button-blue.png" alt="Play" className="w-8 h-8" />
        </li>
        <hr className="h-1 bg-gray-300" />
        <li className="flex justify-between items-center mb-2 mt-2">
          <span>occupied</span>
          <img src="/play-button-blue.png" alt="Play" className="w-8 h-8" />
        </li>
        <hr className="h-1 bg-gray-300" />
        <li className="flex justify-between items-center mt-2 ">
          <span>Olivia</span>
          <img src="/play-button-blue.png" alt="Play" className="w-8 h-8" />
        </li>
      </ul>
    </div>
  );
};

export default Score;
