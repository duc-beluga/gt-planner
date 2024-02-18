import React from "react";

const BuiltCard = ({ planName }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">{planName}</h3>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Build</button>
        </div>
      </div>
    </div>
  );
};

export default BuiltCard;
