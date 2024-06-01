import "./navbar.css";
import {Link} from 'react-router-dom';


const Navbar = (props) => {
    const page = props.page;

    const customColor = (x) => {
        return {color: page=== x ?'red':'white'}
    }

    return(
        <div className='header-parent-container'>
            <div className='left'>
                <Link to="/" style={customColor('home')}>Home</Link>
                <Link to="/image-generator" style={customColor('imageGenerator')} >Image Generator</Link>
                <Link to="/history"  style={customColor('history')}>History</Link>
                <Link to="/contact" >Contact Us</Link>
                <Link to="/help" >Help</Link>
            </div>
            <div className="right">
            </div>
        </div>
    )
}

export default Navbar;