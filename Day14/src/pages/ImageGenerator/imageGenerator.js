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
        const res = await fetch(`http://localhost:1400/api/v1/images`, {
            method: "POST",
            body: JSON.stringify({
                searchText: searchText,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if(data?.status === 'success'){
            setImgSrc(data.data.imageUrl);
        }
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