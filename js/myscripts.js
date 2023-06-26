const boxes = document.querySelectorAll(".box");
var numberOfPlays=0;
var winner="";
var HumanPlayer="";
var gameOver=false;
var mode="";
var computerChoice= 0;
var player="X"; //X player is human and O player is computer
var choosePlayer=0;
// Call the function to generate a random move
const randomMove = generateRandomInteger(8);
console.log(randomMove); // Output: a random integer between 0 and 8


boxes.forEach(function(box) {
  box.addEventListener("click", function handleClick (event) {
    if (player!=="X" || gameOver)
    {
      document.getElementById("message").innerHTML="!ComputerTurn!";
      return;
  }
    if(box.id==="zero")
    putNaughtOrCross(0);
    if(box.id==="one")
    putNaughtOrCross(1);
    if(box.id==="two")
    putNaughtOrCross(2);
    if(box.id==="three")
    putNaughtOrCross(3);
    if(box.id==="four")
    putNaughtOrCross(4);
   if(box.id==="five")
    putNaughtOrCross(5);
    if(box.id==="six")
    putNaughtOrCross(6);
    if(box.id==="seven")
    putNaughtOrCross(7);
    if(box.id==="eight")
    putNaughtOrCross(8);
  });
});
///////////////
let TicTacToe = [0,1,2,
           3,4,5,
           6,7,8];
// each arrange location is set one space

TicTacToe[0]="";
TicTacToe[1]="";
TicTacToe[2]="";
TicTacToe[3]="";
TicTacToe[4]="";
TicTacToe[5]="";
TicTacToe[6]="";
TicTacToe[7]="";
TicTacToe[8]="";

function checkWinner()

{
    checkTopRow();
    checkMiddleRow();
    checkbottomRow();
    checkdiagonal1Row();
    checkdiagonal2Row();
    checkcolumn1Row();
    checkcolumn2Row();
    checkcolumn3Row();
}

function checkTopRow()
{    TopRow=TicTacToe[0]+TicTacToe[1]+TicTacToe[2];
  if(TopRow==="XXX")
  {
    winner=player;
    gameOver=true;
  displayWinner("X player wins");
    }
    if(TopRow==="OOO")
  {
    winner=player;
    gameOver=true;
  displayWinner("O player wins");
    }
}

