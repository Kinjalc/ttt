var TicTacToe = TicTacToe || {}



TicTacToe.playGame = function(){



var winTheGame=function(playerSquare){
  var win = false;
  storeMoves[playerSquare]=== player;
    if(storeMoves['a1']===player && storeMoves['a2']===player && storeMoves['a3']===player) {
      win  = true;
      alert("player wins!");
    }
    else if (storeMoves['a4']===player && storeMoves['a5']===player && storeMoves['a6']===player) {
      win  = true;
      alert("player wins!")
    }
    else if (storeMoves['a1']===player && storeMoves['a2']===player && storeMoves['a3']===player) {
      win  = true;
      alert("player wins!")
    }
    else if (storeMoves['a1']===player&& storeMoves['a4']===player && storeMoves['a7']===player) {
      win  = true;
      alert("player wins!")
    }
    else if (storeMoves['a2']===player && storeMoves['a5']===player && storeMoves['a8']===player) {
      win  = true;
     alert("player wins!")
    }
    else if (storeMoves['a3']===player && storeMoves['a6']===player && storeMoves['a9']===player) {
      win  = true;
      alert("player wins!")
    }
    else if (storeMoves['a1']===player && storeMoves['a5']===player && storeMoves['a9']===player) {
      win  = true;
      alert("player wins!")
    }
    else if (storeMoves['a3']===player && storeMoves['a5']===player && storeMoves['a7']===player) {
      win  = true;
      alert("player wins!")
    }

  if (win===true){
    alert("Game ends!")
  }
  return win;

}
}
