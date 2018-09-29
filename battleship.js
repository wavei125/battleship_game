var ships = [{x : 2, y : 1} , {x : 3, y : 2} , {x : 5, y : 6}];
var score = 0;
var round = 0;
var count = 0;

function fire() {
  var xUser = document.getElementById("x").value;
  var yUser = document.getElementById("y").value;
  count = count + 1;
  document.getElementById("round").innerHTML = count
	  for(let i = 0; i < ships.length; i++){
      if(xUser == ships[i].x && yUser == ships[i].y){
        alert("Hit shot!");
        score = score + 1;
        document.getElementById("score").innerHTML = score;
        var parent = document.getElementById("col" + ships[i].x + "-" + ships[i].y);
        var children = document.getElementById("bird");
        parent.removeChild(children);
      }
    }
  if(count == 5) {
    var parent = document.getElementById("game-control-sub");
    var childrenUserInput = document.getElementById("user-input");
    var childrenX = document.getElementById("x");
    var childrenY = document.getElementById("y");
    var childrenButtonFire = document.getElementById("button-fire");
    parent.removeChild(childrenUserInput);
    parent.removeChild(childrenX);
    parent.removeChild(childrenY);
    parent.removeChild(childrenButtonFire);
    var result = document.createElement("h1");
    result.setAttribute("id", "result");
    document.getElementById("game-control-sub").appendChild(result);
    if(score >= 3) {
      document.getElementById("result").innerHTML = "YOU WIN!";
    } else {
      document.getElementById("result").innerHTML = "YOU LOSE!";
    }
  }
}
document.getElementById("button-fire").addEventListener("click", fire)
