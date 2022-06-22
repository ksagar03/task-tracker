
// rafce-> is a snipets which is used to create a function
import PropTypes from "prop-types";

const Header = ({title}) => {
  return (
    <header>
      <h1 className="header">{title}</h1>
      <button className="btn">add</button>
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