function checkMiddleRow()
{    MiddleRow=TicTacToe[3]+TicTacToe[4]+TicTacToe[5];
 if(MiddleRow==="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    MiddleRow=TicTacToe[3]+TicTacToe[4]+TicTacToe[5];
 if(MiddleRow==="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
    }

}
function checkbottomRow()
{    bottomRow=TicTacToe[6]+TicTacToe[7]+TicTacToe[8];
 if(bottomRow==="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
     bottomRow=TicTacToe[6]+TicTacToe[7]+TicTacToe[8];
 if(bottomRow==="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
    }

}
function checkdiagonal1Row()
{    diagonal1Row=TicTacToe[0]+TicTacToe[4]+TicTacToe[8];
 if(diagonal1Row==="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    diagonal1=TicTacToe[0]+TicTacToe[4]+TicTacToe[8];
 if(diagonal1==="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
    }
}
function checkdiagonal2Row()
{    diagonal2Row=TicTacToe[6]+TicTacToe[4]+TicTacToe[2];
 if(diagonal2Row==="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    diagonal2=TicTacToe[6]+TicTacToe[4]+TicTacToe[2];
 if(diagonal2==="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
    }
}
function checkcolumn1Row()
{    column1Row=TicTacToe[0]+TicTacToe[3]+TicTacToe[6];
 if(column1Row==="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    column1=TicTacToe[0]+TicTacToe[3]+TicTacToe[6];
 if(column1==="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
    }
}
function checkcolumn2Row()
{    column2Row=TicTacToe[1]+TicTacToe[4]+TicTacToe[7];
 if(column2Row==="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    column2=TicTacToe[1]+TicTacToe[4]+TicTacToe[7];
 if(column2==="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");  
  }
}
function checkcolumn3Row()
{    column3Row=TicTacToe[2]+TicTacToe[5]+TicTacToe[8];
 if(column3Row==="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    column3=TicTacToe[2]+TicTacToe[5]+TicTacToe[8];
 if(column3==="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
  }
}
function putNaughtOrCross(boxNumber)
 {
  let onscreenBoard = document.getElementsByClassName("box")
  //  alert(TicTacToe[boxNumber] )
   if (TicTacToe[boxNumber] ==="")  //CHECK ARRAY LOCATION IF EMPTY
    {
     //Check if player is human then change to computer player and call computerplays  
      onscreenBoard[boxNumber].innerText=player;
      TicTacToe[boxNumber]=player;//Record player position in array TicTacToe
      numberOfPlays++;//increases numerOfPlays by one
     if(player==="X")
      {
      player="O";//Change player to computer
     display();
    const TimeoutRef=setTimeout(computerPlays,2000);//computer plays after 2 seconds
       }
      checkWinner();
    }
 }

function display() {
  if (player === "X") {
    document.getElementById("message").innerHTML = "You turn"    //HumanPlayer;
  }
  if (player === "O") {
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
  if (Row2 === "X" && numberOfPlays === 1) {
    // This if statement is testing against X only because the concatenation operator ignores spaces
    let boardPosition = playDefencePositionOne();
    return boardPosition; // this is the position on the tic tac toe board where the computer will play
  }
  ///TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE FIRST ROW AND BLOCK /////
  else if (TicTacToe[0] === "X" && TicTacToe[1] === "X" && TicTacToe[2] === "") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 2; // block the human player from winning in row1 by playing in box 2
  } else if (TicTacToe[0] === "" && TicTacToe[1] === "X" && TicTacToe[2] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 0; // block the human player from winning in row1 by playing in box 0
  } else if (TicTacToe[0] === "X" && TicTacToe[1] === "" && TicTacToe[2] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 1; // block the human player from winning in row1 by playing in box 1
  }
  ////////END OF FIRST ROW TEST//////
  ///TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE SECOND ROW AND BLOCK //////
  else if (TicTacToe[3] === "X" && TicTacToe[4] === "X" && TicTacToe[5] === "") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 5; // block the human player from winning in row1 by playing in box 5
  } else if (TicTacToe[3] === "" && TicTacToe[4] === "X" && TicTacToe[5] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 3; // block the human player from winning in row1 by playing in box 3
  } else if (TicTacToe[3] === "X" && TicTacToe[4] === "" && TicTacToe[5] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 4; // block the human player from winning in row1 by playing in box 4
  }
  ////////END OF SECOND ROW TEST//////////
  ////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE THIRD ROW AND BLOCK ///////
  else if (TicTacToe[6] === "X" && TicTacToe[7] === "X" && TicTacToe[8] === "") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 8; // block the human player from winning in row1 by playing in box 8
  } else if (TicTacToe[6] === "" && TicTacToe[7] === "X" && TicTacToe[8] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 6; // block the human player from winning in row1 by playing in box 6
  } else if (TicTacToe[6] === "X" && TicTacToe[7] === "" && TicTacToe[8] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 7; // block the human player from winning in row1 by playing in box 7
  }
  /////////END OF THIRD ROW TEST////////////////////////////
  ///TEST IF HUMAN PLAYER IS ABOUT TO WIN IN DIAGONAL1 ROW AND BLOCK ////////
  else if (TicTacToe[0] === "X" && TicTacToe[4] === "X" && TicTacToe[8] === "") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 8; // block the human player from winning in row1 by playing in box 8
  } else if (TicTacToe[0] === "" && TicTacToe[4] === "X" && TicTacToe[8] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 0; // block the human player from winning in row1 by playing in box 0
  } else if (TicTacToe[0] === "X" && TicTacToe[4] === "" && TicTacToe[8] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 4; // block the human player from winning in row1 by playing in box 4
  }
  ////////END OF DIAGONAL1 ROW TEST//////////
  /////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN DIAGONAL2 ROW AND BLOCK //////////
  else if (TicTacToe[6] === "X" && TicTacToe[4] === "X" && TicTacToe[2] === "") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 2; // block the human player from winning in row1 by playing in box 2
  } else if (TicTacToe[6] === "" && TicTacToe[4] === "X" && TicTacToe[2] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 6; // block the human player from winning in row1 by playing in box 6
  } else if (TicTacToe[6] === "X" && TicTacToe[4] === "" && TicTacToe[2] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 4; // block the human player from winning in row1 by playing in box 4
  }
  ////////END OF DIAGONAL2 ROW TEST//////////
  ///////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN COLUMN1 AND BLOCK ////////
  else if (TicTacToe[0] === "X" && TicTacToe[3] === "X" && TicTacToe[6] === "") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 6; // block the human player from winning in row1 by playing in box 6
  } else if (TicTacToe[0] === "" && TicTacToe[3] === "X" && TicTacToe[6] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 0; // block the human player from winning in row1 by playing in box 0
  } else if (TicTacToe[0] === "X" && TicTacToe[3] === "" && TicTacToe[6] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 3; // block the human player from winning in row1 by playing in box 3
  }
  ///////////////END OF COLUMN1 TEST////////////////////////////
  //////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN COLUMN2 AND BLOCK ////////////////
  else if (TicTacToe[1] === "X" && TicTacToe[4] === "X" && TicTacToe[7] === "") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 7; // block the human player from winning in row1 by playing in box 7
  } else if (TicTacToe[1] === "" && TicTacToe[4] === "X" && TicTacToe[7] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 1; // block the human player from winning in row1 by playing in box 1
  } else if (TicTacToe[1] === "X" && TicTacToe[4] === "" && TicTacToe[7] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 4; // block the human player from winning in row1 by playing in box 4
  }
  ///////////////END OF COLUMN2 TEST////////////////////////////
  //////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN COLUMN3 AND BLOCK ////////////////
  else if (TicTacToe[2] === "X" && TicTacToe[5] === "X" && TicTacToe[8] === "") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 8; // block the human player from winning in row1 by playing in box 8
  } else if (TicTacToe[2] === "" && TicTacToe[5] === "X" && TicTacToe[8] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 2; // block the human player from winning in row1 by playing in box 2
  } else if (TicTacToe[2] === "X" && TicTacToe[5] === "" && TicTacToe[8] === "X") {
    // see if there is an X in box 0 and 1 and an empty space in box 2
    return 5; // block the human player from winning in row1 by playing in box 5
  }
  ///////////////END OF COLUMN3 TEST////////////////////////////
  else {
        return findemptyspace(); //computer just searches for an empty slot to play
      }
  } //end of function hard

