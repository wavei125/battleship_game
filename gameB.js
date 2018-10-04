
var timer;
var location1 = {
    x: 1,
    y: 1
}
var location2 = {
    x: 1,
    y: 1
}
var location3 = {
    x: 1,
    y: 1
}

var audio;

var xUser, yUser;

var img1, cell1;
var img2, cell2;
var img3, cell3;

var scorenormal = 0;

function startGameEasy() {
        document.getElementById("intruction-game").style.display = "none";
        document.getElementById("start-game-easy").style.display = "block";
        document.getElementById("start-game-normal").style.display = "none";
        document.getElementById("result-game").style.display = "none";
}

function startGameNormal() {
    document.getElementById("intruction-game").style.display = "none";
    document.getElementById("start-game-easy").style.display = "none";
    document.getElementById("start-game-normal").style.display = "block";
    document.getElementById("result-game").style.display = "none";
}

function clearText()
{
    document.getElementById("x-normal").innerHTML = " ";
    document.getElementById("y-normal").innerHTML = " ";
    document.getElementById("x-normal").focus();
}
function setTarget()
{
    if (location1.x > 0)
    {
        location1 = {
            x: Math.floor((Math.random() * 10) + 1),
            y: Math.floor((Math.random() * 7) + 1)
        }

        //image location1
        img1 = document.createElement("IMG");
        cell1 = document.getElementById("col" + location1.x + "-" + location1.y);

        img1.setAttribute("src","./Image/bird1.png");
        cell1.appendChild(img1);

    }
    
    if (location2.x > 0)
    {
        location2 = {
            x: Math.floor((Math.random() * 10) + 1),
            y: Math.floor((Math.random() * 7) + 1)
        }    
        
        //image location2
        img2 = document.createElement("IMG");
        cell2 = document.getElementById("col" + location2.x + "-" + location2.y);
        
        img2.setAttribute("src","./Image/bird1.png");
        cell2.appendChild(img2);

    }
    
    if (location3.x > 0)
    {
        location3 = {
            x: Math.floor((Math.random() * 10) + 1),
            y: Math.floor((Math.random() * 7) + 1)
        }

        //image location3
        img3 = document.createElement("IMG");
        cell3 = document.getElementById("col" + location3.x + "-" + location3.y);
        

        img3.setAttribute("src","./Image/bird1.png");
        cell3.appendChild(img3);

    }
}
function initTarget()
{
    var second = 60;
    var numchange;

    //play music
    audio = new Audio('./Image/escape.mp3');
    audio.loop = true;
    audio.play();

    document.getElementById("button-start-normal").style.display = "none";
    setTarget();

    timer = setInterval(function(){
        second = second - 1;

        numchange = parseInt(second % 10);

        document.getElementById("time-round").innerHTML = second;

        if (numchange == 0 && second >= 10)
        {
            //clear old location
        img1.setAttribute("src","");
        img2.setAttribute("src","");
        img3.setAttribute("src","");

            setTarget();
        }

        if (second <= 0 || scorenormal == 3){
            if(second = 0 || scorenormal < 3)
            {
                document.getElementById("result-game").style.display = "block";
                document.getElementById("result-text").innerHTML = "YOU LOSE";
            }
            else if (scorenormal == 3)
            {
                document.getElementById("result-game").style.display = "block";
                document.getElementById("result-text").innerHTML = "YOU WIN";
            }
            clearInterval(timer);
            document.getElementById("button-fire-normal").style.display = "none";
            audio.pause();
        }
    }, 1000);
}

function fireNormal()
{
    debugger;

    //image miss
    var imgMiss, cellMiss;

    //get value of user
    xUser = document.getElementById("x-normal").value;
    yUser = document.getElementById("y-normal").value;

    //location guess
    var guessLocaltion = {
        x : xUser,
        y : yUser
    }

    //check location guess with location game
    if(guessLocaltion.x == location1.x && guessLocaltion.y == location1.y)
    {
        location1.x = 0;
        img1.setAttribute("src","");
        scorenormal = scorenormal + 1;
        document.getElementById("count-score-normal").innerHTML = scorenormal;

        clearText();
    }

    else if(guessLocaltion.x == location2.x && guessLocaltion.y == location2.y)
    {
        location2.x = 0;
        img2.setAttribute("src","");
        scorenormal = scorenormal + 1;
        document.getElementById("count-score-normal").innerHTML = scorenormal;

        clearText();
    }

    else if(guessLocaltion.x == location3.x && guessLocaltion.y == location3.y)
    {
        location3.x = 0;
        img3.setAttribute("src","");
        scorenormal = scorenormal + 1;
        document.getElementById("count-score-normal").innerHTML = scorenormal;
        clearText()
    }

    else
    {
        imgMiss = document.createElement("IMG");
        cellMiss = document.getElementById("col" + guessLocaltion.x + "-" + guessLocaltion.y);

        imgMiss.setAttribute("src","./Image/miss.png");
        cellMiss.appendChild(imgMiss);
        clearText();
    }
}

function rePlay()
{
    scorenormal = 0;
    second = 60;
    document.getElementById("button-start-normal").style.display = "block";
    location1.x = 1;
    location2.x = 1;
    location2.x = 1;
    location.reload()
}