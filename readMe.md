Project name: TicTacToe
Author: Kinjal Chauhan
Short Description: Developed an app based on the game Tic Tac Toe. This game app is a 2 player game played on a single device. The players enter their name and play the game turn by turn. The player response is through click on the game board (3x3 square).

Files involved:
index.html: has the html code for single page application Tic tac toe
ttt.css: has the css formatting
ttt.js: has the javascript and some jquery functions after user response has been received
app_ttt: has the jquery functions to get the user response through the jquery functions and initiate javascript function to store and process them

Details:
The Javascript functions in ttt.js are within the scope of TicTacToe. The names entered by player are captured by jquery object and stored in variables named playerOneName and playerTwoName. For each of the player names entered an object is formed with key name : playerOneName/playerTwoName and key token: “X”/“O”. The objects are then pushed into a TicTacToe object “players" array. Variable ttt invokes and stores  the function in object “TicTacToe.PlayTheGame".
On click on one of the squares on the game board, “ttt.selectPlayer" is invoked which selects the player object from “TicTacToe.players” array and player name and  token is picked. This information is passed on to the “playerDoesThis" function where the token(X/O) is added as text to the jQuery object so that it can be visualized on game board. It also adds a key value pair game board square “id” and the corresponding token to it. The current token corresponding to a player is stored in variable “player” whose value changes depending on the “currentPlayer” picked from "TicTacToe players”.
After this it is checked if winTheGame function value is “true”. The store Moves object is checked if all the keys of a row or column or diagonal have the same “player”. This is checked after every move and if any of the conditions is fulfilled it will turn the variable win and in turn the function “true”. If not the players make move the condition is fulfilled or the board is full.