function attack() {
  ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE FIRST ROW AND BLOCK ////////////////
  if (TicTacToe[0] === "O" && TicTacToe[1] === "O" && TicTacToe[2] === "") {
    return 2; // block the human player from winning in row1 by playing in box 2
  } else if (TicTacToe[0] === "" && TicTacToe[1] === "O" && TicTacToe[2] === "O") {
    return 0; // block the human player from winning in row1 by playing in box 0
  } else if (TicTacToe[0] === "O" && TicTacToe[1] === "" && TicTacToe[2] === "O") {
    return 1; // block the human player from winning in row1 by playing in box 1
  }
  ///////////////END OF FIRST ROW TEST////////////////////////////

  ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE SECOND ROW AND BLOCK ////////////////
  else if (TicTacToe[3] === "O" && TicTacToe[4] === "O" && TicTacToe[5] === "") {
    return 5; // block the human player from winning in row1 by playing in box 5
  } else if (TicTacToe[3] === "" && TicTacToe[4] === "O" && TicTacToe[5] === "O") {
    return 3; // block the human player from winning in row1 by playing in box 3
  } else if (TicTacToe[3] === "O" && TicTacToe[4] === "" && TicTacToe[5] === "O") {
    return 4; // block the human player from winning in row1 by playing in box 4
  }
  ///////////////END OF SECOND ROW TEST////////////////////////////

  ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE THIRD ROW AND BLOCK ////////////////
  else if (TicTacToe[6] === "O" && TicTacToe[7] === "O" && TicTacToe[8] === "") {
    return 8; // block the human player from winning in row1 by playing in box 8
  } else if (TicTacToe[6] === "" && TicTacToe[7] === "O" && TicTacToe[8] === "O") {
    return 6; // block the human player from winning in row1 by playing in box 6
  } else if (TicTacToe[6] === "O" && TicTacToe[7] === "" && TicTacToe[8] === "O") {
    return 7; // block the human player from winning in row1 by playing in box 7
  }
  ///////////////END OF THIRD ROW TEST////////////////////////////

  ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE DIAGONAL1 ROW AND BLOCK ////////////////
  else if (TicTacToe[0] === "O" && TicTacToe[4] === "O" && TicTacToe[8] === "") {
    return 8; // block the human player from winning in row1 by playing in box 8
  } else if (TicTacToe[0] === "" && TicTacToe[4] === "O" && TicTacToe[8] === "O") {
    return 0; // block the human player from winning in row1 by playing in box 0
  } else if (TicTacToe[0] === "O" && TicTacToe[4] === "" && TicTacToe[8] === "O") {
    return 4; // block the human player from winning in row1 by playing in box 4
  }
  ///////////////END OF DIAGONAL1 ROW TEST////////////////////////////

  ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN THE DIAGONAL2 ROW AND BLOCK ////////////////
  else if (TicTacToe[6] === "O" && TicTacToe[4] === "O" && TicTacToe[2] === "") {
    return 2; // block the human player from winning in row1 by playing in box 2
  } else if (TicTacToe[6] === "" && TicTacToe[4] === "O" && TicTacToe[2] === "O") {
    return 6; // block the human player from winning in row1 by playing in box 6
  } else if (TicTacToe[6] === "O" && TicTacToe[4] === "" && TicTacToe[2] === "O") {
    return 4; // block the human player from winning in row1 by playing in box 4
  }
  ///////////////END OF DIAGONAL2 ROW TEST////////////////////////////

  ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN COLUMN1 AND BLOCK ////////////////
  else if (TicTacToe[0] === "O" && TicTacToe[3] === "O" && TicTacToe[6] === "") {
    return 6; // block the human player from winning in row1 by playing in box 6
  } else if (TicTacToe[0] === "" && TicTacToe[3] === "O" && TicTacToe[6] === "O") {
    return 0; // block the human player from winning in row1 by playing in box 0
  } else if (TicTacToe[0] === "O" && TicTacToe[3] === "" && TicTacToe[6] === "O") {
    return 3; // block the human player from winning in row1 by playing in box 3
  }
  ///////////////END OF COLUMN1 TEST////////////////////////////

  ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN COLUMN2 AND BLOCK ////////////////
  else if (TicTacToe[1] === "O" && TicTacToe[4] === "O" && TicTacToe[7] === "") {
    return 7; // block the human player from winning in row1 by playing in box 7
  } else if (TicTacToe[1] === "" && TicTacToe[4] === "O" && TicTacToe[7] === "O") {
    return 1; // block the human player from winning in row1 by playing in box 1
  } else if (TicTacToe[1] === "O" && TicTacToe[4] === "" && TicTacToe[7] === "O") {
    return 4; // block the human player from winning in row1 by playing in box 4
  }
  ///////////////END OF COLUMN2 TEST////////////////////////////

  ////////TEST IF HUMAN PLAYER IS ABOUT TO WIN IN COLUMN3 AND BLOCK ////////////////
  else if (TicTacToe[2] === "O" && TicTacToe[5] === "O" && TicTacToe[8] === "") {
    return 8; // block the human player from winning in row1 by playing in box 8
  } else if (TicTacToe[2] === "" && TicTacToe[5] === "O" && TicTacToe[8] === "O") {
    return 2; // block the human player from winning in row1 by playing in box 2
  } else if (TicTacToe[2] === "O" && TicTacToe[5] === "" && TicTacToe[8] === "O") {
    return 5; // block the human player from winning in row1 by playing in box 5
  }
  ///////////////END OF COLUMN3 TEST////////////////////////////

  else {
    compueterplayselection = playhard();
    return compueterplayselection; 
  }
}


