import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = (props) => {
    const {userPoints, setUserPoints} = props;
    return(
        <div> 
            <Navbar page="home" userPoints={userPoints} setUserPoints={setUserPoints}/>
            <div className="homepage-main-container">
                Coming soon...
            </div>
        </div>
    )
}

export default HomePage;