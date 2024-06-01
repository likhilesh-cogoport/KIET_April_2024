import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = (props) => {
    return(
        <div> 
            <Navbar page="home"/>
            <div className="homepage-main-container">
                Coming soon...
            </div>
        </div>
    )
}

export default HomePage;