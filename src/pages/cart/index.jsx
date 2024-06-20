import Navbar from "../../components/Navbar"
import useProductStores from "../../stores/productStores";
import Card from "../../components/Card";

const Cart = (props) => {
  const cart = useProductStores((state)=> state.cart)
  const addToCart = useProductStores((state)=> state.addToCart)
  const decreaseQuantity = useProductStores((state)=> state.decreaseQuantity)
  const removeFromCart = useProductStores((state)=>state.removeFromCart)

  const hapusCartItem =(i)=>{
    removeFromCart(i)
  }

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <div>
        <Navbar title="Cart"/>
        <div className={cart.length === 0 ? "":"d-flex flex-wrap gap-4 mt-3"}>
          {cart.length === 0 ? 
          <p className="text-center mt-5">
            Tidak ada data
          </p>
          : 
          cart.map((item, index)=>(
            <Card 
              key={index}
              {...item}
              cart
              increase={()=>addToCart(item)}
              decrease={()=>decreaseQuantity(item.id)}
              hapusCartItem={()=>hapusCartItem(index)}
            />
          ))
          }
        </div>
      </div>
      <div className="d-flex w-100 justify-content-end py-3 px-3 mt-3 border-top border-dark-subtle">
        <button className="btn btn-success">Checkout</button>
      </div>
    </div>
  )
};

export default Cart
