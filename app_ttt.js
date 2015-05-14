'use strict';

$(document).ready(function(){
  var count = 0;
  var ttt= TicTacToe.PlayTheGame();
  $('.square').on('click',function(e) {

    console.log('click received on ' + $(this).attr('id'));
    if (ttt.winStatus() === true) {
      alert("Game has ended");
    } else {
      ($(this)).removeClass('square');
      ($(this)).addClass('clicked');
      ttt.selectPlayer($(this));
      if (ttt.winStatus() !== true) {
        count ++;
        if(count===9){
          alert("It's a tie!");
          $('#player').text("It's a tie!");
        }
      }

    }
  });

  $('#reset').on('click',function(e){
    count=0;
    ttt.endGame();

  });
});



