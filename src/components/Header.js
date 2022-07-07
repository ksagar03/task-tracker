
// rafce-> is a snipets which is used to create a function
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = ({title ,onclickAdd,addbtnvalue}) => {
  const location=useLocation()
  return (
    <header className="header">
      <h1 >{title}</h1>
      
     {location.pathname === '/' && <Button onclick={onclickAdd} color={addbtnvalue ? "red" : "royalblue"} text={addbtnvalue ?'Close':'Add'} />}
    </header>
  )
}
Header.defaultProps = {
  title: "task-track",
  // a: "1"
};
Header.propTypes = {
  title: PropTypes.string.isRequired // this line will allow title
  // properties to pass string datatypes
};
export default Header;
// we can define the props(properties) inside the tag
// if we won't define any properties but in function if we call props
//  then that props will take default properties
// as shown above in line 8