'use strict';

var TicTacToe = TicTacToe || {};
TicTacToe.PlayTheGame= function(){
  var player1 = 0 ;
  var player2 = 1 ;
  var player;
  var win = false;
  var storeMoves = {};




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
        $('#player').text(player + " wins!");
        alert("Game ends!");
    };

    return win;

  };

  this.selectPlayer= function(sqr){
    if (storeMoves[sqr.attr('id')]===undefined){
        if(player1===0){
        player="X";
      } else{
        player="O";
      }
      this.playerDoesThis(sqr);
    }
    else{
      return;
    };

  }
this.playerDoesThis= function(sqr){
  player1= 1-player1;
  storeMoves[sqr.attr('id')]=player
  sqr.html(player);
  if (player==="X"){
    sqr.addClass('animated rotateIn');
    $('#player').text("player2 turn");
  } else {

    sqr.addClass('animated zoomIn');
    $('#player').text("player1 turn");
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
    player1=0;
    player2=1;
    win = false;
    this.player= " ";
    $('#player').text("Player 1 plays");

  };
return this;

};




