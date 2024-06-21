import useProductStores from "../../stores/productStores";
import usePayment from "../../stores/payment"

const index = ({isOpen, closeModal}) => {
    const cart = useProductStores((state)=> state.cart)
    const formatNumber = useProductStores((state)=> state.formatNumber)
    const paymentAmount = usePayment((state)=> state.paymentAmount)
    const setPaymentAmount = usePayment((state)=> state.setPaymentAmount)

    const total = cart.reduce((total, item)=> total + (item.price * item.quantity),0)
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (paymentAmount < total){
            alert("Enter the appropriate amount of money")
        } else {
            console.log(`Bayar: ${paymentAmount}, Kembali: ${paymentAmount-total}`)
        }
    }

    const pay = paymentAmount.toLocaleString()

    if (!isOpen) return null

  return (
    <div style={{width: "30%"}} className="d-block position-fixed z-1 top-50 start-50 translate-middle bg-white border border-dark rounded overflow-auto">
        <div className="d-flex flex-column justify-content-between p-3">
            <div className="d-flex justify-content-between mb-4 ">
                <h2>Payment</h2>
                <div>
                    <button onClick={closeModal} className="bg-transparent text-black fs-4 p-0 m-0">&times;</button>
                </div>
            </div>
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
            <div className="d-flex justify-content-between mb-2">
                <h4>Total: </h4>
                <h4>Rp {formatNumber(total)}</h4>
            </div>
            <form onSubmit={handleSubmit} className="align-self-center">
                <input 
                    type="number" 
                    placeholder="Input money"
                    value={pay}
                    onChange={(e)=> setPaymentAmount(e.target.value)}
                />
                <button className="ms-3 py-1" type="submit">Pay</button>
            </form>
        </div>
    </div>
  )
};

export default index
