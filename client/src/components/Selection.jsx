import React from "react";
import BuiltCard from "./BuiltCard";

const SavedBuilt = () => {
  return (
   <main class="h-screen justify-center flex flex-col items-center">
    <h1>How would you like to start?</h1>
    <body class ="carousel rounded-box">
      <div class="carousel-item">
        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
      </div> 
      <div class="carousel-item">
        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
      </div> 
   </body>
   </main>
  );
};

export default SavedBuilt;