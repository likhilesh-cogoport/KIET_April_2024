// function fetchAPI(){
//     const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=SUWENMJDCG3P8Y7E9M4Y22GS4';
//     fetch(url)
//     .then((res)=>res.json())
//     .then(renderUI);
// }
// fetchAPI()
const root = document.getElementById("root");

function renderUI(data){
    // const days = data.days;
    // console.log(days);
    const row = document.createElement("tr");
    //make heading row
    const cell1 = document.createElement("th");
    cell1.innerText = 'Date';
    row.appendChild(cell1);

    const cell2 = document.createElement("th");
    cell2.innerText = 'Maximum Temperature';
    row.appendChild(cell2);

    // const cell3 = document.createElement("th");
    // cell3.innerText = 'Minimum Temperature';
    // row.appendChild(cell3);
    root.append(row);

    const childRow = document.createElement("tr");
    const c1 = document.createElement("td");
    c1.innerText = '07-04-24';
    childRow.appendChild(c1);
    const c2 = document.createElement("td");
    c2.innerText = '90 F';
    childRow.appendChild(c2);
    root.appendChild(childRow);

    //make child rows
    
}   

renderUI();