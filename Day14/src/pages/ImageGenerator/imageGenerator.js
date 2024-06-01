import Navbar from "../common/Navbar/navbar";
import "./imageGenerator.css"
import {useState} from "react";

const ImageGenerator = () => {
    const [searchText, setSearchText] = useState();
    const [imageSrc, setImgSrc] = useState("");

    const func = (e) => {
        setSearchText(e.target.value);
    }

    const handleClick = async () => {
        setImgSrc(`https://source.unsplash.com/random/400x400/?${searchText}`);
    }

    return (
        <div>
            <Navbar page="imageGenerator"/>
            <div className="image-generator-main-container">
                <div className='image-search'>
                    <img src={imageSrc} />
                    <input onChange={(e)=>{func(e)}}/>
                    <button onClick={handleClick}>Generate</button>
                </div>
            </div>
        </div>
    )
};

export default ImageGenerator;