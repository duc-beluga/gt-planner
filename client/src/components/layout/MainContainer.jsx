import React from "react";
import { Outlet } from "react-router-dom";

const MainContainer = ({ children }) => {
  return <div className="bg-gray-400 h-screen">{children}</div>;
};

export default MainContainer;
