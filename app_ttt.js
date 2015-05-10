var player1 = 0;
var player2 = 1;
var storeMoves ={

}

var selectPlayer=function(sqr){
    if (player1===0){

      sqr.text("X");
      $('#player').text("player2 turn");
      player1 = 1-player1;
      alert("player1 clicked " + sqr.attr('id'));
      storeMoves[sqr.attr('id')] = "X";

    }

    else {
      sqr.text("O");
      $('#player').text("player1 turn");
      player1 = 1-player1;
      alert("player2 clicked " + sqr.attr('id'));
      storeMoves[sqr.attr('id')] = "O";
    }

console.log(storeMoves);

}


$(document).ready(function(){
  $('.square').on('click',function(e) {
   ($(this)).removeClass('square');
   ($(this)).addClass('clicked');
   // $('#player').text("player2 turn");
    /* Act on the event */
    selectPlayer($(this));
    });

})
