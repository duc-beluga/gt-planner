import React from "react";

const DropDown = ({ options, handleOptionSelect }) => {
  return (
    <div className="mt-1 w-96 bg-white rounded-lg overflow-y-auto max-h-60 scrollbar-hide">
      {" "}
      {options.map((option, index) => (
        <div
          key={index}
          className="p-3 cursor-pointer rounded-lg my-1 bg-gray-100 hover:bg-gray-300"
          onClick={() => handleOptionSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
