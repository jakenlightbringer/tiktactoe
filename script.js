const gameController = (() =>{
    const board = ["X", "X","O","X","","","","O","",];

    const getBoard = () => board;
    let boardContainer= document.getElementById('game-container')
    for(let i =0; i < board.length; i++){
        let buttonBoard = document.createElement('button');
        buttonBoard.textContent = board[i];
        boardContainer.appendChild(buttonBoard);
    }
})();