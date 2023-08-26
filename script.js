const gameController = (() =>{
    const board = ["", "","","","","","","","",];

    const getBoard = () => board;
    let boardContainer= document.getElementById('game-container')
    for(let i =0; i < board.length; i++){
        let buttonBoard = document.createElement('button');
        buttonBoard.classList.add("game-button");
        buttonBoard.addEventListener('click', (e)=>{
            buttonBoard.textContent = "x";
            buttonBoard.disabled = "true";
        });
        buttonBoard.textContent = board[i];
        boardContainer.appendChild(buttonBoard);
        
    }
    
})();
const Player = (identity, selection) =>{
    const getIdentity = () => identity;
    const getSelection = () => selection;
}

let playerSelection 


