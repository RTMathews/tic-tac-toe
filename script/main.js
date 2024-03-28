const createPlayer = (name, marker) => {
    return {
        name,
        marker,
    }
}

const Game = (() => {
    let currentPlayer = 0;
    let isWon = false;
    let isTie = false;
    let gameOver = false;
    const start = () => {
        let players = [
            createPlayer(document.querySelector('#player1').value, 'X'),
            createPlayer(document.querySelector('#player2').value, 'O')
    ]
    if(players[0].name === "") {
        players[0].name = "Player 1";
    }
    if(players[1].name === "") {
        players[1].name = "Player 2";
    }
    let playerTurn = document.querySelector('#pturn');
    playerTurn.textContent = `${players[currentPlayer].name}'s Turn`;
    
    const gameboard = Array.from(document.querySelectorAll('.tile'))
    const handleBoard = (e) => {
        if(gameOver) {
            return;
        }
        e.target.textContent = players[currentPlayer].marker
        if (isWon = checkWin(gameboard)) {
            let result = document.querySelector('#result');
            result.textContent = `${players[currentPlayer].name} Wins!`;
            gameOver = true;
            
            console.log(`${players[currentPlayer].name}`);
        } 
        else if (isTie = checkTie(gameboard)){
            gameOver = true;
            let result = document.querySelector('#result');
            result.textContent = "It's a tie!";
        }
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        let playerTurn = document.querySelector('#pturn');
        playerTurn.textContent = `${players[currentPlayer].name}'s Turn`;
    }
    gameboard.forEach((tile) => {
        tile.addEventListener('click', handleBoard, {once : true})
    })
    }

    const restart = () => {
        window.location.reload();
    }
    return {
        start,
        restart,
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
        if (board[a]?.textContent && board[a]?.textContent === board[b]?.textContent && board[a]?.textContent === board[c]?.textContent)
        {
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
    }else {
        return false;
    }

}

const restartButton = document.querySelector('#restart-btn');
restartButton.addEventListener('click', () => {
    Game.restart();
})

const startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', () => {
    Game.start();
});