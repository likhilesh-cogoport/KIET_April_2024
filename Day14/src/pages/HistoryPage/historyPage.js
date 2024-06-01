import Navbar from "../common/Navbar/navbar";
import {useState, useEffect} from "react";
import "./historyPage.css";

const HistoryPage = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");


    const getData = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const obj = await res.json();
        setData(obj.products);
        console.log('getData:: ', data);
    }

    useEffect(()=>{
        getData();
    }, [searchText]);

    console.log('normal rendering flow', data);

    return (
        <div>
            <Navbar />
            <input onChange={(e)=>{setSearchText(e.target.value);}}/>
            <div className="history-main-container">
                {data.map((item)=>{
                    return(
                        <div className='history-card'>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default HistoryPage;