import Navbar from "../common/Navbar/navbar";
import {Link} from 'react-router-dom';
import {useState, useEffect} from "react";
import "./historyPage.css";

const HistoryPage = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");


    const getData = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const obj = await res.json();
        setData(obj.products);
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
                    return(
                        <div className='history-card'>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <Link to={`/history/${item.id}`}>More</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default HistoryPage;