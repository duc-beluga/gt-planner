import React from "react";
import { useAuth } from "../context/AuthContext";

const User = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-4">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{currentUser.displayName}</h2>
          <div className="card-actions justify-end">
            <label className="label cursor-pointer gap-4">
              <span className="label-text">Discoverable</span>
              <input type="checkbox" className="toggle toggle-primary" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
