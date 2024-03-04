import { XCircle, CheckCircle } from "lucide-react";

const ConfirmationPopUp = ({ planDeleteChosen, onDeletePlan }) => {
  return (
    <dialog id="confirmation-pop-up" className="modal">
      <div className="modal-box max-w-xs">
        <p className="text-base">Do you want to delete this plan?</p>
        <form method="dialog">
          <div className="modal-action justify-between">
            <button
              className="btn btn-outline btn-error"
              onClick={() => onDeletePlan(planDeleteChosen)}
            >
              <CheckCircle />
            </button>
            <button className="btn btn-outline btn-info">
              <XCircle />
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default ConfirmationPopUp;
