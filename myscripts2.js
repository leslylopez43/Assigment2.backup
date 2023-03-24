var difficult="";


function startgame()
{
  //let onscreenBoard=getElementsByClassName(startgame);
// the text box identifie by Player name
 Pname=document.getElementById("PlayerName").value; 
 localStorage.setItem("PN",Pname)
  //the information store is identify the Pn Name
  localStorage.setItem("dn",difficult)
window.location.href="index.html"; //is change for the location of the page

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
}

function hard()
{
  difficult= "hard";
  // alert("hard")
}