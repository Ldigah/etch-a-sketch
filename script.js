const gridContainer = document.querySelector('#gridContainer');
const button = document.querySelector('#clearButton');

button.addEventListener('click', (e) => {
    reset();
})

function createGrid(size) {
    for (let row=0; row<size; row++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add("gridRow");
        gridRow.style.height = (100 / size) + "%";
        for (let column=0; column<size; column++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.width = (100 / size) + '%';
            gridRow.appendChild(grid);
        }
        gridContainer.appendChild(gridRow);
    }
    changeColor();
}

function getRandomColor() {
    var color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
}

function changeColor() {
    let cell = document.querySelectorAll(".grid");
    cell.forEach(cel => {
       cel.addEventListener("mouseover", (e) => {
          e.target.style.backgroundColor = getRandomColor();
       })
    });
 }

 function reset() {
    let children = document.querySelectorAll(".gridRow");
    children.forEach(child => {
       gridContainer.removeChild(child);
    })
    let getGridSize = prompt("Chose a grid size", "16");
    createGrid(getGridSize);
 }

 createGrid(16);
