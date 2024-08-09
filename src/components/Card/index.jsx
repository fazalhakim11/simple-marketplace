import PropTypes from 'prop-types';
import useProductStores from '../../stores/productStores';

const Card = (props) => {
  const formatNumber = useProductStores((state)=> state.formatNumber)
  return (
  <div 
    className="card" 
    style={{width: "16.3rem"}}
  >
    <img src={props.img} className="card-img-top" alt={props.alt}/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.desc}</p>
      <p className='fw-medium mb-1'>Rp {formatNumber(props.price)}</p>
      
      {props.cart ?
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-between w-25 align-items-center"> 
          <button  
            onClick={props.increase}
            className="bg-transparent text-black  p-0 "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-plus-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
          </button>
          <p className="m-0 p-0">{props.quantity}</p>
          <button 
            onClick={props.decrease}
            className="bg-transparent text-black fs-5 p-0 "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-dash-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
            </svg>
          </button>
        </div>
        <button
          className="bg-transparent p-0"
          onClick={props.hapusCartItem}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
          </svg>
        </button>
      </div> 
      :
      <div className="d-flex justify-content-end">
      <button 
        onClick={props.onClick} 
        className="bg-primary py-1 px-2 pt-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
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
  price: PropTypes.number,
  cart: PropTypes.bool,
  quantity: PropTypes.number,
  increase: PropTypes.func,
  decrease: PropTypes.func,
  hapusCartItem: PropTypes.func,
  onClick: PropTypes.func
}
