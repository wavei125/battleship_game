//funtionc startGame
var userName = "";
var xLoction = 0;
var yLocation = 0;
var countRound = 5;
var countScore = 0;

function startGame() {
    userName = document.getElementById("userName").value;
    if (userName == "") {
        alert("Please enter your name to start the game");
    }
    else {
        document.getElementById("intruction-game").style.display = "none";
        document.getElementById("start-game").style.display = "block";
    }
}

function checkValid() {
    xLocation = document.getElementById("x").value;
    yLocation = document.getElementById("y").value;

    if (isNaN(xLocation) || xLocation < 1 || xLocation > 10) {
        alert("Check your x, x between 0 to 10");
        document.getElementById("x").value = "";
        return false;
    }

    if (isNaN(yLocation) || yLocation < 1 || yLocation > 7) {
        alert("Check your y, y between 0 to 7");
        document.getElementById("y").value = "";
        return false;
    }
    return true;
}

function fire() {
    if (checkValid()) {
        debugger;
        countRound = countRound - 1;

        if (countRound > 0) {
            document.getElementById("count-round").innerHTML = countRound;
        }
        else {
            document.getElementById("button-fire").style.display = "none";
        }
    }
}