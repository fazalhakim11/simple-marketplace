import { NavLink, useLocation } from "react-router-dom";
import useProductStores from "../../stores/productStores";

const index = () => {
  const location = useLocation();
  const cart = useProductStores((state) => state.cart);

  const cartLength = () => {
    return cart.length === 0 ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "22px", height: "22px" }}
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-bag"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
      </svg>
    ) : (
      <div className="position-relative w-max-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "22px", height: "22px" }}
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bag"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
        </svg>
        <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger navbar-nav">
          {cart.length}
        </span>
      </div>
    );
  };

  const cartLengthFill = () => {
    return cart.length === 0 ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "22px", height: "22px" }}
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-bag-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
      </svg>
    ) : (
      <div className="position-relative w-max-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "22px", height: "22px" }}
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bag-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
        </svg>
        <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger navbar-nav">
          {cart.length}
        </span>
      </div>
    );
  };

  return (
    <nav className="d-sm-none d-flex justify-content-around position-fixed bottom-0 start-0 z-1 bg-white w-100 py-3 mb-0 ">
      <NavLink
        to="/"
        className={location.pathname === "/" ? "text-success" : "text-black"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "22px", height: "22px" }}
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house-door-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
        </svg>
      </NavLink>
      <NavLink
        to="/order-history"
        className={
          location.pathname === "/order-history" ? "text-success" : "text-black"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "22px", height: "22px" }}
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-clock-history"
          viewBox="0 0 16 16"
        >
          <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
          <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
          <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
        </svg>
      </NavLink>
      <NavLink
        to="/cart"
        className={
          location.pathname === "/cart" ? "text-success" : "text-black"
        }
      >
        {location.pathname === "/cart" ? cartLengthFill() : cartLength()}
      </NavLink>
    </nav>
  );
};

export default index;
