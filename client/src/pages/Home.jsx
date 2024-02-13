import React, { useState } from "react";

const Home = () => {
  const [majorSelected, setMajorSelected] = useState(false);

  return !majorSelected ? (
    <div className="flex gap-4 flex-col justify-center items-center h-full text-5xl">
      This is Home Page
      <div className="flex gap-2">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Major
          </option>
          <option>Computer Science</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Thread
          </option>
          <option>Media</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Thread
          </option>
          <option>Intelligence</option>
        </select>
      </div>
      <div>
        <button className="btn" onClick={() => setMajorSelected(true)}>
          Build
        </button>
      </div>
    </div>
  ) : (
    <h1>Hello World</h1>
  );
};

export default Home;
