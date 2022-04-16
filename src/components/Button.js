import PropTypes from "prop-types";

const Button = ({ title, color }) => {
    return (
        <button className="btn" style={{backgroundColor: color}}>{title}</button>
    );
}

Button.defaultProps = {
    color: "steelBlue",
}

Button.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
}
export default Button;