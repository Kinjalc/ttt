'use strict';


$(document).ready(function(){
  $('#player1').keypress(function (e) {
    if (e.keyCode == 13) {
      var playerOneName = $('#player1').val();
      TicTacToe.players.push({name: playerOneName, token: "X"});
      $('#player').html("player2 enter your name");
    }
  });
  $('#player2').keypress(function (e) {
    if (e.keyCode == 13) {
      var playerTwoName = $('#player2').val();
      TicTacToe.players.push({name: playerTwoName, token: "0"});
      $('#player').html($('#player1').val() + " turn");
    }
  });
  var count = 0;
  var ttt= TicTacToe.PlayTheGame();
  $('.square').on('click',function(e) {
    if (ttt.winStatus() === true) {
      alert("Game has ended");
    } else {
      ($(this)).removeClass('square');
      ($(this)).addClass('clicked');
      ttt.selectPlayer($(this));
      if (ttt.winStatus() !== true) {
        count ++;
        if(count===9){
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



