import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";

const index = () => {
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
    return( 
      <RouterProvider router={router}/>
    )
};

export default index
