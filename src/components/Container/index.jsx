import PropTypes from "prop-types"

const Container = (props) => {
  return (
    <div className="container min-vh-100">
        {props.children}
    </div>
  )
};

export default Container

Container.propType = {
  children: PropTypes.node,
}
