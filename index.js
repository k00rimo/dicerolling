var player1Name = prompt("Name of the first player:");
var player2Name = prompt("Name of the second player:");
var player1 = document.querySelector(".player.one");
player1.innerHTML = player1Name;
player1.classList.remove("unvisible");
var player2 = document.querySelector(".player.two");
player2.innerHTML = player2Name;
player2.classList.remove("unvisible");

function rollTheDice() {
    var player1Roll = Math.floor(Math.random() * 6 + 1);
    var player2Roll = Math.floor(Math.random() * 6 + 1);
    if (player1Roll > player2Roll){
        document.querySelector(".heading").innerHTML = player1Name+" wins!";
    } else if (player2Roll > player1Roll){
        document.querySelector(".heading").innerHTML = player2Name+" wins!";
    } else {
        document.querySelector(".heading").innerHTML = "Draw.";
    }
    document.querySelector(".description").innerHTML = "Roll again.";
    document.querySelector(".image.one").setAttribute("src", "./images/"+player1Roll+".svg");
    document.querySelector(".image.one").classList.remove("unvisible");
    document.querySelector(".image.two").setAttribute("src", "./images/"+player2Roll+".svg");
    document.querySelector(".image.two").classList.remove("unvisible");
}

document.querySelector("button").addEventListener('click', rollTheDice);