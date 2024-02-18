import React from "react";
import BuiltCard from "./BuiltCard";
import { PlusCircle } from "lucide-react";

const SavedBuilt = () => {
  return (
   <main className="h-screen justify-center flex flex-col items-center">
    <h1 className="text-2xl">How would you like to start?</h1>
    <div className ="carousel rounded-box">
      <div className="carousel-item">
      <input type= "image" id=" " onclick=" " src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="btn" />
      {/* <button className="btn btn-outline"
          onClick={() => {

          }}
        >
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Class graph" />
        </button> */}
        
      </div> 
      <div className="carousel-item">
        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Build my own" />
      </div> 
   </div>
   </main>
  );
};

export default SavedBuilt;