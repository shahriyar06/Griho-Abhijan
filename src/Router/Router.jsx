import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Error from "../Page/Error/Error";
import Estatedetailinfo from "../Page/Estatedetailinfo/Estatedetailinfo";
import Property from "../Page/Property/Property";
import Privateroute from './../Page/Privateroute/Privateroute';
import Profile from "../Page/Profile/Profile";



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
            path: '/property',
            element: <Privateroute><Property></Property></Privateroute>,
        },
        {
            path: '/profile',
            element: <Privateroute><Profile></Profile></Privateroute>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
          path: '/estate/:id',
          element: <Privateroute><Estatedetailinfo></Estatedetailinfo></Privateroute>,
          loader: () => fetch('https://shahriyar06.github.io/Griho-abijan/grihoabijan.json')
          // loader: () => fetch('grihoabijan.json')
        }
      ],
    },
  ]);

  export default router;