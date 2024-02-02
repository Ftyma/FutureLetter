import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import LandingP from "../pages/LandingP";
import Letter from "../pages/Letter";
import Login_Signup from "../pages/Login_Signup";

const Router = createBrowserRouter([
  { path: "/", element: <LandingP /> },
  { path: "/login_signup", element: <Login_Signup /> },
  { path: "/letter", element: <Letter /> },
]);

export default Router;
