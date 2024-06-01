import Navbar from "../common/Navbar/navbar";
import {useState, useEffect} from "react";
import "./historyPage.css";
import HistoryCard from "./historyCard";

const HistoryPage = (props) => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");


    const getData = async () => {
        try{
            const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
            const obj = await res.json();
            setData(obj.products);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getData();
    }, [searchText]);

    return (
        <div>
            <Navbar page="history"/>
            <input className="search-box-input" onChange={(e)=>{setSearchText(e.target.value);}}/>
            <div className="history-main-container">
                {data.map((item)=>{
                    return <HistoryCard item={item}/>
                })}
            </div>
        </div>
    )
};

export default HistoryPage;