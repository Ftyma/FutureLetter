import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Login_Signup from "../pages/Login_Signup";

const Router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login_signup", element: <Login_Signup /> },
]);

export default Router;
