'use strict';
var TicTacToe = TicTacToe || {};



TicTacToe.PlayTheGame= (function(){
  var player1 = 0 ;
  var player2 = 1 ;
  var player;
  var storeMoves={};
  var gameOver = false;
  var win = false;

  function winTheGame (playerSquare){
    storeMoves[playerSquare]=== player;
    if ((storeMoves['a1']===player && storeMoves['a2']===player && storeMoves['a3']===player) ||
        (storeMoves['a4']===player && storeMoves['a5']===player && storeMoves['a6']===player) ||
        (storeMoves['a1']===player && storeMoves['a2']===player && storeMoves['a3']===player) ||
        (storeMoves['a1']===player && storeMoves['a4']===player && storeMoves['a7']===player) ||
        (storeMoves['a2']===player && storeMoves['a5']===player && storeMoves['a8']===player) ||
        (storeMoves['a3']===player && storeMoves['a6']===player && storeMoves['a9']===player) ||
        (storeMoves['a1']===player && storeMoves['a5']===player && storeMoves['a9']===player) ||
        (storeMoves['a3']===player && storeMoves['a5']===player && storeMoves['a7']===player)) {
      win  = true;
      $('#player').text(player + " wins!");
      alert("Game ends!")
    }

    return win;

  }

  function selectPlayer(sqr){
    if (player1===0){

        sqr.text("X").addClass('animated rotateIn');
        // $(sqr).addClass('animated rotateIn');
        player="X";
        $('#player').text("player 2 turn");
        player1 = 1-player1;
        //alert("player1 clicked " + sqr.attr('id'));
        storeMoves[sqr.attr('id')] = "X";

        if (winTheGame(sqr.attr('id')) === true){
          this.gameOver = true;

        }
    }

    else {
      sqr.text("O").addClass('animated zoomIn');
      player="O";
      $('#player').text("player 1 turn");
      player1 = 1-player1;
      //alert("player2 clicked " + sqr.attr('id'));
      storeMoves[sqr.attr('id')] = "O";

      if (winTheGame(sqr.attr('id')) === true){
        this.gameOver = true;

      }
    }
  }

  function endGame(){
  $('.clicked').text(" ");
  // $('.square').addClass('clicked');
  $('.clicked').addClass('square');
  $('.square').removeClass('clicked');
  storeMoves={};
  player1=0;
  player2=1;
  gameOver = false;
  $('#player').text("Player 1 plays");
}

    return {
      selectPlayer: selectPlayer,
      endGame: endGame,
      gameOver: gameOver,
      storeMoves: storeMoves

    }


})();
