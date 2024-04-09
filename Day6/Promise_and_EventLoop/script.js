// console.log('start')
// setTimeout(()=>{console.log('Timeout...')}, 0)
// console.log('end')



// setTimeout(()=>{
//     console.log('Timeout 1...')
// }, 40000)
// console.log('start')
// setTimeout(()=>{
//     console.log('Timeout 2...')
// }, 20000)
// console.log('intermediate')
// console.log('end')

// //why Promises?
// // createOrder()
// // makePayment()

// function createOrder(x, fn){
//     console.log(x);
//     // 2ms 4ms 500ms
//     setTimeout(()=>{fn('lik123')}, 1000);
//     setTimeout(()=>{fn('lik123')}, 1000);
// }

// function makePayment(orderID){
//     console.log(orderID);
// }

// createOrder('soap', makePayment);




// const pr = new Promise((resolve, reject)=>{
//     setTimeout(()=>{reject("Some items are out of stock");}, 0);
// });

// setTimeout(()=>{console.log('First timeout ...')}, 0);
// // console.log(pr);

// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })







// setTimeout(function abc() {
//     console.log('I am one');
// }, 0);
  
// const pr = new Promise((res, rej)=>{
//     setTimeout(()=>{res('done')}, 0);
// })

// pr.then(function b(res) {
//     console.log("promise completed:", res);
// });

// setTimeout(function xyz() {
//     console.log('I am two');
// }, 0);


