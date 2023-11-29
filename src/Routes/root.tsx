import {
    createBrowserRouter,
  } from "react-router-dom";
  import Home from "../pages/Home";
import ErrorPage from '../pages/ErrorPage';
import Login from "../pages/Login";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "login",
      element: <Login/>, 
    },
  ]);
