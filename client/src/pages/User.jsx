import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import DropDown from "../components/DropDown";
import HorizontalScrollingMenu from "../components/HorizontalScrollingMenu";
import axios from "axios";

const User = () => {
  const [isDiscoverable, setIsDiscoverable] = useState(false);
  const [isPlanChosen, setIsPlanChosen] = useState(false);
  const { currentUser } = useAuth();
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/api/user/${
          currentUser.uid
        }/plans/names`
      )
      .then((response) => setPlans(response.data.map((plan) => plan.name)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-4">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{currentUser.displayName}</h2>
          <div className="card-actions justify-end">
            <label className="label cursor-pointer gap-4">
              <span className="label-text">Discoverable</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={isDiscoverable}
                onChange={() => {
                  setIsDiscoverable(!isDiscoverable);
                  setIsPlanChosen(false);
                }}
              />
            </label>
          </div>
        </div>
      </div>
      {isDiscoverable && (
        <DropDown options={plans} handleOptionSelect={setIsPlanChosen} />
      )}
      {isPlanChosen && <HorizontalScrollingMenu />}
    </div>
  );
};

export default User;
