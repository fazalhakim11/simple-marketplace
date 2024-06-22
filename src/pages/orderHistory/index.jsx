import Navbar from "../../components/Navbar"
import Card from "./components/Card"
import usePayment from "../../stores/payment";

const index = (props) => {
  const orderHistory = usePayment((state)=> state.orderHistory)
  return (
    <div className="min-vh-100 d-flex flex-column ">
        <Navbar title="Order History"/>
        <div>
          {orderHistory.length === 0 ?
            <p className="text-center mt-5">
                No order history
            </p>
          :
            orderHistory.map((product, index)=> 
              <Card 
                key={index}
                {...product}
              />
            )
        	}
        </div>
    </div>
  )
};

export default index
