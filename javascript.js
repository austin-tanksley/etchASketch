const grid = document.querySelector('#container');


// create columns and rows
function makeGrid(gridSize){
    for (let i=0; i<gridSize; i++){
        const column = document.createElement('div');
        
        for (let j=0; j<gridSize; j++){
            const row = document.createElement('div');
            row.style.backgroundColor = "pink";
            row.addEventListener('mouseover', ()=>{
                row.style.backgroundColor = "#f4f4f4";
            });
            grid.appendChild(row);
        }
        column.style.flexBasis = '100%';
        column.style.width = "0px"
        column.style.height="0px"
        grid.appendChild(column);
    }
}

makeGrid(16);