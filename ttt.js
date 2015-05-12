var winTheGame= function(playerSquare){
  var win = false;
  storeMoves[playerSquare]=== player;
  if ((storeMoves['a1']===player && storeMoves['a2']===player && storeMoves['a3']===player) ||
      (storeMoves['a4']===player && storeMoves['a5']===player && storeMoves['a6']===player) ||
      (storeMoves['a1']===player && storeMoves['a2']===player && storeMoves['a3']===player) ||
      (storeMoves['a1']===player && storeMoves['a4']===player && storeMoves['a7']===player) ||
      (storeMoves['a2']===player && storeMoves['a5']===player && storeMoves['a8']===player) ||
      (storeMoves['a3']===player && storeMoves['a6']===player && storeMoves['a9']===player) ||
      (storeMoves['a1']===player && storeMoves['a5']===player && storeMoves['a9']===player) ||
      (storeMoves['a3']===player && storeMoves['a5']===player && storeMoves['a7']===player)) {
    win  = true;
    $('#player').text(player + " wins!");
    alert("Game ends!")
  }

  return win;

}
