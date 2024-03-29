const boxes = document.querySelectorAll('.box');
var numberOfPlays = 0;
var winner = "";
var HumanPlayer = "";
var gameOver = false;
var mode = "";
var computerChoice = 0;
let player = "O"; //X player is human and O player is computer 
var choosePlayer = 0;
// Call the function to generate a random move
const randomMove = generateRandomInteger(8);

boxes.forEach(box => {
    box.addEventListener('click', function handleClick(event) {
        if ((player != "X") || (gameOver == true)) {
            return;
        }
        if (box.id == "zero")
            putNaughtOrCross(0)
        if (box.id == "one")
            putNaughtOrCross(1)
        if (box.id == "two")
            putNaughtOrCross(2)
        if (box.id == "three")
            putNaughtOrCross(3)
        if (box.id == "four")
            putNaughtOrCross(4)
        if (box.id == "five")
            putNaughtOrCross(5)
        if (box.id == "six")
            putNaughtOrCross(6)
        if (box.id == "seven")
            putNaughtOrCross(7)
        if (box.id == "eight")
            putNaughtOrCross(8)
    });
});
///////////////
//Declare array to store the Os and Xs 
TicTacToe = [0, 1, 2,
             3, 4, 5,
             6, 7, 8];
// each arrange location is set one space
TicTacToe[0] = "";
TicTacToe[1] = "";
TicTacToe[2] = "";
TicTacToe[3] = "";
TicTacToe[4] = "";
TicTacToe[5] = "";
TicTacToe[6] = "";
TicTacToe[7] = "";
TicTacToe[8] = "";

// Function to check the winner by checking different rows, columns, and diagonals
function checkWinner() {
    // Check each possible winning combination
    checkTopRow();        // Check the top row
    checkMiddleRow();     // Check the middle row
    checkbottomRow();     // Check the bottom row
    checkdiagonal1Row();  // Check the diagonal from top-left to bottom-right
    checkdiagonal2Row();  // Check the diagonal from top-right to bottom-left
    checkcolumn1Row();    // Check the leftmost column
    checkcolumn2Row();    // Check the middle column
    checkcolumn3Row();    // Check the rightmost column

    // Check for a draw if all cells are filled and there's no winner
    if ((numberOfPlays == 9) && (winner == "")) {
        // Display draw message
        displayWinner("It's a DRAW");
        // Set the game over flag
        gameOver = true;
    }
}


// Function to check the top row for a winner
function checkTopRow() {
    // Concatenate values of the cells in the top row
    TopRow = TicTacToe[0] + TicTacToe[1] + TicTacToe[2];

    // Check if X player wins in the top row
    if (TopRow == "XXX") {
        // Set the winner and game over flags
        winner = player;
        gameOver = true;
        // Display the winner message for X player
        displayWinner("X player wins");
    }

    // Check if O player wins in the top row
    if (TopRow == "OOO") {
        // Set the winner and game over flags
        winner = player;
        gameOver = true;
        // Display the winner message for O player
        displayWinner("O player wins");
    }
}


function checkMiddleRow() {
    MiddleRow = TicTacToe[3] + TicTacToe[4] + TicTacToe[5];
    if (MiddleRow == "XXX") {
        winner = player;
        gameOver = true;
        displayWinner("X player wins");
    }

    MiddleRow = TicTacToe[3] + TicTacToe[4] + TicTacToe[5];
    if (MiddleRow == "OOO") {
        winner = player;
        gameOver = true;
        displayWinner("0 player wins");
    }
}

function checkbottomRow() {
    bottomRow = TicTacToe[6] + TicTacToe[7] + TicTacToe[8];
    if (bottomRow == "XXX") {
        winner = player;
        gameOver = true;
        displayWinner("X player wins");
    }
    bottomRow = TicTacToe[6] + TicTacToe[7] + TicTacToe[8];
    if (bottomRow == "OOO") {
        winner = player;
        gameOver = true;
        displayWinner("0 player wins");
    }
}

function checkdiagonal1Row() {
    diagonal1Row = TicTacToe[0] + TicTacToe[4] + TicTacToe[8];
    if (diagonal1Row == "XXX") {
        winner = player;
        gameOver = true;
        displayWinner("X player wins");
    }
    diagonal1 = TicTacToe[0] + TicTacToe[4] + TicTacToe[8];
    if (diagonal1 == "OOO") {
        winner = player;
        gameOver = true;
        displayWinner("0 player wins");
    }
}

