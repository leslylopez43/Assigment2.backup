var difficult="";

function startgame()
{
  //let onscreenBoard=getElementsByClassName(startgame);
// the text box identifie by Player name
 Pname=document.getElementById("PlayerName").value; 
 localStorage.setItem("PN",Pname)
  //the information store is identify the Pn Name
  localStorage.setItem("dn",difficult)
   if(difficult=="" || Pname=="")
   {
  // confirm("You need to choose hard or easy and also enter a name")
  document.getElementById("chooseAName").innerHTML="Needddd to Type a Name then choose a Hard or easy";
   }
   else
   {
  window.location.href="/home/.html"; //is change for the location of the page
   }
}

function detectKey(e)
{

    if (e.key == "Enter") 
    
  startgame();
   }

 function easy()
 {
  difficult = "easy";
  // alert("difficult = " + difficult);
  startgame();
}

function hard()
{
  difficult= "hard";
  // alert("hard")
  startgame();
}

