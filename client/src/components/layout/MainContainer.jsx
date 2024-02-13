import React from "react";
import { Outlet } from "react-router-dom";

const MainContainer = ({ children }) => {
  return <div className="h-screen">{children}</div>;
};

export default MainContainer;
