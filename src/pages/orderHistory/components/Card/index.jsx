
const index = (props) => {
  return (
    <div className="w-25">
        {console.log("Produk",props.id)}
        <img className="w-50" src={props.img} alt={props.alt} />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <p>Qunatity: {props.quantity}</p>
    </div>
  )
};

export default index
