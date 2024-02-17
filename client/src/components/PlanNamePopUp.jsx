import React from "react";
import { Wrench } from "lucide-react";

const PlanNamePopUp = ({ setProjectName }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    console.log(event);
    setProjectName(event.target[0].value); // Update the parent state with the input value
  };

  return (
    <dialog id="plan-name" className="modal">
      <div className="modal-box max-w-xs">
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Project name"
              className="input input-bordered"
            />
          </div>
          <div className="modal-action justify-center">
            <button className="btn" type="submit">
              Build <Wrench />
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default PlanNamePopUp;