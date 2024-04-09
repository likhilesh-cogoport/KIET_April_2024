// const figlet  = require('figlet');
// figlet('Hello !', (err, data)=>{
//     console.log(data);
// });


// old method
// fetch('https://apii.github.com/users/deepak3440')
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log('Error Occurred!')
//     })
//     console.log('End');



//async await
// console.log('start')
// async function getApi(){
//     console.log('api calling....');
//     const pr =  await fetch('https://api.github.com/users/deepak3440');
//     console.log('making json...');
//     const data = await pr.json();
//     console.log('::fetched data::');
// }
// getApi();
// console.log('end')


console.log('start');

async function callAPI(){
  const pr1 = await new Promise((res, rej)=>{
    console.log('promise 1...');
    setTimeout(()=>{
      res('done');
    }, 10000);
  })
  console.log('promise 1 completed');
}

callAPI();
console.log('END');






