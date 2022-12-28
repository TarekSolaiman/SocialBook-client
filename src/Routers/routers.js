import { createBrowserRouter } from "react-router-dom";
import Home from "../AllPages/HomePage/Home";
import LoginPage from "../AllPages/LoginAdnSigninPaeg/LoginPage";
import SigninPage from "../AllPages/LoginAdnSigninPaeg/SigninPage";
import Main from "../Layout/Main";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signin",
        element: <SigninPage />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
