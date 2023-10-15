import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage';

  export const router = createBrowserRouter([
    {
      path: "/",
      element:     <div className="text-white">
      Hello world!
    </div>,
      errorElement: <ErrorPage />,
    },
  ]);
