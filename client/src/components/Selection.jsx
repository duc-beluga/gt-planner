import React from "react";
import BuiltCard from "./BuiltCard";
import { PlusCircle } from "lucide-react";

const SavedBuilt = () => {
  return (
   <main className="h-screen justify-center flex flex-col items-center">
    <h1 className="text-5xl">How would you like to start?</h1>
    <div className ="carousel carousel-center rounded-box">
      <div className="carousel-item">
      <button className="btn h-max btn-outline p-0 rounded-none"
          onClick={() => {
            console.log("Blue Pressed");
          }}
        >
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Class graph" />
        </button>
      </div> 
      <div className="carousel-item">
      <button className="btn h-max btn-outline p-0 rounded-none"
          onClick={() => {
            console.log("Pink Pressed");
          }}
        >
          <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Class graph" />
        </button>
      </div> 
   </div>

   <button
          className="btn btn-neutral"
          onClick={() => {
            console.log("save pressed")
          }}
        >
          Save
        </button>
   </main>
  );
};

export default SavedBuilt;