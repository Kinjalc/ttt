'use strict';

$(document).ready(function(){
  var count = 0;
  var ttt= TicTacToe.PlayTheGame;
  $('.square').on('click',function(e) {
    debugger;
    if (ttt.gameOver === true) {

      alert("Game has ended");
    } else if (ttt.storeMoves[$(this).attr('id')]===undefined){
      count ++;
      ($(this)).removeClass('square');
      ($(this)).addClass('clicked');

      ttt.selectPlayer($(this));
        if(count===9 ){
        alert("It's a tie!");
        $('#player').text("It's a tie!");
        }
    }
  })
  $('#reset').on('click',function(e){
          count=0;
          ttt.endGame();
  })
})
