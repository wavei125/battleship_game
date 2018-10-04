var userName = "";
var ships = [{x : 2, y : 1} , {x : 3, y : 2} , {x : 5, y : 6}];
var xLocation;
var yLocation;
var countScore = 0;
var countRound = 0;
var check;


function startGame() {
  userName = document.getElementById("userName").value;
  if (userName == "") {
    alert("Please enter your name to start the game");
  } else {
    document.getElementById("intruction-game").style.display = "none";
    document.getElementById("start-game").style.display = "block";
  }
}
/* document.getElementById("button-start").addEventListener("click", startGame())*/

function checkValid() {
  xLocation = document.getElementById("x").value;
  yLocation = document.getElementById("y").value;
  var checkX;
  var checkY;
  if (isNaN(xLocation) || xLocation < 1 || xLocation > 10) {
    alert("Check your x, x between 0 to 10");
    document.getElementById("x").value = "";
    checkX = 0;
  } else {
    checkX = 1;
  }
  if (isNaN(yLocation) || yLocation < 1 || yLocation > 7) {
    alert("Check your y, y between 0 to 7");
    document.getElementById("y").value = "";
    checkY = 0;
  } else {
    checkY = 1;
  }
  if(checkX == 1 && checkY == 1){
    check = 1
  } else {
    check = 0
  }
}

function fire() {
  debugger;
  var xUser = document.getElementById("x").value;
  var yUser = document.getElementById("y").value;
  // countRound = countRound + 1;
  // document.getElementById("count-round").innerHTML = countRound;
  if(checkValid()==1){
    countRound = countRound + 1;
    document.getElementById("count-round").innerHTML = countRound;
	  for(let i = 0; i < ships.length; i++){
      if(xUser == ships[i].x && yUser == ships[i].y){
        alert("Hit shot!");
        countScore = countScore + 1;
        document.getElementById("count-score").innerHTML = countScore;
        var parent = document.getElementById("col" + ships[i].x + "-" + ships[i].y);
        var children = document.getElementById("bird");
        parent.removeChild(children);
        ships.splice(i, 1);
      }
    }
    if(countRound == 5) {
      var parent = document.getElementById("user-input");
      var childrenX = document.getElementById("x");
      var childrenY = document.getElementById("y");
      var childrenButtonFire = document.getElementById("button-fire");
      parent.removeChild(childrenX);
      parent.removeChild(childrenY);
      parent.removeChild(childrenButtonFire);
      var result = document.createElement("h1");
      if(countScore >= 3) {
        document.getElementById("enter-location").innerHTML = userName.toUpperCase()+ " WIN!";
      } else {
        document.getElementById("enter-location").innerHTML = userName.toUpperCase() + " LOSE!";
      }
    }
  }
}
document.getElementById("button-fire").addEventListener("click", fire);
