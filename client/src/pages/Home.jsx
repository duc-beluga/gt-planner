import React, { useState } from "react";
import PlayGround from "../components/PlayGround";
import { Wrench } from "lucide-react";

const Home = () => {
  const [majorSelected, setMajorSelected] = useState(false);

  return !majorSelected ? (
    <div className="flex gap-4 flex-col justify-center items-center h-full text-5xl">
      <div className="my-10 font-bold">Craft Your Academic Adventure</div>
      <div className="flex gap-2">
        <select className="select select-bordered w-full max-w-xs">
          <option>Major</option>
          <option>Computer Science</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option>Thread</option>
          <option>Media</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option>Thread</option>
          <option>Intelligence</option>
        </select>
      </div>
      <div>
        <button className="btn" onClick={() => setMajorSelected(true)}>
          Build <Wrench />
        </button>
      </div>
    </div>
  ) : (
    <PlayGround />
  );
};

export default Home;
