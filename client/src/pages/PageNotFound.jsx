import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold">404</h1>
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <Link to="/" className="btn mt-4">
        Go Home
      </Link>
    </div>
  );
};
export default PageNotFound;
