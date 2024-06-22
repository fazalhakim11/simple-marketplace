import useProductStores from "../../../../stores/productStores";

const index = (props) => {
    const formatNumber = useProductStores((state)=> state.formatNumber)
  return (
    <div className="d-flex justify-content-between mb-3 border-bottom ">
        <div className=" d-flex mb-3">
            <img style={{width: "150px"}} className="rounded" src={props.img} alt={props.alt} />
            <div className="ms-3">
                <h5>{props.title}</h5>
                <p>{props.desc}</p>
                <p>Qunatity: {props.quantity}</p>
                <p>Price: {props.quantity} x Rp {formatNumber(props.price)} = Rp {formatNumber(props.quantity * props.price)}</p>
            </div>
        </div>
        <p className="align-self-end ">Date {props.date}</p>
    </div>
  )
};

export default index
