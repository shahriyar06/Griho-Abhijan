import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Error from "../Page/Error/Error";
import Estatedetails from "../Page/Estatedetails/Estatedetails";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path: '/about',
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/estate/:Id',
          element: <Estatedetails></Estatedetails>,
          loader: () => fetch('https://shahriyar06.github.io/Griho-abijan/grihoabijan.json')
          // loader: () => fetch('grihoabijan.json')
        }
      ],
    },
  ]);

  export default router;