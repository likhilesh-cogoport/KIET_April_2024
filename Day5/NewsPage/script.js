console.log("...APP Started...");

function callAPI(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=14fd34af35fe4493b10114972dcc064b")
    .then((res) => res.json())
    .then((data) => renderUI(data))   
}
const root = document.getElementById("root");
function renderUI(data){
    const articles = data.articles;
    for(let i=0; i<articles.length; i++){
        const ar = articles[i];
        const div = document.createElement("div");
        div.setAttribute("class", "news-card");

        const h3 = document.createElement("h3");
        h3.innerText = ar.title;
        div.appendChild(h3);

        const img = document.createElement("img");
        img.src = ar.urlToImage;
        div.appendChild(img);

        const a = document.createElement("a");
        a.innerText = 'Read more...';
        a.target = '_blank';
        a.href = ar.url;
        div.appendChild(a);

        root.appendChild(div);
    }
}

callAPI();