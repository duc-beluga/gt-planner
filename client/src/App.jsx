import { useRoutes } from "react-router-dom";
import MainContainer from "./components/layout/MainContainer";
import Home from "./pages/Home";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "user", element: <User /> },
  ]);

  return (
    <>
      <Navbar />
      <MainContainer>{routes}</MainContainer>
      <Footer />
    </>
  );
}

export default App;
