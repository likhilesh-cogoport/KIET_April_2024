// const parent = document.getElementById('root');

// const heading = document.createElement('h1');
// heading.innerText = 'Hello from JS DOM';
// parent.appendChild(heading);

// const list = document.createElement('ul');
// const listItem1 = document.createElement('li');
// listItem1.innerText = 'Item 1';
// const listItem2 = document.createElement('li');
// listItem2.innerText = 'Item 2';

// list.appendChild(listItem1);
// list.appendChild(listItem2);
// parent.appendChild(list);

// console.log(React);

// root.render(heading);




// const parent = document.getElementById('root');
// const root = ReactDOM.createRoot(parent);

// const heading = React.createElement('h1', {}, "Hello from React!");

// const li1 = React.createElement('li', {
//     key:'li1', 
//     className:'li-c-1',
//     id:'id1',
//     style:{
//         backgroundColor:"red",
//     }

// }, "Item 1");
// const li2 = React.createElement('li', {key:'li2'}, "Item 2");
// const list = React.createElement('ul', {}, [li1, li2]);

// root.render(list);








const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

// const heading = React.createElement('h1', {}, "Hello from React!");
// const str = 'Hello from React!'
// const heading = <h1>{str}</h1>

const str = {hello: 'world', name:'likhilesh'};
const s1 = {
    backgroundColor: 'red',
    border: '1px solid black',
}
const li1 = <li className="li-c-1" name={str} style={s1}>Item 1</li>
const li2 = <li>Item 2</li>
const arr = [li1, li2];
const list = <ul>{arr.map((elem)=>{return elem;})}</ul>

root.render(list);