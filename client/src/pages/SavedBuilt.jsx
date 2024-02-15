import React from "react";
import BuiltCard from "../components/BuiltCard";

const SavedBuilt = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-5xl gap-y-5">
      This page contains all saved builts
      <div className="grid grid-cols-4 gap-4">
        <BuiltCard />
        <BuiltCard />
        <BuiltCard />
        <BuiltCard />
      </div>
    </div>
  );
};

export default SavedBuilt;
