
document.getElementById('btn').addEventListener('click',function(e){



var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// rotate();

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}
else {
  document.querySelector("h1").innerHTML = "Oops its Draw!";
}

});

// Math.floor(Math.random() * (max - min + 1)) + min   for range
// function rotate()
// for(var i=1;i<11;i++)
// {
//     setInterval((function(myI)
//     {
//         return function()
//         {
//             document.getElementById("img1").style.WebkitTransitionDuration='2s';
//             document.getElementById("img1").style.webkitTransform = 'rotate(40deg)';
//             document.getElementById("img2").style.WebkitTransitionDuration='2s';
//             document.getElementById("img2").style.webkitTransform = 'rotate(40deg)';
//         };

//     }(i)),100);
// }
