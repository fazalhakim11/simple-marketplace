import { useState } from "react";

import Navbar from "../../components/Navbar"
import useProductStores from "../../stores/productStores";
import Card from "../../components/Card";
import Modal from "../../components/Modal"


const Cart = (props) => {
  const cart = useProductStores((state)=> state.cart)
  const addToCart = useProductStores((state)=> state.addToCart)
  const decreaseQuantity = useProductStores((state)=> state.decreaseQuantity)
  const removeFromCart = useProductStores((state)=>state.removeFromCart)
  const formatNumber = useProductStores((state)=> state.formatNumber)

  const hapusCartItem =(i)=>{
    removeFromCart(i)
  } 
  const total = cart.reduce((total, item)=> total + (item.price*item.quantity),0)

  const [isOpen, setIsOpen] = useState(false)
  const openModal =()=>{
    setIsOpen(true)
  }
  const closeModal =()=>{
    setIsOpen(false)
  }

  return (
    <div className="min-vh-100 d-flex flex-column ">
      <Navbar title="Cart"/>
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
            <div className="d-flex justify-content-between">
              <div style={{width: "75%"}} className="d-flex flex-wrap gap-4 mt-3">
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
                style={{width: "23%"}}
                className="mh-100 py-3 px-3 mt-3 border-start border-dark-subtle"
              >
                <h4>Order Summary</h4>
                {cart.map((item)=>
                  <div key={item.id}>
                    <div className="d-flex justify-content-between"> 
                      <h6 className="mb-0">{item.title}</h6>
                      <h6 className="mb-0">Rp {formatNumber(item.price * item.quantity)}</h6>
                    </div>
                    <div>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                )}
                <div className="d-flex justify-content-between mb-3">
                  <h6>Total: </h6>
                  <h6>Rp {formatNumber(total)}</h6>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-success" onClick={openModal}>Checkout</button>
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
