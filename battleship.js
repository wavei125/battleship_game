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
}
document.getElementById("button-fire").addEventListener("click", fire)

function result() {
  if(count == 5){
    var parent = document.getElementById("game-control-sub");
    var childrenX = document.getElementById("x");
    var childrenY = document.getElementById("y");
    parent.removeChild(childrenX);
    parent.removeChild(childrenY);
  }
}
document.getElementById("button-fire").addEventListener("click", result)
