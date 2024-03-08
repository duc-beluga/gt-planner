import { useRoutes } from "react-router-dom";
import MainContainer from "./components/layout/MainContainer";
import Home from "./pages/Home";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import SavedBuilt from "./pages/SavedBuilt";
import PageNotFound from "./pages/PageNotFound";
import CoursesTaken from "./pages/CoursesTaken";
import { Toaster } from "react-hot-toast";
import Chat from "./pages/Chat";
import { Suspense } from "react";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/user", element: <User /> },
    { path: "/saved", element: <SavedBuilt /> },
    { path: "/courses-taken", element: <CoursesTaken /> },
    { path: "/chat", element: <Chat /> },
    { path: "*", element: <PageNotFound /> },
  ]);

  return (
    <div className="flex flex-col h-screen">
      <Toaster position="top-center" />
      <Navbar />
      <MainContainer>
        <Suspense
          fallback={<div className="text-5xl font-bold">Loading...</div>}
        >
          {routes}
        </Suspense>
      </MainContainer>
    </div>
  );
}

export default App;
