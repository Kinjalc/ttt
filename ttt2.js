'use strict';

var TicTacToe = TicTacToe || {};



TicTacToe.PlayTheGame= function(){
  var player1 = 0 ;
  var player2 = 1 ;
  var player;
  var win = false;
  var storeMoves = {};



  this.winTheGame = function(playerSquare){

    storeMoves[playerSquare]=== player;
    if ((storeMoves['a1']===player && storeMoves['a2']===player && storeMoves['a3']===player) ||
        (storeMoves['a4']===player && storeMoves['a5']===player && storeMoves['a6']===player) ||
        (storeMoves['a7']===player && storeMoves['a8']===player && storeMoves['a9']===player) ||
        (storeMoves['a1']===player && storeMoves['a4']===player && storeMoves['a7']===player) ||
        (storeMoves['a2']===player && storeMoves['a5']===player && storeMoves['a8']===player) ||
        (storeMoves['a3']===player && storeMoves['a6']===player && storeMoves['a9']===player) ||
        (storeMoves['a1']===player && storeMoves['a5']===player && storeMoves['a9']===player) ||
        (storeMoves['a3']===player && storeMoves['a5']===player && storeMoves['a7']===player)) {
        win=true;
        $('#player').text(player + " wins!");
        alert("Game ends!");
    };

    return win;

  };

  this.selectPlayer=function(sqr){
    if (storeMoves[sqr.attr('id')]===undefined){
      if (player1===0){
        sqr.text("X").addClass('animated rotateIn');
        player="X";
        $('#player').text("player 2 turn");
          player1 = 1-player1;

        storeMoves[sqr.attr('id')] = "X";
        this.winTheGame(sqr.attr('id'));

        }


      else {
        sqr.text("O").addClass('animated zoomIn');
        player="O";
        $('#player').text("player 1 turn");
        player1 = 1-player1;
        //alert("player2 clicked " + sqr.attr('id'));
        storeMoves[sqr.attr('id')] = "O";
        this.winTheGame(sqr.attr('id'));

        }
      }

    else{
      return;
    }

  };

  this.winStatus = function(){
    return win;
  };

  this.endGame=function(){
    $('.clicked').text(" ");
    $('.clicked').addClass('square');
    $('.square').removeClass('clicked');
    $('.square').removeClass('animated zoomIn');
    $('.square').removeClass('animated rotateIn')
    console.log(this);
    storeMoves={};
    player1=0;
    player2=1;
    win = false;
    this.player= " ";
    $('#player').text("Player 1 plays");

  };
return this;

};
