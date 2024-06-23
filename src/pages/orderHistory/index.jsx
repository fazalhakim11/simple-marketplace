import Navbar from "../../components/Navbar"
import Card from "./components/Card"
import usePayment from "../../stores/payment";

const index = (props) => {
  const orderHistory = usePayment((state)=> state.orderHistory)
  return (
    <div className="min-vh-100 d-flex flex-column ">
        <Navbar title="Order History"/>
        <div className="mt-3">
          {orderHistory.length === 0 ?
            <p className="text-center mt-5">
                No order history
            </p>
          :
            <div>
              {orderHistory.map((product, index)=> 
                <Card 
                  key={index}
                  // title={Object.values(product)[0].title}
                  // quantity={Object.values(product)[0].quantity}
                  // price={Object.values(product)[0].price}
                  product={product}
                  date={product.date.toString()}
                  totalPrice={product.totalPrice}
                  payment={product.paymentAmount}
                  change={product.change}
                />
              )}
            </div>
        	}
        </div>
    </div>
  )
};

export default index
