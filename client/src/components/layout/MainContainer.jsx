import React from "react";
import { Outlet } from "react-router-dom";

const MainContainer = ({ children }) => {
  return <div className="flex-grow">{children}</div>;
};

export default MainContainer;
