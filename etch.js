let sixteen = document.querySelector("#sixteen");
let grid = document.querySelector(".container");
grid.style.display = "flex";
sixteen.addEventListener("click", () => {
    console.log("button clicked");
    //Create 16 rows of 16 boxes
    for (let j = 0; j < 16; j++){  
        const col = document.createElement("div")
        for (let i = 0; i < 16; i++){
            //Create a div that is a row
            const row = document.createElement("div");
            row.className = "square";
            row.setAttribute("style", "color: black; background: red; outline: 1px solid black; height: 50px; width: 50px; padding: 1px;")
            //Add row to grid
            col.appendChild(row);
            }
        grid.appendChild(col);
        }
    let square = document.querySelectorAll(".square")
    grid.addEventListener("mouseenter", () => {
        console.log("Mouse hovered");
        row.setAttribute("style", "background: black;");
        })
    } 
)
