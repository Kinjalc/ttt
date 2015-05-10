// var grid = {
//   $('#a1') : "null";
//   $('#a2') : "null";
//   $('#a3') : "null";
//   $('#a4') : "null";
//   $('#a5') : "null";
//   $('#a6') : "null";
//   $('#a7') : "null";
//   $('#a8') : "null";
//   $('#a9') : "null";

// }





var player1 = 0;
var player2 = 1;

var selectPlayer=function(sqr){
    if (player1===0){

      sqr.text("X");
      $('#player').text("player2 turn");
      player1 = 1-player1;
      player2 = 1-player2;
    };

    else {
      sqr.text("O");
      $('#player').text("player1 turn");
      player1 = 1-player1;
      player2 = 1-player2;
    };



}


$(document).ready(function(){
  $('.square').on('click',function(e) {
  // if (grid[$(this)]==="null"){
   ($(this)).removeClass('square');
   ($(this)).addClass('clicked');
   // $('#player').text("player2 turn");
    /* Act on the event */
    selectPlayer($(this));

    });
  // };
})
