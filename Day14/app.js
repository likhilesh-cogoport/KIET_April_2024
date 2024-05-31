import React from "react";
import ReactDOM from "react-dom/client";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const Heading = <h1>Hello React</h1>

const Title = ()=>{
    return <h1>Hello React 3!</h1>;
}

// root.render(Heading);
// root.render(Title());
root.render(<Title />);
// <Title/> = Title()