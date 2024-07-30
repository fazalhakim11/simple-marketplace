import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import OrderHistory from "../pages/orderHistory"

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
        {
          path: "/order-history",
          element: <OrderHistory/>
        }
      ],
      {
        basename: "/simple-marketplace", // Replace with your actual subfolder path
      }
    );
    return( 
      <RouterProvider router={router}/>
    )
};

export default index
