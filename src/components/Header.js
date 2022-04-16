import PropTypes from "prop-types";

const Header = ({title}) => {

    //const {title} = props;
       
    return (
        <header className="header">
            {/* <h1 style={{color: "red", backgroundColor: "black"}}>{title}</h1> */}
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            <button className="btn">Add</button>
        </header>
    )
};

// CSS in JS
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black",
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: "Task Tracker",
}

export default Header;