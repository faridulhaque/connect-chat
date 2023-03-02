import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import RequireUser from "./RequireUser";

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireUser>
        <App />
      </RequireUser>
    ),
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default routers;
