// const fs  = require('node:fs');
// const data = fs.readFileSync('./myReadMe.txt');
// console.log(data);
// console.log(data.toString());

// const fs  = require('fs');
// const data = fs.readFileSync('./myReadMe.txt', {encoding: 'utf8'});
// console.log(data);

// const fs = require('fs');
// fs.writeFileSync('./logs.txt', "10th April 2024: Day 7");



// const fs  = require('fs');
// console.log("Start");
// const data = fs.readFileSync('./myReadMe.txt', {encoding: 'utf8'});
// console.log(data);
// console.log("End");


//promises in file system
// const fsPromises = require('fs/promises');
// console.log("Start")
// const pr = fsPromises.readFile('./myReadMe.txt', {encoding: 'utf8'});
// console.log(pr)
// pr.then((res)=>{
//     console.log(res);
// })
// console.log("End")


//callback in file system
// const fs = require('fs');

// fs.readFile('./myReadMe.txt', {encoding: "utf8"}, (err, data)=>{
//     console.log(data);
// });

// const fs = require('fs'); // --> fs.readFile, fs.readFileSync 
// const fs = require('fs/promises'); // --> fs.readFile
// const pr = fs.readFile('./myReadMe.txt', {encoding: 'utf8'})
// pr.then((res)=>{
//     console.log(res);
// })


// const http = require('http');
// const app = http.createServer((req, res)=>{
//     console.log('Request recieved');
//     console.log(req.url);
//     res.end("<h1>hello</h1>");
// });
// app.listen(1400);

// http://localhost:1400/

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     console.log('Request recieved!');
//     console.log(req.url);
//     res.writeHead(200, {
//         'content-type': 'text/html',
//     })
//     res.end();
// });

// server.listen(1400, ()=>{
//     console.log('...............Server Started!.....................')
// })










// min-project

// const card1 = cardTemplate
//                 .replace('__TITLE__',products[0].title)
//                 .replace('__INFO__',products[0].description);
// const card2 = cardTemplate
//                 .replace('__TITLE__',products[1].title)
//                 .replace('__INFO__',products[1].description);
// const card3 = cardTemplate
//                 .replace('__TITLE__',products[2].title)
//                 .replace('__INFO__',products[2].description);
// const allCards = card1+card2+card3;

const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('./data.json', 'utf8');
const htmlTemplate = fs.readFileSync('./templates/page.html', {encoding: 'utf8'});
const cardTemplate = fs.readFileSync('./templates/card.html', 'utf8');

const products = JSON.parse(data).products;

const allCards = products.map((elem)=>{
    let newCard = cardTemplate;
    newCard = newCard.replace('__TITLE__', elem.title);
    newCard = newCard.replace('__INFO__', elem.description);
    return newCard;
});

const allCardsString = allCards.join(' ');
const page = htmlTemplate.replace('__PRODUCTS__CARDS__',allCardsString);

const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html',})
    res.end(page);
});

server.listen(1400, ()=>{
    console.log('...............Server Started!.....................')
})