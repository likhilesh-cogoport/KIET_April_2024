import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './src/pages/common/Navbar/navbar.js';

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = ()=>{
    return <Navbar />;
}

root.render(<App />);