function checkdiagonal2Row() {
    diagonal2Row = TicTacToe[6] + TicTacToe[4] + TicTacToe[2];
    if (diagonal2Row == "XXX") {
        winner = player;
        gameOver = true;
        displayWinner("X player wins");
    }
    diagonal2 = TicTacToe[6] + TicTacToe[4] + TicTacToe[2];
    if (diagonal2 == "OOO") {
        winner = player;
        gameOver = true;
        displayWinner("0 player wins");
    }
}

function checkcolumn1Row() {
    column1Row = TicTacToe[0] + TicTacToe[3] + TicTacToe[6];
    if (column1Row == "XXX") {
        winner = player;
        gameOver = true;
        displayWinner("X player wins");
    }

    column1 = TicTacToe[0] + TicTacToe[3] + TicTacToe[6];
    if (column1 == "OOO") {
        winner = player;
        gameOver = true;
        displayWinner("0 player wins");
    }
}

function checkcolumn2Row() {
    column2Row = TicTacToe[1] + TicTacToe[4] + TicTacToe[7];
    if (column2Row == "XXX") {
        winner = player;
        gameOver = true;
        displayWinner("X player wins");
    }
    column2 = TicTacToe[1] + TicTacToe[4] + TicTacToe[7];
    if (column2 == "OOO") {
        winner = player;
        gameOver = true;
        displayWinner("0 player wins");
    }
}

function checkcolumn3Row() {
    column3Row = TicTacToe[2] + TicTacToe[5] + TicTacToe[8];
    if (column3Row == "XXX") {
        winner = player;
        gameOver = true;
        displayWinner("X player wins");
    }
    column3 = TicTacToe[2] + TicTacToe[5] + TicTacToe[8];
    if (column3 == "OOO") {
        winner = player;
        gameOver = true;
        displayWinner("0 player wins");
    }
}

function putNaughtOrCross(boxNumber) {
    let onscreenBoard = document.getElementsByClassName("box")
    if (TicTacToe[boxNumber] == "") //CHECK ARRAY LOCATION IF EMPTY
    {
        //Check if player is human then change to computer player and call computerplays  
        onscreenBoard[boxNumber].innerText = player;
        TicTacToe[boxNumber] = player; //Record player position in array TicTacToe
        numberOfPlays++; //increases numerOfPlays by one
        if (player == "X") {
            player = "O"; //Change player to computer
            display();
            const TimeoutRef = setTimeout(computerPlays, 2000); //computer plays after 2 seconds
        }
        checkWinner();
    }
} // End of put nought or cross function 

// Function to display the current player's turn message
function display() {
    // Check if it's X player's turn
    if (player == "X") {
        // Display message for X player's turn (HumanPlayer's turn)
        document.getElementById("message").innerHTML = "Your turn";
    }

    // Check if it's O player's turn
    if (player == "O") {
        // Display message for O player's turn (Computer's turn)
        document.getElementById("message").innerHTML = "Computer's turn";
    }
}


function playDefencePositionOne() {
    decider = generateRandomInteger(4);
    if (decider == 0)
        return 0;
    if (decider == 1)
        return 2;
    if (decider == 2)
        return 6;
    if (decider == 3)
        return 8;
}

