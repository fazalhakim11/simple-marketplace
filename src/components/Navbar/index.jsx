import cartIcon from "../../assets/icon/cart.svg"

const index = (props) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">{props.title}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-lg-0 d-flex justify-content-between w-100">
                    <li class="nav-item d-block">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item d-block">
                        <a class="nav-link" href="/cart"><img src={cartIcon} alt="" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
};

export default index
