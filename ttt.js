
var winTheGame= function(playerSquare){
  var win = false;
  if (storeMoves[playerSquare]==="X"){
    if(storeMoves['a1']==="X" && storeMoves['a2']==="X" && storeMoves['a3']==="X") {
      win  = true;
      alert("player1 wins!");
    }
    else if (storeMoves['a4']==="X" && storeMoves['a5']==="X" && storeMoves['a6']==="X") {
      win  = true;
      alert("player1 wins!")
    }
    else if (storeMoves['a1']==="X" && storeMoves['a2']==="X" && storeMoves['a3']==="X") {
      win  = true;
      alert("player1 wins!")
    }
    else if (storeMoves['a1']==="X" && storeMoves['a4']==="X" && storeMoves['a7']==="X") {
      win  = true;
      alert("player1 wins!")
    }
    else if (storeMoves['a2']==="X" && storeMoves['a5']==="X" && storeMoves['a8']==="X") {
      win  = true;
     alert("player1 wins!")
    }
    else if (storeMoves['a3']==="X" && storeMoves['a6']==="X" && storeMoves['a9']==="X") {
      win  = true;
      alert("player1 wins!")
    }
    else if (storeMoves['a1']==="X" && storeMoves['a5']==="X" && storeMoves['a9']==="X") {
      win  = true;
      alert("player1 wins!")
    }
    else if (storeMoves['a3']==="X" && storeMoves['a5']==="X" && storeMoves['a7']==="X") {
      win  = true;
      alert("player1 wins!")
    }

  }

  else {
    if(storeMoves['a1']==="O" && storeMoves['a2']==="O" && storeMoves['a3']==="O") {
      win  = true;
      alert("player2 wins!")
    }
    else if (storeMoves['a4']==="O" && storeMoves['a5']==="O" && storeMoves['a6']==="O") {
      win  = true;
      alert("player2 wins!")
    }
    else if (storeMoves['a1']==="O" && storeMoves['a2']==="O" && storeMoves['a3']==="O") {
      win  = true;
      alert("player2 wins!")
    }
    else if (storeMoves['a1']==="O" && storeMoves['a4']==="O" && storeMoves['a7']==="O") {
      win  = true;
      alert("player2 wins!")
    }
    else if (storeMoves['a2']==="O" && storeMoves['a5']==="O" && storeMoves['a8']==="O") {
      win  = true;
      alert("player2 wins!")
    }
    else if (storeMoves['a3']==="O" && storeMoves['a6']==="O" && storeMoves['a9']==="O") {
      win  = true;
      alert("player2 wins!")
    }
    else if (storeMoves['a1']==="O" && storeMoves['a5']==="O" && storeMoves['a9']==="O") {
      win  = true;
     alert("player2 wins!")
    }
    else if (storeMoves['a3']==="O" && storeMoves['a5']==="O" && storeMoves['a7']==="O") {
      win  = true;
      alert("player2 wins!")
    }

  };
  return win;

}
