import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './src/pages/common/Navbar/navbar.js';
import HomePage from "./src/pages/HomePage/homepage.js";
import ImageGenerator from './src/pages/ImageGenerator/imageGenerator.js';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/image-generator",
        element: <ImageGenerator />,
    }
]);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = ()=>{
    return <RouterProvider router={router} />;
}

root.render(<App />);
