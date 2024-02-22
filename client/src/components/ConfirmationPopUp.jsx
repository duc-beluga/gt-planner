import React from "react";

const ConfirmationPopUp = ({ planDeleteChosen, onDeletePlan }) => {
  return (
    <dialog id="confirmation-pop-up" className="modal">
      <div className="modal-box max-w-xs">
        <h3>Do you want to delete this plan?</h3>
        <form method="dialog">
          <div className="modal-action justify-between">
            <button
              className="btn btn-outline btn-error"
              onClick={() => onDeletePlan(planDeleteChosen)}
            >
              Delete
            </button>
            <button className="btn btn-outline btn-info">Cancel</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default ConfirmationPopUp;
