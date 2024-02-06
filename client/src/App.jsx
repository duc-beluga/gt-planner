import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

import "./App.css";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "user", element: <User /> },
  ]);

  return routes;
}

export default App;
