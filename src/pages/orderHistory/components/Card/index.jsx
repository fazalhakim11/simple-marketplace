import { useState } from "react";
import useProductStores from "../../../../stores/productStores";

const index = (props) => {
    const formatNumber = useProductStores((state)=> state.formatNumber)

    const [seeDetail, SetSeeDetail] = useState(false)
    const handleSeeDetail =()=>{
      SetSeeDetail(!seeDetail)
    }
  return (
    <div className="d-flex justify-content-between mb-3 border-bottom ">
        <div className=" d-flex mb-3">
            <div className="ms-3">
              {seeDetail ? 
              <div>
                {Object.keys(props.product).filter(key => typeof props.product[key] === 'object').map(key=>(
                  <div className="d-flex mb-3" key={key}>
                    <div>
                      <img style={{width: "100px"}} className="rounded" src={props.product[key].img} alt={props.product[key].alt} />
                    </div>
                    <div className="ms-3"> 
                      <h5>{props.product[key].title}</h5>
                      <p className="m-0">Quantity: {props.product[key].quantity}</p>
                      <p className="">Price: {props.product[key].quantity} x Rp {formatNumber(props.product[key].price)} = Rp {formatNumber(props.product[key].quantity * props.product[key].price)}</p>
                    </div>
                  </div>
                ))}
                <h5>Total Price: Rp {formatNumber(props.totalPrice)}</h5>
                <p className="m-0">Payment: Rp {formatNumber(props.payment)}</p>
                <p>Change: Rp {formatNumber(props.change)}</p>
                <button className="p-0 bg-transparent text-primary fw-normal" onClick={handleSeeDetail}>Hide Detail</button>
              </div>
              :
              <div className="d-flex mb-3">
                <div>
                  <img style={{width: "100px"}} className="rounded" src={props.product[0].img} alt={props.product[0].alt} />
                </div>
                <div className="ms-3"> 
                  <h5>{props.product[0].title}</h5>
                  <p className="m-0">Quantity: {props.product[0].quantity}</p>
                  <p className="m-0">Price: {props.product[0].quantity} x Rp {formatNumber(props.product[0].price)} = Rp {formatNumber(props.product[0].quantity * props.product[0].price)}</p>
                  <button className="p-0 bg-transparent text-primary fw-normal" onClick={handleSeeDetail}>See Detail</button>
                </div>
              </div>
              }
            </div>
        </div>
        <p className="align-self-end ">{props.date}</p>
    </div>
  )
};

export default index
