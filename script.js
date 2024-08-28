let gameBoard = {
    row1: ["E", "E", "E"],
    row2: ["E", "E", "E"],
    row3: ["E", "E", "E"],
}

const startBtn = document.querySelector("#start");
const btnContainer = document.querySelector(".buttons");

startBtn.addEventListener("click", function () {
    const players = [
        {
            name: "playerX",
            symbol: "X",
        },
        {
            name: "playerO",
            symbol: "O",
        }
    ]

    btnContainer.removeChild(startBtn);
    resetBtn.style.display = "block"

    const activePlayerDisplay = document.querySelector("#activePlayer");
    let activePlayer = players[0];
    activePlayerDisplay.textContent = "Now playing: player X";
    activePlayerDisplay.classList.remove(...activePlayerDisplay.classList);
    activePlayerDisplay.classList.add("blue");

    const switchPlayerTurn = () => {
        if(activePlayer==players[0]) {
            activePlayer = players[1];
            activePlayerDisplay.textContent = "Now playing: player O";
            activePlayerDisplay.classList.remove(...activePlayerDisplay.classList);
            activePlayerDisplay.classList.add("red");
        } else if(activePlayer==players[1]) {
            activePlayer = players[0];
            activePlayerDisplay.textContent = "Now playing: player X";
            activePlayerDisplay.classList.remove(...activePlayerDisplay.classList);
            activePlayerDisplay.classList.add("blue");
        }
    }

    let destinationTile; 

    function chooseTile(row, column) {
        let selectedRow = row;
        let selectedColumn = column-1;
        destinationTile = gameBoard[`row${selectedRow}`].at(selectedColumn);
        if (destinationTile!="E") {
        console.log(`This tile is already occupied by ${destinationTile}`);
        switchPlayerTurn()
        return;
        }
        counter++;
        let modifiedArray = gameBoard[`row${selectedRow}`].with(selectedColumn, activePlayer.symbol);
        gameBoard[`row${selectedRow}`] = modifiedArray;
        return gameBoard;
    }

    const uiBoard = document.querySelector(".board");
    let counter = 0;

    const tiles = Array.from(document.querySelectorAll(".tile"));
    tiles.forEach((tile) => { tile.addEventListener ("click", function play() {
        chosenRow = tile.dataset.row;
        chosenColumn = tile.dataset.column;
        if(tile.dataset.full=="true") {
            return
        }
        if(activePlayer==players[0]) {
            tile.classList.add("cross")
            tile.dataset.full = "true"
        } else if(activePlayer==players[1]) {
            tile.classList.add("circle")
            tile.dataset.full = "true"
        }
        tile.classList.add()
        console.log(`Row: ${chosenRow}, Column: ${chosenColumn}`);
        chooseTile(chosenRow, chosenColumn);
        console.log(gameBoard.row1);
        console.log(gameBoard.row2);
        console.log(gameBoard.row3);
        console.log("//////////////////");
        let winner = 0;
        function winCheck() {
                if(
                    gameBoard.row1.at(0)=="X" && gameBoard.row1.at(1)=="X" && gameBoard.row1.at(2)=="X" ||
                    gameBoard.row2.at(0)=="X" && gameBoard.row2.at(1)=="X" && gameBoard.row2.at(2)=="X" ||
                    gameBoard.row3.at(0)=="X" && gameBoard.row3.at(1)=="X" && gameBoard.row3.at(2)=="X" ||
                    gameBoard.row1.at(0)=="X" && gameBoard.row2.at(0)=="X" && gameBoard.row3.at(0)=="X" ||
                    gameBoard.row1.at(1)=="X" && gameBoard.row2.at(1)=="X" && gameBoard.row3.at(1)=="X" ||
                    gameBoard.row1.at(2)=="X" && gameBoard.row2.at(2)=="X" && gameBoard.row3.at(2)=="X" ||
                    gameBoard.row1.at(0)=="X" && gameBoard.row2.at(1)=="X" && gameBoard.row3.at(2)=="X" ||
                    gameBoard.row3.at(0)=="X" && gameBoard.row2.at(1)=="X" && gameBoard.row1.at(2)=="X"
                ) {
                    winner = players[0].name;
                }
                if(
                    gameBoard.row1.at(0)=="O" && gameBoard.row1.at(1)=="O" && gameBoard.row1.at(2)=="O" ||
                    gameBoard.row2.at(0)=="O" && gameBoard.row2.at(1)=="O" && gameBoard.row2.at(2)=="O" ||
                    gameBoard.row3.at(0)=="O" && gameBoard.row3.at(1)=="O" && gameBoard.row3.at(2)=="O" ||
                    gameBoard.row1.at(0)=="O" && gameBoard.row2.at(0)=="O" && gameBoard.row3.at(0)=="O" ||
                    gameBoard.row1.at(1)=="O" && gameBoard.row2.at(1)=="O" && gameBoard.row3.at(1)=="O" ||
                    gameBoard.row1.at(2)=="O" && gameBoard.row2.at(2)=="O" && gameBoard.row3.at(2)=="O" ||
                    gameBoard.row1.at(0)=="O" && gameBoard.row2.at(1)=="O" && gameBoard.row3.at(2)=="O" ||
                    gameBoard.row3.at(0)=="O" && gameBoard.row2.at(1)=="O" && gameBoard.row1.at(2)=="O"
                ) {
                    winner = players[1].name;
                }
            if(winner != 0) {
                const winnerDisplay = document.querySelector("#winner");
                winnerDisplay.textContent = `${winner} wins!`;
                winnerDisplay.style.color = "black";
                activePlayerDisplay.classList.remove(...activePlayerDisplay.classList);
                activePlayerDisplay.classList.add("placeholder");
                console.log(`${winner} wins!`);
                winner = 0;
                counter = 0;
                tiles.forEach((tile) => {
                    tile.dataset.full = "true";
                })
                return true;
            }
        }
        console.log(counter)
        if(counter==9) {
            if(winCheck()==true) {
                return;
            }
            const winDisp = document.querySelector("#winner");
            winDisp.textContent = "Draw";
            winDisp.style.color = "black";
            setTimeout(() => {
                resetBoard();
                return;  
            }, 3000);
             
        }
        winCheck();
        switchPlayerTurn();
    })}
)})

const resetBtn = document.querySelector("#reset")
resetBtn.addEventListener("click", resetBoard);

function resetBoard() {
    gameBoard = {
        row1: ["E", "E", "E"],
        row2: ["E", "E", "E"],
        row3: ["E", "E", "E"],
    }
    console.clear();
    const winDisplay = document.querySelector("#winner");
    winDisplay.style.color = "#d6d7da";
    const tiles = Array.from(document.querySelectorAll(".tile"));
    tiles.forEach((tile) => {
    tile.classList.remove("circle");
    tile.classList.remove("cross")
    tile.dataset.full = "false";
    })
    startBtn.disabled = "true";
}