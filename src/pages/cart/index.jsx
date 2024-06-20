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
    <div className="min-vh-100 d-flex flex-column ">
      <Navbar title="Cart"/>
      <div className="d-flex justify-content-between">
        <div className="w-100">
          {cart.length === 0 ? 
            <p className="text-center mt-5">
              Tidak ada data
            </p>
          : 
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-wrap gap-4 mt-3">
                {cart.map((item, index)=>(
                  <Card 
                    key={index}
                    {...item}
                    cart
                    increase={()=>addToCart(item)}
                    decrease={()=>decreaseQuantity(item.id)}
                    hapusCartItem={()=>hapusCartItem(index)}
                  />
                ))}
              </div>
              <div 
                style={{width: "20%"}}
                className="mh-100 py-3 px-3 mt-3 border-start border-dark-subtle"
              >
                <h4>Order Summary</h4>
                {cart.map((item)=>
                  <div key={item.id}>
                    <div className="d-flex justify-content-between"> 
                      <h6 className="mb-0">{item.title}</h6>
                      <h6 className="mb-0">Rp {item.price * item.quantity}</h6>
                    </div>
                    <div>
                      <p >Jumlah: {item.quantity}</p>
                    </div>
                  </div>
                )}
                <h6>Total: </h6>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-success">Checkout</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
};

export default Cart
