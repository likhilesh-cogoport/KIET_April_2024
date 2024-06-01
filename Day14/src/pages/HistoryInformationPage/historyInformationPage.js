import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HistoryInformationPage = () => {
    const [data, setData] = useState();

    const params = useParams();
    const historyId = params.historyId;

    const customStyles = {
        color: 'white',
        padding: '48px',
    }

    const getData = async() => {
        const res = await fetch(`https://dummyjson.com/products/${historyId}`);
        const obj = await res.json();
        setData(obj);
    }



    useEffect(() => {
      getData();
    }, []);
    

    return (
        <div style={customStyles}> 
            <h3>Info of: {historyId}</h3>
            <img src={data?.thumbnail}/>
            <img src={data?.images?.[0]}/>
        </div>
    )
}

export default HistoryInformationPage;