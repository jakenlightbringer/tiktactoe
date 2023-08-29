
const gameController = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const boardContainer = document.getElementById('game-container');
    let currentPlayer = "X"; // Initialize the current player

    const playerPositions = [];

    function playGame(button, board) {
        if (button.textContent === "") {
            const buttonIndex = Array.from(boardContainer.children).indexOf(button);
            board[buttonIndex] = currentPlayer;
            button.textContent = currentPlayer;
            button.disabled = true;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            
            console.log(board);
           
        }
        if(board[0] == "X" && board[1] == "X" && board[2] == "X" || board[3] == "X" && board[4] == "X" && board[5] == "X" ||
        board[6] == "X" && board[7] == "X" && board[8] == "X" || board[0] == "X" && board[3] == "X" && board[6] == "X" ||
        board[1] == "X" && board[4] == "X" && board[7] == "X" || board[2] == "X" && board[5] == "X" && board[8] == "X" ||
        board[0] == "X" && board[4] == "X" && board[8] == "X" || board[2] == "X" && board[4] == "X" && board[6] == "X"
        ){
            alert("TEST")
        }
        else if(board[0] == "O" && board[1] == "O" && board[2] == "O" || board[3] == "O" && board[4] == "O" && board[5] == "O" ||
        board[6] == "O" && board[7] == "O" && board[8] == "O" || board[0] == "O" && board[3] == "O" && board[6] == "O" ||
        board[1] == "O" && board[4] == "O" && board[7] == "O" || board[2] == "O" && board[5] == "O" && board[8] == "O" ||
        board[0] == "O" && board[4] == "O" && board[8] == "O" || board[2] == "O" && board[4] == "O" && board[6] == "O")
        {
            alert("TEST")
        }

        //add in game logic using the array positions 
        
    }

    for (let i = 0; i < board.length; i++) {
        let buttonBoard = document.createElement('button');
        buttonBoard.classList.add("game-button");
        buttonBoard.addEventListener('click', function () {
            playGame(buttonBoard, board);
        });
        
        boardContainer.appendChild(buttonBoard);
    }
})();


//Need make Array for player positions



/*
create play game function
Have player1 X and player 2 O and switch between the 2
Logic created for finding 3 in a row
If 3 in a row unable// all tiles filled
button popup rematch? reset board
Win logic and button popup for winlogic as well
CSS last 
*/

playButton = document.getElementById('play-button');
playButton.addEventListener("click", (e)=>{
    assignPlayer();
    playButton.remove();
});


function assignPlayer(){
    let playerButtonContainer = document.getElementById("playerSelection");
    let numButton = 2;

    for(let i = 0; i < numButton; i++){
        let playerButtonChoice1 = document.createElement('button');
        playerButtonChoice1.textContent = "Player " + [i+1];

        playerButtonChoice1.addEventListener('click', (e) =>{
            if(playerButtonChoice1.innerHTML == "Player 1"){
                const selection = 'X';
                return selection
            }
            else if(playerButtonChoice1.innerHTML == "Player 2"){
                const selection = "O";
                return selection
            }
        });
    
    
    playerButtonContainer.appendChild(playerButtonChoice1);
    }

}
