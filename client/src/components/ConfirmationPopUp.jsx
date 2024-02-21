import React from "react";

const ConfirmationPopUp = ({ setIsDeleted }) => {
  return (
    <dialog id="confirmation-pop-up" className="modal">
      <div className="modal-box max-w-xs">
        <h3>Do you want to delete this plan?</h3>
        <form method="dialog">
          <div className="modal-action justify-between">
            <button className="btn">Cancel</button>
            <button className="btn" onClick={() => setIsDeleted(true)}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default ConfirmationPopUp;
