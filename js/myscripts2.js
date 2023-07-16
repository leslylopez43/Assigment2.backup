var difficult = "";

function startgame() {
  //let onscreenBoard=getElementsByClassName(startgame);
  // the text box identifie by Player name
   Pname = document.getElementById("PlayerName").value;
  localStorage.setItem("PN", Pname);
  //the information store is identify the Pn Name
  localStorage.setItem("dn", difficult);
  if (difficult === "" || Pname === "") {
    // confirm("You need to choose hard or easy and also enter a name")
    document.getElementById("chooseAName").innerHTML =
  "!Type a Name then choose Hard or Easy";

  } else {
    window.location.href =
  "html/" +
  "home.html"; // change for the location of the page
  }
}

function detectKey(e) {
  if (e.key === "Enter") {
    startgame();
  }
}

function easy() {
  difficult = "easy-mode";
    startgame();
    document.getElementById("game-container").classList.add("easy-mode");
}

function hard() {
  difficult = "hard-mode";
    startgame();
  document.getElementById("game-container").classList.add("hard-mode");
}
