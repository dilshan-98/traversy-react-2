import PropTypes from 'prop-types';

const Button = ({ text, color, click }) => {

    // const onClick = (e) => {
    //     console.log("Click");
    // }

    return (
        <div onClick={click}  style={{backgroundColor: color}} className="btn">
            {text}
        </div>
    )
}

Button.defaultProps = {
    text: "Add",
    color: "steelBlue",
}

Button.prototypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;