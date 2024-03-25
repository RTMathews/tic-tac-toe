const Game = (() => {
    const tiles = document.querySelectorAll('.tile');
    const clickHandler = () => {
        
    }
    tiles.forEach((tile) => {
        tile.addEventListener('click', clickHandler, {once : true});
    });
})();