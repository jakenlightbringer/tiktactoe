
const gameController = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const boardContainer = document.getElementById('game-container');
    let currentPlayer = "X"; // Initialize the current player

    const playerPositions = [];

    function playGame(button, board) {
        const rematchContainer = document.getElementById('rematch-container');
        
        if (button.textContent === "") {
            const buttonIndex = Array.from(boardContainer.children).indexOf(button);
            board[buttonIndex] = currentPlayer;
            button.textContent = currentPlayer;
            button.disabled = true;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            if(currentPlayer === "X"){
                button.style.backgroundColor = 'red';
            }
            else{
                button.style.backgroundColor = "green";
            }
            console.log(board.length);
            console.log(board);
           
        }
        if(board[0] == "X" && board[1] == "X" && board[2] == "X" || board[3] == "X" && board[4] == "X" && board[5] == "X" ||
        board[6] == "X" && board[7] == "X" && board[8] == "X" || board[0] == "X" && board[3] == "X" && board[6] == "X" ||
        board[1] == "X" && board[4] == "X" && board[7] == "X" || board[2] == "X" && board[5] == "X" && board[8] == "X" ||
        board[0] == "X" && board[4] == "X" && board[8] == "X" || board[2] == "X" && board[4] == "X" && board[6] == "X"
        ){
            alert("Player 1 Wins!")
            const buttons = document.querySelectorAll(".game-button");
            for(let i = 0; i < buttons.length; i++){
                buttons[i].disabled = 'true'
            }
            let rematchButton = document.createElement('button');
            rematchButton.innerHTML = "Rematch";
            rematchContainer.appendChild(rematchButton);
            rematchButton.addEventListener("click", function (){
                resetBoard(button, board);
                rematchButton.style.display = "none";
            });
            
            
            
            

        }
        else if(board[0] == "O" && board[1] == "O" && board[2] == "O" || board[3] == "O" && board[4] == "O" && board[5] == "O" ||
        board[6] == "O" && board[7] == "O" && board[8] == "O" || board[0] == "O" && board[3] == "O" && board[6] == "O" ||
        board[1] == "O" && board[4] == "O" && board[7] == "O" || board[2] == "O" && board[5] == "O" && board[8] == "O" ||
        board[0] == "O" && board[4] == "O" && board[8] == "O" || board[2] == "O" && board[4] == "O" && board[6] == "O")
        {
            alert("TEST")
        }
        else if(board[0] != "" && board[1] != "" && board[2] != "" && board[3] != "" && board[4] != "" && board[5] != "" &&
        board[6] != "" && board[7] != "" && board[8] != ""){
            alert("CAT")
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

function resetBoard(button, board) {
    for (let i = 0; i < board.length; i++) {
        board[i] = "";
    }
    

    const buttons = document.querySelectorAll(".game-button");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "white";
        buttons[i].textContent = "";
        buttons[i].disabled = false;
    }
}




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
