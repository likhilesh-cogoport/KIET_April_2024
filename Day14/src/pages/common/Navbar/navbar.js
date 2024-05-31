import "./navbar.css";

const Navbar = () => {
    return(
        <div className='header-parent-container'>
            <div className='left'>
                <a href="./home">Home</a>
                <a href="./image-generator">Image Generator</a>
                <a href="./history">History</a>
                <a href="./contact">Contact Us</a>
                <a href="./help">Help</a>
            </div>
            <div className="right">
            </div>
        </div>
    )
}

export default Navbar;