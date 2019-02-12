const gridContainer = document.querySelector('#gridContainer');



function createCells(number) {
    number = 16 * 16;
    for (let i = 0; i < number; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = 'Cell';
        cell.style.backgroundColor = 'aqua';
        gridContainer.appendChild(cell);
    }
}

createCells();
