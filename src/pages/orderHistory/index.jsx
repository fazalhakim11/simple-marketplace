import Navbar from "../../components/Navbar"

const index = (props) => {
  return (
    <div className="min-vh-100 d-flex flex-column ">
        <Navbar title="Order History"/>
        <div>
            <p className="text-center mt-5">
                No order history
            </p>
        </div>
    </div>
  )
};

export default index
