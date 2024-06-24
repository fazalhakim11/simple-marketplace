import useProductStores from "../../../../stores/productStores";

const index = (props) => {
    const formatNumber = useProductStores((state)=> state.formatNumber)
  return (
    <div className="d-flex justify-content-between mb-3 border-bottom ">
        <div className=" d-flex mb-3">
            <div className="ms-3">
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
            </div>
        </div>
        <p className="align-self-end ">{props.date}</p>
    </div>
  )
};

export default index
