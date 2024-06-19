import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/cart",
            element: <Cart/> ,
        },
      ]);
    return <RouterProvider router={router}/>
};

export default Router
