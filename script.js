let gameBoard = {
    row1: ["E", "E", "E"],
    row2: ["E", "E", "E"],
    row3: ["E", "E", "E"],
}

function gameController() {
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

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        if(activePlayer==players[0]) {
            activePlayer = players[1];
        } else if(activePlayer==players[1]) {
            activePlayer = players[0];
        }
    }

    let destinationTile; 

    function chooseTile() {
        do {
        row = prompt("Select the row (1-3)");
        } while(row!=1 && row!=2 && row!=3);
        do {
        column = prompt("Select the column (1-3)");
        } while(column!=1 && column!=2 && column!=3);
        let selectedRow = row;
        let selectedColumn = column-1;
        destinationTile = gameBoard[`row${selectedRow}`].at(selectedColumn);
        if (destinationTile!="E") {
        console.log(`This tile is already occupied by ${destinationTile}`);
        }
        let modifiedArray = gameBoard[`row${selectedRow}`].with(selectedColumn, activePlayer.symbol);
        gameBoard[`row${selectedRow}`] = modifiedArray;
        return gameBoard;
    }

    
    
    function playGame() {
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
        }
        let row;
        let column;
        while(winner==0) {
            // do {
            // row = prompt("Select the row (1-3)");
            // } while(row!=1 && row!=2 && row!=3);
            // do {
            // column = prompt("Select the column (1-3)");
            // } while(column!=1 && column!=2 && column!=3);
            do {
                chooseTile();
            } while(destinationTile!="E")
            console.log(gameBoard.row1);
            console.log(gameBoard.row2);
            console.log(gameBoard.row3);
            console.log("//////////////////");
            winCheck();
            switchPlayerTurn();
        }
        return console.log(`${winner} wins!`);
    }
    playGame();
}

function resetBoard() {
    gameBoard = {
        row1: ["E", "E", "E"],
        row2: ["E", "E", "E"],
        row3: ["E", "E", "E"],
    }
}