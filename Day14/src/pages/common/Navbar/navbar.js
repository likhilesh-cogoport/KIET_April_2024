import "./navbar.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
    console.log('Navbar re-rendered!');
    return(
        <div className='header-parent-container'>
            <div className='left'>
                <Link to="/">Home</Link>
                <Link to="/image-generator">Image Generator</Link>
                <Link to="/history">History</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/help">Help</Link>
            </div>
            <div className="right">
            </div>
        </div>
    )
}

export default Navbar;