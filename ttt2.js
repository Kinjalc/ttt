'use strict';

var TicTacToe = TicTacToe || {};
TicTacToe.players = [];
TicTacToe.PlayTheGame= function(){
  var win = false;
  var storeMoves = {};
  var currentPlayer = 0 ;
  var player;

  this.selectPlayer= function(sqr){

    if (storeMoves[sqr.attr('id')]===undefined){
      player = TicTacToe.players[currentPlayer].token;

      storeMoves[sqr.attr('id')]=player
      this.playerDoesThis(sqr);
      currentPlayer= (1+currentPlayer)%2;
    } else{
      return;
    }
  }



  this.winTheGame = function(){

    if ((storeMoves['a1']===player && storeMoves['a2']===player && storeMoves['a3']===player) ||
        (storeMoves['a4']===player && storeMoves['a5']===player && storeMoves['a6']===player) ||
        (storeMoves['a7']===player && storeMoves['a8']===player && storeMoves['a9']===player) ||
        (storeMoves['a1']===player && storeMoves['a4']===player && storeMoves['a7']===player) ||
        (storeMoves['a2']===player && storeMoves['a5']===player && storeMoves['a8']===player) ||
        (storeMoves['a3']===player && storeMoves['a6']===player && storeMoves['a9']===player) ||
        (storeMoves['a1']===player && storeMoves['a5']===player && storeMoves['a9']===player) ||
        (storeMoves['a3']===player && storeMoves['a5']===player && storeMoves['a7']===player)) {
        win=true;
        $('#player').text( TicTacToe.players[currentPlayer].name+ " wins!");
        alert("Game ends!");
    };

    return win;

  };


this.playerDoesThis= function(sqr){
  sqr.html(player);
  if (player==="X"){
    sqr.addClass('animated rotateIn');
    $('#player').text(TicTacToe.players[1].name + " turn");
  } else {

    sqr.addClass('animated zoomIn');
    $('#player').text(TicTacToe.players[0].name + " turn");
  };
  if (this.winTheGame()===true){
    $('#player').addClass('animated bounceInDown')
    $('.grid-container').addClass('animated bounceInUp');
  }
  return this;
}

  this.winStatus = function(){
    return win;
  };

  this.endGame=function(){
    $('.clicked').text(" ");
    $('.clicked').addClass('square');
    $('.square').removeClass('clicked');
    $('.square').removeClass('animated zoomIn');
    $('.square').removeClass('animated rotateIn');
    $('#player').removeClass('animated bounce');
    console.log(this);
    storeMoves={};
    currentPlayer=0;
    TicTacToe.players=[];
    win = false;
    this.player= " ";
    $('#player').text("Enter name");

  };
return this;

};




