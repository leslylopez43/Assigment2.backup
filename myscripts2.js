
function startgame()
{
  //let onscreenBoard=getElementsByClassName(startgame);
// the text box identifie by Player name
 Pname=document.getElementById("PlayerName").value; 
 localStorage.setItem("PN",Pname) //the information store is identify the Pn Name
window.location.href="index.html"; //is change for the location of the page

}