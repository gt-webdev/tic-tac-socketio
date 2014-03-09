//  gameManager
//  ----game logic
//  TODO: all the game logic
var gMan = function() {
    var empty = "-";
    var playerXID = "";
    var playerOID = "";
    var curPlayer = 'X';
    var boardState = [[empty, empty, empty], [empty, empty, empty], [empty, empty, empty]];

    // It has to be the player's turn, and the box has to have no move for the move to be valid.
    var moveValid = function(rowInd, colInd, player) {
        if (isCurrentPlayer(player) && boardState[rowInd][colInd] == empty) {
            return true;
        }
        return false;
    };

    var userIDtoSymbol = function(userID) {
        if (userID == playerXID) return 'X';
        else if (userID == playerOID) return 'O';
        else return empty;
    }

    this.makeMove = function(rowInd, colInd, userID) {
        var player = userIDtoSymbol(userID);

        if (moveValid(rowInd, colInd, player)) {
            boardState[rowInd][colInd] = player;
            nextTurn();
            return true;
        }
        return false;
    }

    var nextTurn = function() {
        if(curPlayer == 'X') curPlayer='O';
        else {curPlayer = 'X'};
    }

    var isCurrentPlayer = function(player) {
        return player == curPlayer;
    }

    // Determines whether someone has won the game
    // Returns X if X won, O if O won, or an empty if noone won
    this.winner = function() {
        for (var row = 0; row < 3; ++row) {
            if (xOrO(boardState[row])) {
                return boardState[row][0];
            }
        }
        for (var col = 0; col < 3; ++col) {
            var colElem = [boardState[0][col], boardState[1][col], boardState[2][col]];
            if (xOrO(colElem)) return colElem[0];
        }
        var leftDiag = [boardState[0][0], boardState[1][1], boardState[2][2]];
        var rightDiag = [boardState[0][2], boardState[1][1], boardState[2][0]];

        if (xOrO(leftDiag)) return leftDiag[0];
        if (xOrO(rightDiag)) return rightDiag[0];
        return empty;
    }

    // Given an array, checks to see if all the elements in the array are either
    // Player O or X
    var xOrO = function(arr) {
        function isSameChar(orig) {
            return function(toCheck) {
                return toCheck == orig;
            }
        }
        return arr.every(isSameChar('X')) || arr.every(isSameChar('O'));
    }

}

var ex = new gMan();
module.exports = ex;

