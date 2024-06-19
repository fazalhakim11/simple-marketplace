import cartIcon from "../../assets/icon/cart.svg"
import useProductStores from "../../stores/productStores";
import { useNavigate } from "react-router-dom";

const index = (props) => {
    const cart = useProductStores((state)=> state.cart)
    const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid px-0">
            <h1 style={{ cursor: 'pointer' }} className="navbar-brand m-0 p-0">{props.title}</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                <ul className="navbar-nav mb-lg-0 d-flex justify-content-between w-100">
                    <li className="nav-item d-block">
                        <button className="nav-link active " aria-current="page" onClick={()=>navigate("/")}>Home</button>
                    </li>
                    <li className="nav-item d-block">
                        {cart.length === 0 ? 
                            <button 
                            className="nav-link"  
                            onClick={()=>navigate("/cart")}
                            >
                                <img style={{height: "25px"}} src={cartIcon} alt="" />
                            </button>
                        :
                            <button 
                                className="nav-link position-relative"  
                                onClick={()=>navigate("/cart")}
                            >
                                <img style={{height: "25px"}} src={cartIcon} alt="" />
                                <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">{cart.length}</span>
                            </button>
                        }
                        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
};

export default index
