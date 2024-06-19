import Navbar from "../../components/Navbar"
import Card from "../../components/Card";

import useProductStores from "../../stores/productStores.js"

const Home = (props) => {
    const products = useProductStores((state)=> state.products)
    return (
        <>
        <Navbar title="Toko Onlineku"/>
        <div className="d-flex flex-wrap gap-4 mt-3">
        {products.map((product, index)=>(
            <Card
                key={String(index)}
                {...product}
            />
        ))}
        </div>
        </>
    )
};

export default Home
