// const fs = require("fs");
// const http = require("http");
// const url = require('url');

// const data = fs.readFileSync("./data.json", "utf8");
// const dataObj = JSON.parse(data).products;
// const cardTemplate = `
//     <div class='product-card'>
//         <h3>$TITLE$</h3>
//         <img src="$img_src$" alt='product-image' />
//         <a href="$product_link$" >More info</a>
//     </div>
// `;

// let result = [];
// for(let i=0; i<dataObj.length; i++){
//     let temp = cardTemplate;
//     temp = temp.replace('$TITLE$',dataObj[i].title);
//     temp = temp.replace('$img_src$',dataObj[i].images[0]);
//     temp = temp.replace('$product_link$', `/product?id=${i}`);
//     result.push(temp);
// }
// result = result.join(' ');
// const server = http.createServer((req, res)=>{
//     res.writeHead(404);
//     const path = url.parse(req.url, true);
//     const pathname = path.pathname;
//     const q = path.query;
//     if(pathname === '/home'){
//         res.end(result);
//     }
//     else if(pathname === "/about"){
//         res.end('I am Likhilesh');
//     }
//     else if(pathname === '/product'){
//         const id = q.id;
//         const item = dataObj[id];
//         res.end(`
//             <div>
//                 <h4>${item.title}</h4>
//                 <img src="${item.images[0]}"/>
//             </div>
//         `);
//     }
//     else{
//         res.end('Oops... Route does not exist.')
//     }
// });
// server.listen(1400);




