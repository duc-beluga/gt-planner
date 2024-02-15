import React from "react";
import { useAuth } from "../context/AuthContext";

const User = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex justify-center items-center h-full text-5xl">
      Hi {currentUser.displayName}
    </div>
  );
};

export default User;
