import Navbar from "../common/Navbar/navbar";
import {useState, useEffect} from "react";
import "./historyPage.css";

const HistoryPage = () => {
    // let data = [
    //     {'id':'1', title:'hello'},
    //     {'id':'2', title:'world'},
    // ];
    const [data, setData] = useState([{'id':'1', title:'hello'},{'id':'2', title:'world'}]);

    const getData = async() => {
        const res = await fetch('https://dummyjson.com/products');
        const obj = await res.json();
        // data = obj.products;
        setData(obj.products);
        console.log(data);
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="history-main-container">
                {data.map((item)=>(
                        <div key={item.id}>
                            {item.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default HistoryPage;