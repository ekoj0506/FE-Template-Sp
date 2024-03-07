import {
    createBrowserRouter,
  } from "react-router-dom";
  import Home from "../pages/Home";
import ErrorPage from '../pages/ErrorPage';
import Login from "../pages/Login";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import { responseProductDetailApi } from "../Apis/indexApi";
  export const router = createBrowserRouter([
    {
      path: "",
      element: <Home/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "login",
      element: <Login/>, 
    },
    {element: <Product/>, 
      path: "/product",
      
     
      children:
      [
        {
          element:<Product/>,
          path:"/product/:idProduct",
          
},
          
        
      ]
    },
    {
      path:"cart",
      element: <Cart/>
    }
  ]);
