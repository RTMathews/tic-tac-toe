const createPlayers = (name, marker) => {
    return {
        name,
        marker
    }
}

const Game = (() => {
    let isWin = false;
    let isTie = false;
    let currentPlayer = 0;
    let gameOver = false;

    let playerTurn = document.querySelector("#pturn");

    const start = () => {
        let players = [
            createPlayers(document.querySelector("#player1").value, "X"),
            createPlayers(document.querySelector("#player2").value, "O")
        ]
        if(players[0].name === "") {
            players[0].name = "Player 1";
        }
        if(players[1].name === "") {
            players[1].name = "Player 2";
        }

        playerTurn.textContent = `${players[currentPlayer].name}'s turn`;

        const handleClick = (e) => {
            if(gameOver) {
                return;
            }

            e.target.textContent = players[currentPlayer].marker;

            if(isWin = checkWin(gameboard)) {
                const result = document.querySelector("#result");
                result.textContent = `${players[currentPlayer].name} wins!`;
                gameOver = true;
            }

            else if(isTie = checkTie(gameboard)) {
                const result = document.querySelector("#result");
                result.textContent = "It's a tie!";
                gameOver = true;
            }

            currentPlayer = currentPlayer === 0 ? 1 : 0;

            playerTurn.textContent = `${players[currentPlayer].name}'s turn`;
        }

        const gameboard = Array.from(document.querySelectorAll(".tile"));
        gameboard.forEach((tile) => {
            tile.addEventListener("click", handleClick, {once : true})
        })
    }

    const reset = () => {
        window.location.reload();
    }

    return {
        start,
        reset,
    }
})();

function checkWin(board) {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if(board[a].textContent && board[a].textContent === board[b].textContent && board[a].textContent === board[c].textContent) {
            return true;
        }
    }
    return false;
}

function checkTie(board) {
    let counter = 0;
    board.forEach((tile) => {
        if(tile.textContent !== "") {
            counter++;
        }
    })
    if(counter === 9) {
        return true;
    }
    return false;
}

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", Game.start);

const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click", Game.reset);
