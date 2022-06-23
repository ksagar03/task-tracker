import PropTypes  from "prop-types"

const Button = ({onclick,color ,text}) => {
  return <button onClick={onclick} style={{backgroundColor:color}} className="btn">{text}</button>
}
Button.defaultProps ={
    color:'blue'
}

Button.prototype={
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onclick: PropTypes.func

}
export default Button