function computerPlays() {
  if (gameOver === true)
    return;
  if (mode === "hard") {
    computerChoice = attack();
    //the hard function is the one that makes it hard for the human player to win
  } else {
    computerChoice = findemptyspace();
  }
  putNaughtOrCross(computerChoice);
  player = "X"; // Change player to human player
  display();
}

function findemptyspace(){
  var slot;
  var emptyspacefound = false;
  while ((emptyspacefound == false) && (!gameOver)){
    slot = generateRandomInteger(8); 
    //alert(slot+"is"+ TIcTacToe[slot])
    if(TicTacToe[slot] == ""){
      emptyspacefound = true;
    }
  }
  return slot;
}
function selectplayer(){
  choosePlayer = generateRandomInteger(2);
  if (choosePlayer == 0){
  player = "0"  //compuer player
 }
  if (choosePlayer ==1){
  player ="X"; //human Player
}
}

function playTheGame() {
  selectplayer ();
  if (player === 0) {
    display();
    const timeoutRef = setTimeout(computerPlays,2000);
  } else if (player ==="x")
    display();
  }

    function clearBoard() //is reseting the game
    {
       winner="";
       gameOver=false;
   display2();
      let onscreenBoard= document.getElementsByClassName("box") ;
     numberOfPlays=0;
      //  this while loop is clear the tic toc tac
          let counter=0;
          while(counter<onscreenBoard.length)
            {
             onscreenBoard[counter].innerText=""; //this line is for clear a box
             counter = counter + 1;
            }
          TicTacToe[0]="";
          TicTacToe[1]="";
          TicTacToe[2]="";
          TicTacToe[3]="";
          TicTacToe[4]="";
          TicTacToe[5]="";
          TicTacToe[6]="";
          TicTacToe[7]="";
          TicTacToe[8]="";
          player = "O";
          display();
          // line reloads the entire page
            location.reload();
          }

  function displayWinner(winner)
  {
    // alert("checkWinner")
     document.getElementById("Display").innerHTML= winner;
    }
    function display2 ()
    {
    const num=localStorage.getItem("PN");//retrieve store info from the local storage
      //alert(num);
       mode=localStorage.getItem("dn");
     // alert ("inside  display2 " + mode);
      HumanPlayer=num;
      document.getElementById("Display").innerHTML=HumanPlayer;
     // document.getElementById("message").innerHTML="ComputerTurnxxxxxxxxxx";
    document.getElementById("numberOfPlayers").innerHTML=mode;
    }
    function homepage()
    {
    window.location.href="../index.html"; //is change for the location of the page
    }
    document.addEventListener("DOMContentLoaded",
    function() {
    homeBtn=document.getElementById("Home")
    homeBtn.addEventListener("click",homepage);
    });

    function generateRandomInteger(max) {        // Generate a random integer between 0 and 10 (inclusive)
      return Math.floor(Math.random() * (max + 1));
    }
playTheGame()



