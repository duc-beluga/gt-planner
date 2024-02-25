import { useRoutes } from "react-router-dom";
import MainContainer from "./components/layout/MainContainer";
import Home from "./pages/Home";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import SavedBuilt from "./pages/SavedBuilt";
import CoursesTaken from "./pages/CourseTaken";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/user", element: <User /> },
    { path: "/saved", element: <SavedBuilt /> },
    { path: "/courses-taken", element: <CoursesTaken /> },
  ]);

  return (
    <div className="flex flex-col h-screen">
      <Toaster position="top-center" />
      <Navbar />
      <MainContainer>{routes}</MainContainer>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
