import React, { useEffect, useState } from "react";
import BuiltCard from "../components/BuiltCard";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const SavedBuilt = () => {
  const [savedPlans, setSavedPlans] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/api/user/getPlans`, {
        email: currentUser.email,
      })
      .then((res) => setSavedPlans(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-full text-5xl gap-y-5">
      This page contains all saved builts
      <div className="grid grid-cols-3 gap-4">
        {savedPlans.map((plan) => (
          <BuiltCard planName={plan.name} />
        ))}
        {/* <BuiltCard /> */}
        {/* <BuiltCard /> */}
      </div>
    </div>
  );
};

export default SavedBuilt;
