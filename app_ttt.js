var player1 = 0 ;
var player2 = 1 ;
var player;
var storeMoves={};

var selectPlayer=function(sqr){
  if (player1===0){

      sqr.text("X");
      player="X";
      $('#player').text("player 2 turn");
      player1 = 1-player1;
      //alert("player1 clicked " + sqr.attr('id'));
      storeMoves[sqr.attr('id')] = "X";
      // winTheGame(sqr.attr('id'));
      if (winTheGame(sqr.attr('id')) === true){
        $(".square").off("click");
      }
      }

  else {
      sqr.text("O");
      player="O";
      $('#player').text("player 1 turn");
      player1 = 1-player1;
      //alert("player2 clicked " + sqr.attr('id'));
      storeMoves[sqr.attr('id')] = "O";
      // winTheGame(sqr.attr('id'));
      if (winTheGame(sqr.attr('id')) === true){
        $(".square").off("click");
      }
    }

console.log(storeMoves);

}

function endGame(){
  $('.clicked').text(" ");
  $('.clicked').addClass('square');
  $('.square').addClass('square');
  $('.square').removeClass('clicked');
  storeMoves={};
  player1=0;
  player2=1;
  $('#player').text("Player 1 plays");
}



$(document).ready(function(){
  var count = 0;
  $('.square').on('click',function(e) {
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
