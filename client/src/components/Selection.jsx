import React, { useState } from "react";

const SavedBuilt = () => {
  // Move to parent.
  const [userOption, setUserOption] = useState("")
  return (
    <main className="h-screen flex justify-center flex-col items-center">
      <div>
        <h1 className="text-5xl p-5">How would you like to start?</h1>
      </div>

      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <button className="btn h-max btn-outline m-5 rounded-none p-0"
            onClick={() => {
              setUserOption("blue")
            }}
          >
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Class graph" />
          </button>
        </div>
        <div className="carousel-item">
          <button className="btn h-max btn-outline m-5 rounded-none p-0"
            onClick={() => {
              setUserOption("pink")
            }}
          >
            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Class graph" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default SavedBuilt;