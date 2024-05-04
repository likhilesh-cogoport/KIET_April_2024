import Navbar from './navbar.js';
import CategoryRow from './categoryRow.js';
import Carousal from './carousal.js';
import Cards from './cards.js';

const Homepage = () => {
    return(
        <div>
            <Navbar />
            <CategoryRow />
            <Carousal />
            <Cards />
        </div>
    );
}

export default Homepage;
// module.exports = Homepage;