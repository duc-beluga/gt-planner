import React, { createContext, useContext } from "react";

const FlowContext = createContext();

export const FlowProvider = ({ children, createPostCourse }) => {
  return (
    <FlowContext.Provider value={{ createPostCourse }}>
      {children}
    </FlowContext.Provider>
  );
};

export const useFlow = () => useContext(FlowContext);
