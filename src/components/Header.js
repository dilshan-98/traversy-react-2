import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd}) => {

    // const onClick = () => {
    //     onAdd()
    // }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color="green" text="Add" click={onAdd}/>
        </header>
    )
}

//Checking the type of the prop and allowing String here. If not there will be an error on the console log
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//if we are not sending props, this will be default values that replaces the specific prop
Header.defaultProps = {
    title: "Tracker for Tasks",
}

export default Header;