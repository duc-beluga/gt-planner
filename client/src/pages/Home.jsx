import React from "react";

const Home = () => {
  return (
    <div className="flex gap-4 flex-col justify-center items-center h-full text-5xl text-white">
      This is Home Page
      <div className="flex gap-2">
        <button className="border-2 p-2">Button 1</button>
        <button className="border-2 p-2">Button 2</button>
      </div>
    </div>
  );
};

export default Home;
