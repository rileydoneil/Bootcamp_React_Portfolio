import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {
    const onClick = (e) => {
        e.preventDefault();
        console.log('Click');
    }

    return (
        <header>
        <h1 style={headingStyle}>{props.title}</h1>
        <Button  color='green' text='add' onClick={onClick}/>
        </header>
    );
}

Header.defaultProps = {
    title: 'Rile ONeil',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red',
}

export default Header;