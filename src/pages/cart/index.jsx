import Navbar from "../../components/Navbar"
import useProductStores from "../../stores/productStores";
import Card from "../../components/Card";
import Modal from "../../components/Modal"
import NavbarMobile from "../../components/NavbarMobile"

import usePayment from "../../stores/payment";


const Cart = (props) => {
  const cart = useProductStores((state)=> state.cart)
  const addToCart = useProductStores((state)=> state.addToCart)
  const decreaseQuantity = useProductStores((state)=> state.decreaseQuantity)
  const removeFromCart = useProductStores((state)=>state.removeFromCart)
  const formatNumber = useProductStores((state)=> state.formatNumber)
  const isChecked = useProductStores((state)=> state.isChecked)
  const checkedAll = useProductStores((state)=> state.checkedAll)
  const isOpen = usePayment((state)=> state.isOpen)
  const setIsOpen = usePayment((state)=> state.setIsOpen)

  const hapusCartItem =(i)=>{
    removeFromCart(i)
  } 

  const total = cart.filter(item=> item.selected).reduce((total, item)=> total + (item.price * item.quantity),0)

  const openModal =()=>{
    const allSelected = cart.every(item=> !item.selected)
    if(allSelected){
      alert("Please select a product to checkout")
    } else   
    setIsOpen(true)
  }    
  const closeModal =()=>{
    setIsOpen(false)
  }

  return (
    <div className="min-vh-100 d-flex flex-column ">
      <Navbar title="Cart"/>
      <NavbarMobile/>
      {cart.length === 0 ?
        ""
      :
        <Modal isOpen={isOpen} closeModal={closeModal}/>
      }
      <div className="d-flex justify-content-between">
        <div className="w-100">
          {cart.length === 0 ? 
            <p className="text-center mt-5">
              Cart is empty
            </p>
          : 
            <div className="d-flex justify-content-between flex-column flex-md-row">
              <div className="d-flex flex-wrap gap-4 mt-3 mx-auto justify-content-center justify-content-md-start">
                {cart.map((item, index)=>(
                  <Card 
                    key={item.id}
                    {...item}
                    cart
                    increase={()=>addToCart(item)}
                    decrease={()=>decreaseQuantity(item.id)}
                    hapusCartItem={()=>hapusCartItem(index)}
                  />
                ))}
              </div>
              <div 
                className="mh-100 py-3 px-3 mt-3 border-start border-dark-subtle w-order-summary"
              >
                <h4>Order Summary</h4>
                <button className="p-0 bg-transparent text-black fw-normal" onClick={checkedAll}>Select All</button>
                {cart.map((item)=>
                  <div key={item.id}>
                    <div>
                      <div className="d-flex justify-content-between"> 
                        <div className="d-flex">
                          <input type="checkbox" checked={item.selected} onChange={()=>isChecked(item.id)}/>
                          <h6 className="mb-0 ms-2">{item.title}</h6>
                        </div>
                        <h6 className="mb-0">Rp {formatNumber(item.price * item.quantity)}</h6>
                      </div>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                )}
                <div className="d-flex justify-content-between mb-3">
                  <h6>Total: </h6>
                  <h6>Rp {formatNumber(total)}</h6>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-dark" onClick={()=>openModal()}>Checkout</button>
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
