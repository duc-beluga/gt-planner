import React, { useState } from "react";
import PlayGround from "../components/PlayGround";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const [majorSelected, setMajorSelected] = useState(false);
  const { logInWithGoogle } = useAuth();

  return !majorSelected ? (
    <div className="flex gap-4 flex-col justify-center items-center h-full text-5xl">
      This is Home Page
      <button className="btn" onClick={logInWithGoogle}>
        Sign In With Google
      </button>
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
          Build
        </button>
      </div>
    </div>
  ) : (
    <PlayGround />
  );
};

export default Home;
