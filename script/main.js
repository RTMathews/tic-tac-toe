(function() {
    const gameBoard = {
        board: [],
        init: function() {
            this.cacheDom();
        },
        cacheDom: function() {
            this.$el = $("#game-board");
        }
    };

    gameBoard.init();
})()