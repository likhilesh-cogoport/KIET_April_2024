// function useDebounce(fn, time){
//     let timeoutID; 
//     return function(...args){
//         clearTimeout(timeoutID);
//         timeoutID = setTimeout(()=>{fn(...args)}, time);
//     }
// }

// async function getProducts(text){
//     const res = await fetch(`https://dummyjson.com/products/search?q=${text}`);
//     const data= await res.json();
//     console.log(data);
// }

// const debouncedGetProducts = useDebounce(getProducts, 600);


// const input = document.getElementById('search-box');

// input.addEventListener('keyup', (e)=> {
//     debouncedGetProducts(e.target.value);
// });



// // implement a function to add numbers
// const addNumbers = (...arr)=> {
//     const res = arr.reduce((acc, item)=> acc+item, 0);
//     console.log(res);
// }

// // test cases
// addNumbers();
// addNumbers(0);
// addNumbers(1);
// addNumbers(1, 2, 3, 4);
// addNumbers(1, 12, 31, 41, 1, 0,1 ,1);


const Joe = {
    id:'1',
    name: 'Joe Joe',
    courses: ['C++', 'Web D', "Computer networks"],
}
// const Roy = Joe;
const Roy = { ...Joe };
Roy.name = 'Roy';
Roy.courses[0] = 'Java';

console.log(Joe);
console.log(Roy);