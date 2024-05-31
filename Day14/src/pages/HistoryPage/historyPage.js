import Navbar from "../common/Navbar/navbar";
import "./historyPage.css";

const dummyData = [
    {
        id:'1',
        title:'Flower',
        date: {
            day: 'Sun',
            time: '21:00',
        },
    },
    {
        id:'2',
        title:'Electronics',
    },
];

const HistoryPage = () => {
    return (
        <div>
            <Navbar />
            <div className="history-main-container">
                <div>
                    {dummyData.map((elem)=>{
                            return(
                                <div key={elem.id}>
                                    <h3>{elem.title} hello</h3>
                                    <p>{elem.date?.day}</p>
                                    <p>{elem.date?.time}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default HistoryPage;