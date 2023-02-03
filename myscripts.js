TicTacToe=[0,1,2,
           3,4,5,
           6,7,8];

TicTacToe[0]="";
TicTacToe[1]="";
TicTacToe[2]="";
TicTacToe[3]="";
TicTacToe[4]="";
TicTacToe[5]="";
TicTacToe[6]="";
TicTacToe[7]="";
TicTacToe[8]="";

let Board=document.getElementById("Display");
CurrentBoard=TicTacToe[0]+TicTacToe[1]+TicTacToe[2]+"<br>";
CurrentBoard=CurrentBoard+TicTacToe[3]+TicTacToe[4]+TicTacToe[5]+"<br>";
CurrentBoard=CurrentBoard+TicTacToe[6]+TicTacToe[7]+TicTacToe[8]+"<br>";
console.log(Board)
Board.innerHTML=CurrentBoard; //display  Tic Tac Toe Board on screen
//alert(CurrentBoard)

function checkWinner()

{
    checkTopRow();
    checkMiddleRow();
    checkbottomRow();
   // alert("inside checkwinner")

}

function checkTopRow()
{    TopRow=TicTacToe[0]+TicTacToe[1]+TicTacToe[2];
 if(TopRow=="XXX")
  {
  alert("X player wins");
    }
    


    if(TopRow=="OOO")
  {
  alert("O player wins");
    }
    

}

function checkMiddleRow()
{    MiddleRow=TicTacToe[3]+TicTacToe[4]+TicTacToe[5];
 if(MiddleRow=="XXX")
  {
  alert("X player wins");
    }
    
    MiddleRow=TicTacToe[3]+TicTacToe[4]+TicTacToe[5];
 if(MiddleRow=="OOO")
  {
  alert("0 player wins");
    }

}
function checkbottomRow()
{    bottomRow=TicTacToe[6]+TicTacToe[7]+TicTacToe[8];
 if(bottomRow=="XXX")
  {
  alert("X player wins");
    }
    
     bottomRow=TicTacToe[6]+TicTacToe[7]+TicTacToe[8];
 if(bottomRow=="OOO")
  {
  alert("0 player wins");
    }

}
function checkdiagonal1Row()
{    diagonal1Row=TicTacToe[0]+TicTacToe[4]+TicTacToe[8];
 if(diagonal1Row=="XXX")
  {
  alert("X player wins");
    }
    
    diagonal1=TicTacToe[0]+TicTacToe[4]+TicTacToe[8];
 if(diagonal1=="OOO")
  {
  alert("0 player wins");
    }
}
function checkdiagonal2Row()
{    diagonal2Row=TicTacToe[6]+TicTacToe[4]+TicTacToe[3];
 if(diagonal2Row=="XXX")
  {
  alert("X player wins");
    }
    
    diagonal2=TicTacToe[6]+TicTacToe[4]+TicTacToe[3];
 if(diagonal2=="OOO")
  {
  alert("0 player wins");
    }
}
function checkcolumn1Row()
{    column1Row=TicTacToe[0]+TicTacToe[4]+TicTacToe[7];
 if(columnlRow=="XXX")
  {
  alert("X player wins");
    }
    
    column1=TicTacToe[0]+TicTacToe[4]+TicTacToe[7];
 if(column1=="OOO")
  {
  alert("0 player wins");
    }
}
function checkcolumn2Row()
{    column2Row=TicTacToe[0]+TicTacToe[4]+TicTacToe[7];
 if(column2Row=="XXX")
  {
  alert("X player wins");
    }
    
    column2=TicTacToe[0]+TicTacToe[4]+TicTacToe[7];
 if(column2=="OOO")
  {
  alert("0 player wins");
  
  }
}
function checkcolumn3Row()
{    column3Row=TicTacToe[0]+TicTacToe[4]+TicTacToe[7];
 if(column3Row=="XXX")
  {
  alert("X player wins");
    }
    
    column3=TicTacToe[0]+TicTacToe[4]+TicTacToe[7];
 if(column3=="OOO")
  {
  alert("0 player wins");
  
  }
}


function putNaughtOrCross(boxNumber)
 {

  let Board=document.getElementsByClassName("box")
   
   if (TicTacToe[boxNumber] =="")  //CHECK ARRAY LOCATION IF EMPTY
   {
    //alert("INSIDE  NAUGHTORCROSS")
    Board[boxNumber].innerText="X";
   }
   
 }
 function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}
let value4 = generateRandomInteger(8);
alert(value4);
