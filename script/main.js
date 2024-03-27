const Gameboard = (() => {

})();

const createPlayer = (name, marker) => {
    return {
        name,
        marker,
    }
}

const Game = (() => {
    let currentPlayer = 0;
    let gameOver = false;
    const start = () => {
        let players = [
            createPlayer(document.querySelector('#player1').value, 'X'),
            createPlayer(document.querySelector('#player2').value, 'O')
    ]
    const gameboard = Array.from(document.querySelectorAll('.tile'))
    const handleBoard = (e) => {
        e.target.textContent = players[currentPlayer].marker
        currentPlayer = currentPlayer === 0 ? 1 : 0;
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

const restartButton = document.querySelector('#restart-btn');
restartButton.addEventListener('click', () => {
    Game.restart();
})

const startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', () => {
    Game.start();
});