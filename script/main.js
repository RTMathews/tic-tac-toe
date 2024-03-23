const Gameboard = (() => {
    let gameBoard = ['','','','','','','','','']

    const render = () => {
        let boardHTML = '';
        gameBoard.forEach((tile, index) => {
            boardHTML += `<div class="tile" id=tile-${index}>${tile}</div>`
        })
    }
    document.querySelector('#game-board').boardHTML

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
    let currentPlayer = 0;
    let gameOver = false;

    const start = () => {
        players = [
            createPlayer()
        ]
    }
})();