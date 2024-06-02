import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Navbar from './src/pages/common/Navbar/navbar.js';
import HomePage from "./src/pages/HomePage/homepage.js";
import ImageGenerator from './src/pages/ImageGenerator/imageGenerator.js';
import HistoryPage from "./src/pages/HistoryPage/historyPage.js";
import PointsContext from "./src/context/pointsContext.js";

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import HistoryInformationPage from "./src/pages/HistoryInformationPage/historyInformationPage.js";
import Signup from "./src/pages/signup/signup.js";
import Login from "./src/pages/login/login.js";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = ()=>{
    const [userPoints, setUserPoints] = useState(20);
    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
        if(localStorage.getItem('authorization')){
            return true;
        }
        else return false;
    });
    const login = () => {
        setIsLoggedIn(true);
    }
    const logout = () => {
        localStorage.removeItem('authorization');
        setIsLoggedIn(false);
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/image-generator",
            element: isLoggedIn? <ImageGenerator/> : <Navigate to='/login' />,
        },
        {
            path: '/history',
            element: <HistoryPage/>
        },
        {
            path: '/history/:historyId',
            element: <HistoryInformationPage/>
        },
        {
            path: '/signup',
            element: <Signup/>
        },
        {
            path: '/login',
            element: <Login/>
        },
    ]);

    return (        
        <PointsContext.Provider value={{
            userPoints: userPoints, 
            setUserPoints: setUserPoints,
            isLoggedIn: isLoggedIn,
            login,
            logout,
        }}>
            <RouterProvider router={router} />
        </PointsContext.Provider>
    );
}

root.render(<App />);