function playhard() {

    Row2 = TicTacToe[3] + TicTacToe[4] + TicTacToe[5];
    if ((Row2 == "X") && (numberOfPlays == 1)) //This if statement is testing against X only because the concatenation operator ignores spaces
    {
        let boardPosition = playDefencePositionOne();
        return boardPosition; //this is the position on the tic tac toe board where the computer will play
    }
    ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE FIRST ROW TGEN BLOCK ////////////////
    else if ((TicTacToe[0] == "X") && (TicTacToe[1] == "X") && (TicTacToe[2] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 2; //block the human player from winning in row1 by playing in box 2
    } else if ((TicTacToe[0] == "") && (TicTacToe[1] == "X") && (TicTacToe[2] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 0; //block the human player from winning in row1 by playing in box 0
    } else if ((TicTacToe[0] == "X") && (TicTacToe[1] == "") && (TicTacToe[2] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 1; //block the human player from winning in row1 by playing in box 1
    }
    ///////////////END OF FIRST ROW TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE SECOND ROW AND BLOCK ////////////////
    else if ((TicTacToe[3] == "X") && (TicTacToe[4] == "X") && (TicTacToe[5] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 5; //block the human player from winning in row1 by playing in box 5
    } else if ((TicTacToe[3] == "") && (TicTacToe[4] == "X") && (TicTacToe[5] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 3; //block the human player from winning in row1 by playing in box 3
    } else if ((TicTacToe[3] == "X") && (TicTacToe[4] == "") && (TicTacToe[5] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 4; //block the human player from winning in row1 by playing in box 4
    }
    ///////////////END OF SECOND ROW TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE TIRTH ROW AND BLOCK ////////////////
    else if ((TicTacToe[6] == "X") && (TicTacToe[7] == "X") && (TicTacToe[8] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 8; //block the human player from winning in row1 by playing in box 8
    } else if ((TicTacToe[6] == "") && (TicTacToe[7] == "X") && (TicTacToe[8] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 6; //block the human player from winning in row1 by playing in box 6
    } else if ((TicTacToe[6] == "X") && (TicTacToe[7] == "") && (TicTacToe[8] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 7; //block the human player from winning in row1 by playing in box 7
    }
    ///////////////END OF TIRTH ROW TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE DIAGONAL1 ROW AND BLOCK ////////////////
    else if ((TicTacToe[0] == "X") && (TicTacToe[4] == "X") && (TicTacToe[8] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 8; //block the human player from winning in row1 by playing in box 8
    } else if ((TicTacToe[0] == "") && (TicTacToe[4] == "X") && (TicTacToe[8] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 0; //block the human player from winning in row1 by playing in box 0
    } else if ((TicTacToe[0] == "X") && (TicTacToe[4] == "") && (TicTacToe[8] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 4; //block the human player from winning in row1 by playing in box 4
    }
    ///////////////END OF DIAGONAL1 ROW TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE DIAGONAL2 ROW AND BLOCK ////////////////
    else if ((TicTacToe[6] == "X") && (TicTacToe[4] == "X") && (TicTacToe[2] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 2; //block the human player from winning in row1 by playing in box 2
    } else if ((TicTacToe[6] == "") && (TicTacToe[4] == "X") && (TicTacToe[2] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 6; //block the human player from winning in row1 by playing in box 6
    } else if ((TicTacToe[6] == "X") && (TicTacToe[4] == "") && (TicTacToe[2] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 4; //block the human player from winning in row1 by playing in box 4
    }
    ///////////////END OF DIAGONAL2 ROW TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE COLUMN1 AND BLOCK ////////////////
    else if ((TicTacToe[0] == "X") && (TicTacToe[3] == "X") && (TicTacToe[6] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 6; //block the human player from winning in row1 by playing in box 6
    } else if ((TicTacToe[0] == "") && (TicTacToe[3] == "X") && (TicTacToe[6] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 0; //block the human player from winning in row1 by playing in box 0
    } else if ((TicTacToe[0] == "X") && (TicTacToe[3] == "") && (TicTacToe[6] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 3; //block the human player from winning in row1 by playing in box 3
    }
    ///////////////END OF COLUMN1 TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE COLUMN2 AND BLOCK ////////////////
    else if ((TicTacToe[1] == "X") && (TicTacToe[4] == "X") && (TicTacToe[7] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 7; //block the human player from winning in row1 by playing in box 7
    } else if ((TicTacToe[1] == "") && (TicTacToe[4] == "X") && (TicTacToe[7] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 1; //block the human player from winning in row1 by playing in box 1
    } else if ((TicTacToe[1] == "X") && (TicTacToe[4] == "") && (TicTacToe[7] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 4; //block the human player from winning in row1 by playing in box 4
    }
    ///////////////END OF COLUMN2 TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE COLUMN3 AND BLOCK ////////////////
    else if ((TicTacToe[2] == "X") && (TicTacToe[5] == "X") && (TicTacToe[8] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 8; //block the human player from winning in row1 by playing in box 8
    } else if ((TicTacToe[2] == "") && (TicTacToe[5] == "X") && (TicTacToe[8] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 2; //block the human player from winning in row1 by playing in box 2
    } else if ((TicTacToe[2] == "X") && (TicTacToe[5] == "") && (TicTacToe[8] == "X")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 5; //block the human player from winning in row1 by playing in box 5
    }
    ///////////////END OF COLUMN3 TEST////////////////////////////
    else {
        return findemptyspace(); //computer just searches for an empty slot to play
    }
} //end of function hard

function attack() {
    ////////TEST IF COMPUTERIS ABOUT TO WIN IN THE FIRST ROW ////////////////
    if ((TicTacToe[0] == "O") && (TicTacToe[1] == "O") && (TicTacToe[2] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 2; //COMPUTER PLAYS BOX 2 TO WIN
    } else if ((TicTacToe[0] == "") && (TicTacToe[1] == "O") && (TicTacToe[2] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 0; //COMPUTER PLAYS BOX 0 TO WIN
    } else if ((TicTacToe[0] == "O") && (TicTacToe[1] == "") && (TicTacToe[2] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 1; //COMPUTER PLAYS BOX 1 TO WIN
    }
    ///////////////END OF FIRST ROW TEST////////////////////////////
    ////////TEST IF COMPUTER IS ABOUT TO WIN IN THE SECOND ROW  ////////////////
    else if ((TicTacToe[3] == "O") && (TicTacToe[4] == "O") && (TicTacToe[5] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 5; //COMPUTER PLAYS BOX 5 TO WIN
    } else if ((TicTacToe[3] == "") && (TicTacToe[4] == "O") && (TicTacToe[5] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 3; //COMPUTER PLAYS BOX 3 TO WIN
    } else if ((TicTacToe[3] == "O") && (TicTacToe[4] == "") && (TicTacToe[5] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 4; //COMPUTER PLAYS BOX 4 TO WIN
    }
    ///////////////END OF SECOND ROW TEST////////////////////////////
    ////////TEST IF COMPUTER IS ABOUT TO WIN IN THE THIRD ROW ////////////////
    else if ((TicTacToe[6] == "O") && (TicTacToe[7] == "O") && (TicTacToe[8] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 8; //COMPUTER PLAYS BOX 8 TO WIN
    } else if ((TicTacToe[6] == "") && (TicTacToe[7] == "O") && (TicTacToe[8] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 6; //COMPUTER PLAYS BOX 6 TO WIN
    } else if ((TicTacToe[6] == "O") && (TicTacToe[7] == "") && (TicTacToe[8] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 7; //COMPUTER PLAYS BOX 7 TO WIN
    }
    ///////////////END OF TIRTH ROW TEST////////////////////////////
    ////////TEST IF COMPUTER IS ABOUT TO WIN IN THE DIAGONAL1 ROW  ////////////////
    else if ((TicTacToe[0] == "O") && (TicTacToe[4] == "O") && (TicTacToe[8] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 8; //COMPUTER PLAYS BOX 8 TO WIN
    } else if ((TicTacToe[0] == "") && (TicTacToe[4] == "O") && (TicTacToe[8] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 0; //COMPUTER PLAYS BOX 0 TO WIN
    } else if ((TicTacToe[0] == "O") && (TicTacToe[4] == "") && (TicTacToe[8] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 4; //COMPUTER PLAYS BOX 4 TO WIN
    }
    ///////////////END OF DIAGONAL1 ROW TEST////////////////////////////
    ////////TEST IF COMPUTER IS ABOUT TO WIN IN THE DIAGONAL2 ROW ////////////////
    else if ((TicTacToe[6] == "O") && (TicTacToe[4] == "O") && (TicTacToe[2] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 2; //COMPUTER PLAYS BOX 2 TO WIN
    } else if ((TicTacToe[6] == "") && (TicTacToe[4] == "O") && (TicTacToe[2] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 6; //COMPUTER PLAYS BOX 6 TO WIN
    } else if ((TicTacToe[6] == "O") && (TicTacToe[4] == "") && (TicTacToe[2] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 4; //COMPUTER PLAYS BOX 4 TO WIN
    }
    ///////////////END OF DIAGONAL2 ROW TEST////////////////////////////
    ////////TEST IF COMPUTER IS ABOUT TO WIN IN THE COLUMN1 ////////////////
    else if ((TicTacToe[0] == "O") && (TicTacToe[3] == "O") && (TicTacToe[6] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 6; //COMPUTER PLAYS BOX 6 TO WIN
    } else if ((TicTacToe[0] == "") && (TicTacToe[3] == "O") && (TicTacToe[6] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 0; //COMPUTER PLAYS BOX 0 TO WIN
    } else if ((TicTacToe[0] == "O") && (TicTacToe[3] == "") && (TicTacToe[6] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 3; //COMPUTER PLAYS IN BOX 3 TO WIN
    }
    ///////////////END OF COLUMN1 TEST////////////////////////////
    ////////TEST IF COMPUTER IS ABOUT TO WIN IN THE COLUMN2 AND PLAYS TO WIN ////////////////
    else if ((TicTacToe[1] == "O") && (TicTacToe[4] == "O") && (TicTacToe[7] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 7; //COMPUTER PLAYS TO WIN IN BOX 7
    } else if ((TicTacToe[1] == "") && (TicTacToe[4] == "O") && (TicTacToe[7] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 1; //block the human player from winning in row1 by playing in box 1
    } else if ((TicTacToe[1] == "O") && (TicTacToe[4] == "") && (TicTacToe[7] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 4; //block the human player from winning in row1 by playing in box 4
    }
    ///////////////END OF COLUMN 2 TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE COLUMN3 AND BLOCK ////////////////
    else if ((TicTacToe[2] == "O") && (TicTacToe[5] == "O") && (TicTacToe[8] == "")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 8; //block the human player from winning in row1 by playing in box 8
    } else if ((TicTacToe[2] == "") && (TicTacToe[5] == "O") && (TicTacToe[8] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 2; //block the human player from winning in row1 by playing in box 2
    } else if ((TicTacToe[2] == "O") && (TicTacToe[5] == "") && (TicTacToe[8] == "O")) //see if there is an X in box 0 and 1 and an empty space in box 2
    {
        return 5; //block the human player from winning in row1 by playing in box 5
    }
    ///////////////END OF COLUMN 3 TEST////////////////////////////
    else
    {
        computerplayselection = playhard();
        return computerplayselection;
    }
}

// Function for computer's turn to make a move
function computerPlays() {
    // Check if the game is already over
    if (gameOver == true)
        return;

    // Check the game mode
    if (mode == "hard") {
        // If the mode is "hard," use the attack strategy to make it challenging for the human player
        computerChoice = attack();
    } else {
        // If the mode is not "hard," use a simple strategy to find an empty space
        computerChoice = findemptyspace();
    }

    // Make the move on the chosen space
    putNaughtOrCross(computerChoice);

    // Change player to the human player (X)
    player = "X";

    // Update the display to show the human player's turn
    display();
}


function findemptyspace() {
    var slot;
    var emptyspacefound = false;
    while ((emptyspacefound == false) && (!gameOver)) {
        slot = generateRandomInteger(8);
        if (TicTacToe[slot] == "") {
            emptyspacefound = true;
        }
    }
    return slot;
}

function selectplayer() {
    choosePlayer = generateRandomInteger(2);
    if (choosePlayer == 0)
        player = "O" //0 is the computer player
    if (choosePlayer == 1)
        player = "X"; //X is the human player
}

function playTheGame() {
    selectplayer();
    if (player == "O") {
        display();
        const TimeoutRef = setTimeout(computerPlays, 2000);   
    } else if (player == "X")
        display();
}

function clearBoard() //is resetting the game
{
    winner = "";
    gameOver = false;
    display2();
    let onscreenBoard = document.getElementsByClassName("box");
    numberOfPlays = 0;
    //  this while loop is clear the tic toc tac toe array
    let counter = 0;
    while (counter < onscreenBoard.length++) {
        onscreenBoard[counter].innerText = ""; //this line is for clear a box
        counter = counter + 1;
    }

    TicTacToe[0] = "";
    TicTacToe[1] = "";
    TicTacToe[2] = "";
    TicTacToe[3] = "";
    TicTacToe[4] = "";
    TicTacToe[5] = "";
    TicTacToe[6] = "";
    TicTacToe[7] = "";
    TicTacToe[8] = "";
    player = selectplayer();
    display();
    location.reload();
}

function displayWinner(winner) {
    document.getElementById("Display").innerHTML = winner
}

function display2() {
    const num = localStorage.getItem("PN") //retrieve player's name store from the local storage
    mode = localStorage.getItem("dn") //retrieve difficulty mode from local storage
    HumanPlayer = num;
    document.getElementById("Display").innerHTML = HumanPlayer;
    document.getElementById("numberOfPlayers").innerHTML = mode;
}

function homepage() {
    window.location.href = "../index.html"; //is change for the location of the page
}
homeBtn = document.getElementById("Home")
homeBtn.addEventListener('click', homepage);

function generateRandomInteger(max) {

    return Math.floor(Math.random() * (max + 1));
}

playTheGame();