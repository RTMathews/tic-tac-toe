const Gameboard = (() => {
    let gameBoard = ['','','','','','','','','']

    const render = () => {
        let boardHTML = '';
        const handleClick = (e) => {
            console.log("hey");
        }
        gameBoard.forEach((tile, index) => {
            boardHTML += `<div class="tile" id=tile-${index}>${tile}</div>`
        })
        document.querySelector('#gameboard').innerHTML = boardHTML;
        const tiles = document.querySelectorAll('.tile');
        tiles.forEach((tile) => {
            tile.addEventListener('click', handleClick, {once : true})
        })
    }

    return {
        render,
    }
})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

const Game = (() => {
    let players = [];
    let currentPlayer;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector('#player1').value, 'X'),
            createPlayer(document.querySelector('#player2').value, 'O')
        ]
        currentPlayer = 0;
        gameOver = false;
        Gameboard.render();
    }
    return {
        start,
    }
})();

const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', () => {
    Game.start();
})