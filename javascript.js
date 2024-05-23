const grid = document.querySelector('#container');
let grisSize = 16;


// create columns and rows
function makeGrid(gridSize){
    for (let i=0; i<gridSize; i++){
        const column = document.createElement('div');
        
        for (let j=0; j<gridSize; j++){
            const row = document.createElement('div');
            row.style.width = `${960/gridSize}px`
            row.style.height = `${960/gridSize}px`
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

const btnNew = document.querySelector('button');
btnNew.addEventListener('click', ()=>{
    let keepGoing = true;
    while(keepGoing){
        let answer = prompt('Input a grid size.', '16');
        answer = Math.round(Number(answer));
        if (isNaN(answer)!=true && answer <= 100){
            grid.replaceChildren("");
            gridSize = answer;
            makeGrid(gridSize);
            keepGoing = false;
        }
        else {
            alert('Please enter a number between 0 and 100')
        }
    }
})

