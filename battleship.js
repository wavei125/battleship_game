var ships = [{x : 1, y : 1} , {x : 2, y : 2} , {x : 3, y : 3}];
var score = 0;
var round = 0;
var xUser = document.getElementById("x");
var yUser = document.getElementById("y");
var buttonFire = document.getElementById("button-fire")
function fire() {
  for (let n = 1; n <= 5; n++) {
    debugger
	  round = round + 1;
    alert("round is " + round);
	  for(let i = 0; i < ships.length; i++){
      if(xUser = ships[i].x && yUser == ships[i].y){
			  score = score + 1;
        ships.splice(i, 1);
        alert("Hit shot!");
      }
    }
  }
  if(score >= 3){
    alert("You win");
  } else {
    alert("You lose");
  }
}
buttonFire.addEventListener("click", fire)