import Navbar from "../../components/Navbar"
import useProductStores from "../../stores/productStores";
import Card from "../../components/Card";

const Cart = (props) => {
  const cart = useProductStores((state)=> state.cart)
  return (
    <div className="min-vh-100">
      <Navbar title="Cart"/>
      <div className={cart.length === 0 ? "":"d-flex flex-wrap gap-4 mt-3"}>
        {cart.length === 0 ? 
        <p className="text-center mt-5">
          Tidak ada data
        </p>
        : 
        cart.map((item, index)=>(
          <Card 
            key={String(index)}
            {...item}
            cart
          />
        ))
        }
      </div>
    </div>
  )
};

export default Cart
