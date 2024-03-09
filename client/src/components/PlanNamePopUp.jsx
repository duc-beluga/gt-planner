import React, { useCallback } from "react";
import { Wrench } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const PlanNamePopUp = ({ rfInstance, currentUser, setPlanName }) => {
  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (rfInstance) {
        const flow = rfInstance.toObject();
        axios
          .post(
            `${import.meta.env.VITE_SERVER_URL}/api/user/${currentUser.email}/plans`,
            {
              newPlan: {
                name: event.target[0].value,
                content: JSON.stringify(flow),
              },
            },
          )
          .then((result) => {
            toast.success(result.data.message);
            setPlanName(event.target[0].value);
            document.getElementById("plan-name").close();
          })
          .catch((error) => toast.error(error.response.data.message));
      }
    },
    [rfInstance, currentUser.email],
  );

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
