
document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll('.square');

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){
    
    let square = event.target;
    let postion = square.id;
    
    if (handleMove(postion)) {
        updateSquares();

        setTimeout(() =>{
            alert(" O jogo acabou");
            
        }, 10);
        
    };

    updateSquares();
    
}

function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>{
        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div Class='${symbol}'></div>`
        }
    })
}

function rest () {
    
}



