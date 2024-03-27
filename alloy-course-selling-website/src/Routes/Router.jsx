import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Page1 from "../Pages/Page1/Page1";
import Page2 from "../Pages/Page2/Page2";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element: <Home></Home>
        },
        {
            path : "/page1",
            element: <Page1></Page1>
        },
        {
            path : "/page2",
            element: <Page2></Page2>
        },
        
      ]
    },
  ]);