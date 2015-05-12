var player1 = 0 ;
var player2 = 1 ;
var player;
var storeMoves={};

var selectPlayer=function(sqr){
    if (player1===0){

      sqr.text("X");
      player="X";
      $('#player').text("player2 turn");
      player1 = 1-player1;
      //alert("player1 clicked " + sqr.attr('id'));
      storeMoves[sqr.attr('id')] = "X";
      winTheGame(sqr.attr('id'));
      }


    else {
      sqr.text("O");
      player="O";
      $('#player').text("player1 turn");
      player1 = 1-player1;
      //alert("player2 clicked " + sqr.attr('id'));
      storeMoves[sqr.attr('id')] = "O";
      winTheGame(sqr.attr('id'));
    }

console.log(storeMoves);

}



$(document).ready(function(){
  $('.square').on('click',function(e) {
    if (storeMoves[$(this).attr('id')]===undefined){
      ($(this)).removeClass('square');
      ($(this)).addClass('clicked');
      selectPlayer($(this));
      };
    })



})
