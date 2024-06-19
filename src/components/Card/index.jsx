import PropTypes from 'prop-types';

const Card = (props) => {
  return (
  <div 
    className="card" 
    style={{width: "16.3rem"}}
  >
    <img src={props.img} className="card-img-top" alt={props.alt}/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.desc}</p>
      
      {props.cart ?
      <div className="d-flex justify-content-between">
        <p className="m-0 my-auto">Qty:</p>
        <div className="d-flex flex-column"> 
          <button className="bg-transparent text-black rounded p-1">+</button>
          <button className="bg-transparent text-black rounded p-1">-</button>
        </div>
        <button
          className="py-2 my-auto d-block bg-danger"
          onClick={props.hapusCartItem}
        >
          Hapus
        </button>
      </div> 
      :
      <div className="d-flex justify-content-end">
      <button 
        onClick={props.onClick} 
        className="btn btn-success"
      >
        Tambah
      </button>
      </div>
      }
    </div>
  </div>
  )
};

export default Card

Card.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  cart: PropTypes.bool.isRequired,
  hapusCartItem: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}
