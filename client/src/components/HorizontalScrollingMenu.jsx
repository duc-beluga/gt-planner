import React, { useState } from "react";

const HorizontalScrollingMenu = () => {
  const items = [
    "Person 1",
    "Person 2",
    "Person 3",
    "Person 4",
    "Person 5",
    "Person 6",
    "Person 7",
    "Person 8",
  ];
  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount * 2.5,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="flex overflow-x-auto w-96 gap-4 scrollbar-hide border-2 p-12 rounded-md"
      onWheel={handleScroll}
    >
      {items.map((item) => (
        <div
          key={item}
          className="card border-2 p-2 rounded-lg pointer-events-none shadow-xl"
        >
          <div className="card-body">
            <div className="flex justify-center items-center">{item}</div>
            <div className="card-actions">
              <button
                className="btn pointer-events-auto"
                onClick={() => console.log("Hey")}
              >
                Ping
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollingMenu;
