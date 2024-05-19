import React from "react";

const HomeWorkDetails = () => {
  return (
    <div className="flex flex-col p-4 w-full">
      <h2 className="text-xl mb-4">View Homework</h2>
      <div className="flex mb-4">
        <div className="w-1/3 h-48 overflow-y-auto">
          <ul className="list-none p-0">
            {[
              "Anirudh K",
              "Arjun Hegde",
              "Jaswanth",
              "Keerthana",
              "Malini",
              "Pragadish Kumar",
            ].map((name, index) => (
              <li
                key={name}
                className={`p-2 border-b flex justify-between items-center ${index===0 ? ' border border-blue-800' : ''}`}
              >
                <span>{name}</span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-4 border-l">
          <div className="flex mb-4">
            <div className="w-2/3">
              <div className="flex mb-2">
                <div className="mr-4 w-36">
                  <span>Expert audio</span>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex">
                  <span>00:00</span>
                    <input
                      type="range"
                      className="ml-2 w-full"
                      value={"0"}
                      style={{
                        marginTop:"12px",
                        marginRight:"6px",
                        WebkitAppearance:"none",
                        width:"100%",
                        background:"lightgray",
                        height:"2px",
                        outline:"none"
                      }}
                    />
                    <span>00:00</span>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="/play-button-black.png"
                      alt="Play"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
              <div className="flex mb-2">
                <div className="mr-4 w-36">
                  <span>Try 1</span>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex">
                    <span>00:00</span>
                    <input
                      type="range"
                      className="ml-2 w-full accent-blue-800"
                      style={{
                        marginTop:"12px",
                        marginRight:"6px",
                        WebkitAppearance:"none",
                        width:"100%",
                        background:"lightblue",
                        height:"2px",
                        outline:"none"
                      }}
                      value={"0"}
                    />
                    <span>00:00</span>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="/play-button-blue.png"
                      alt="Play"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Mistake: 3</h1>
          </div>
          <div className="border p-4">
            <p>
              Her ornaments and luxuries had been removed, and a bed had been
              placed in a corner to transform it into a new pupil's bedroom.
              When she went <span className="bg-yellow-300">down</span> to
              breakfast she saw that her seat at Miss Natasha's side was{" "}
              <span className="bg-yellow-300">occupied</span> by Lavinia, and
              Miss <span className="bg-yellow-300">Olivia</span> spoke to her
              coldly.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-white text-blue-900 text-xl py-2 px-4 rounded border flex items-center font-weight-500 mx-2">
              <img
                src="/microphone.png"
                alt="microphone"
                className="w-10 h-10 mr-2"
              />
              Record Again
            </button>
            <button className="bg-blue-800 text-white py-2 px-4 rounded mx-2 w-48">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWorkDetails;
