import React, { useEffect, useState } from "react";
import BuiltCard from "../components/BuiltCard";
import { useAuth } from "../context/AuthContext";
import PlayGround from "../components/PlayGround";
import axios from "axios";

const SavedBuilt = () => {
  const [savedPlans, setSavedPlans] = useState([]);
  const [planChosen, setPlanChosen] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/api/user/getPlans`, {
        email: currentUser.email,
      })
      .then((res) => setSavedPlans(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deletePlan = (planName) => {
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

  return !planChosen ? (
    <div className="flex flex-col justify-center items-center h-full text-5xl gap-y-5">
      This page contains all saved builts
      <div className="grid grid-cols-3 gap-4">
        {savedPlans.map((plan) => (
          <BuiltCard
            key={plan.name}
            plan={plan}
            setPlanChosen={setPlanChosen}
            deletePlan={deletePlan}
          />
        ))}
      </div>
    </div>
  ) : (
    <PlayGround
      initialNodes={planChosen.nodes}
      initialEdges={planChosen.edges}
    />
  );
};

export default SavedBuilt;
