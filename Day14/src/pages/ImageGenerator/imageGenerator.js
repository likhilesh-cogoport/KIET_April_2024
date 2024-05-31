import Navbar from "../common/Navbar/navbar";
import "./imageGenerator.css"
import {useState} from "react";

const ImageGenerator = () => {
    const [name, changeName] = useState("Aakash");

    const func = (e) => {
        changeName(e.target.value);
    }

    return (
        <div>
            <Navbar />
            <div className="image-generator-main-container">
                <div className='image-search'>
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20230817/pngtree-lotus-flower-jpg-pink-lotus-flower-image_13023952.jpg" />
                    <input onChange={(e)=>{func(e)}}/>
                </div>
                {name}
            </div>
        </div>
    )
};

export default ImageGenerator;