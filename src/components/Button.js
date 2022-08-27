import PropTypes from "prop-types";

const Button = ({ title, color, onClick }) => {
    return (
        <button className="btn" onClick={onClick} style={{backgroundColor: color}}>{title}</button>
    );
}

Button.defaultProps = {
    color: "steelblue",
}

Button.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
}
export default Button;