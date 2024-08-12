import Navbar from "../../components/Navbar"
import Card from "../../components/Card";
import NavbarMobile from "../../components/NavbarMobile"

import useProductStores from "../../stores/productStores.js"

const Home = (props) => {
    const products = useProductStores((state)=> state.products)
    const cart = useProductStores((state)=> state.cart)
    const addToCart = useProductStores((state)=> state.addToCart)

    const handleAddToCart = (product)=>{
        addToCart(product)
        console.log("Berhasil menambahkan", cart)
    }

    return (
        <>
        <Navbar title="Toko Onlineku"/>
        <NavbarMobile/>
        <div className="d-flex flex-wrap gap-4 mt-3 mb-3 justify-content-center justify-content-md-start">
        {products.map((product, index)=>(
            <Card
                key={index}
                {...product}
                onClick={()=>handleAddToCart(product)}
            />
        ))}
        </div>
        </>
    )
};

export default Home
