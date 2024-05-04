// const ReactDOM = require('react-dom/client');
// const React = require('react');
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const parent = document.getElementById('root');
// const root = ReactDOM.createRoot(parent);

// const Card = (x)=>{
//     console.log('props', x);
//     return(
//         <div>
//             <h3>{x.title}</h3>
//             <p>{x.price}</p>
//         </div>
//     )
// }

// // const obj = {
// //     title: 'Laptop',
// //     price: '42,999'
// // };
// const App = () => {
//     return (
//         <div>
//             <h1>Hello from React</h1>
//             {/* {Card(obj)} */}
//             <Card title='Laptop' price='42,999' />
//         </div>
//     )
// }

// root.render(<App/>);







import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './src/pages/homepage/homepage.js';

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);


const App = () => {
    return <Homepage />
}

root.render(<App/>);









