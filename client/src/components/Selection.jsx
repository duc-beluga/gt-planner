import React from "react";
import BuiltCard from "./BuiltCard";
import { PlusCircle } from "lucide-react";

const SavedBuilt = () => {
  return (
    <main className="h-screen flex justify-center flex-col items-center">
      <div>
        <h1 className="text-5xl p-5">How would you like to start?</h1>
      </div>

      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <button className="btn h-max btn-outline m-5 rounded-none p-0"
            onClick={() => {
              console.log("Blue Pressed");
            }}
          >
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Class graph" />
          </button>
        </div>
        <div className="carousel-item">
          <button className="btn h-max btn-outline m-5 rounded-none p-0"
            onClick={() => {
              console.log("Pink Pressed");
            }}
          >
            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Class graph" />
          </button>
        </div>
      </div>

      <div className="flex justify-end w-full">
        <button
          className="btn btn-neutral w-2/12 mr-96"
          onClick={() => {
            console.log("save pressed")
          }}
        >
          Save
        </button>
      </div>


    </main>
  );
};

export default SavedBuilt;