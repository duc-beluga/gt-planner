import React from "react";

const BuiltCard = ({ plan, setIsPlanChosen, setPlanChosen }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">{plan.name}</h3>

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              setPlanChosen(JSON.parse(plan.content));
              setIsPlanChosen(true);
            }}
          >
            Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuiltCard;
