var player1 = 0 ;
var player2 = 1 ;
var player;
var storeMoves={};
var gameOver = false;

var selectPlayer=function(sqr){
  if (player1===0){

      sqr.text("X").addClass('animated rotateIn');
      // $(sqr).addClass('animated rotateIn');
      player="X";
      $('#player').text("player 2 turn");
      player1 = 1-player1;
      //alert("player1 clicked " + sqr.attr('id'));
      storeMoves[sqr.attr('id')] = "X";
      // winTheGame(sqr.attr('id'));
      if (winTheGame(sqr.attr('id')) === true){
        gameOver = true;
        //$('.square').addClass('clicked');
        //$('.clicked').removeClass('square');

        //$(".square").off("click");
      }
      }

  else {
      sqr.text("O").addClass('animated zoomIn');
      player="O";
      $('#player').text("player 1 turn");
      player1 = 1-player1;
      //alert("player2 clicked " + sqr.attr('id'));
      storeMoves[sqr.attr('id')] = "O";
      // winTheGame(sqr.attr('id'));
      if (winTheGame(sqr.attr('id')) === true){
        gameOver = true;

        //$('.square').addClass('clicked');
        //$('.clicked').removeClass('square');
        //$(".square").off("click");
      }
    }

console.log(storeMoves);

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



$(document).ready(function(){
  var count = 0;
  $('.square').on('click',function(e) {
    if (gameOver === true) {
      alert("Game has ended");
      return;
    }
    if (storeMoves[$(this).attr('id')]===undefined){
      count ++;
      ($(this)).removeClass('square');
      ($(this)).addClass('clicked');
      selectPlayer($(this));
        if(count===9 ){
        alert("It's a tie!");
        $('#player').text("It's a tie!");
        }
    }
  })
  $('#reset').on('click',function(e){
          count=0;
          endGame();
  })
})
