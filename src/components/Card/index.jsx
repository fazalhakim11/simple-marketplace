
const Card = (props) => {
  return (
  <div className="card" style={{width: "16.3rem"}}>
    <img src={props.img} className="card-img-top" alt={props.alt}/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.desc}</p>
      <div className="d-flex justify-content-end">
      <a href="#" className="btn btn-success">Tambah</a>
      </div>
    </div>
  </div>
  )
};

export default Card
