import React, { useEffect, useState } from "react";
import BuiltCard from "../components/BuiltCard";
import { useAuth } from "../context/AuthContext";
import PlayGround from "../components/PlayGround";
import axios from "axios";
import ConfirmationPopUp from "../components/ConfirmationPopUp";
import { LampDesk } from "lucide-react";
import Spinner from "../components/Spinner";

const SavedBuilt = () => {
  const [savedPlans, setSavedPlans] = useState([]);
  const [planBuildChosen, setPlanBuildChosen] = useState(null);
  const [planDeleteChosen, setPlanDeleteChosen] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/api/user/getPlans`, {
        email: currentUser.email,
      })
      .then((res) => setSavedPlans(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const onDeletePlan = (planName) => {
    setSavedPlans(savedPlans.filter((plan) => plan.name != planName));
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/api/user/deletePlan`, {
        data: {
          email: currentUser.email,
          planName: planName,
        },
      })
      .catch((err) => console.log(err));
  };

  return !planBuildChosen ? (
    <div className="flex flex-col justify-center items-center h-full text-5xl gap-y-5">
      {loading ? (
        <Spinner />
      ) : savedPlans.length !== 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {savedPlans.map((plan) => (
            <BuiltCard
              key={plan.name}
              plan={plan}
              setPlanBuildChosen={setPlanBuildChosen}
              setPlanDeleteChosen={setPlanDeleteChosen}
              onDeletePlan={onDeletePlan}
            />
          ))}
          <ConfirmationPopUp
            planDeleteChosen={planDeleteChosen}
            onDeletePlan={onDeletePlan}
          />
        </div>
      ) : (
        <div>
          <div className="stat-value pl-7">
            <LampDesk size={84} />
          </div>
          <div className="stat-value">n(O) saved plans</div>
        </div>
      )}
    </div>
  ) : (
    <PlayGround
      projectName={planBuildChosen.name}
      initialNodes={planBuildChosen.nodes}
      initialEdges={planBuildChosen.edges}
    />
  );
};

export default SavedBuilt;
