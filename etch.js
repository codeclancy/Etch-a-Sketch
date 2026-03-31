let sixteen = document.querySelector("#sixteen");
let grid = document.querySelector(".container");
let divs = document.querySelectorAll("div");

function initialGrid(){
    let size = 16;
    let cellSize = 100 / size;
    for (let j = 0; j < size * size; j++){  
        const row = document.createElement("div");
        row.className = "square";
        row.setAttribute("style","background: white; outline: 1px solid black;");
        row.style.width = `${cellSize}%`;
        row.style.aspectRatio = "1 / 1";
            //Add row to grid
        grid.appendChild(row);
    }
    let square = document.querySelectorAll(".square");
    square.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "red";
        })
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "black";
        })
    })  
}
initialGrid();
sixteen.addEventListener("click", () => {
    console.log("button clicked");
    grid.innerHTML = '';
    size = window.prompt("Choose number of sides for grid");
    let cellSize = 100 / size;
    for (let j = 0; j < size * size; j++){  
        const row = document.createElement("div");
        row.className = "square";
        row.setAttribute("style","background: white; outline: 1px solid black;");
        row.style.width = `${cellSize}%`;
        row.style.aspectRatio = "1 / 1";
            //Add row to grid
        grid.appendChild(row);
    }
    let square = document.querySelectorAll(".square")
    square.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "red";
        })
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "black";
        })
    })
})


