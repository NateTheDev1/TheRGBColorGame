var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add event for click to squares
    squares[i].addEventListener('click', function (){
    //compare picked versus answer
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor) {
        message.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
    } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";
    }
    });
}

function changeColors (color) {
    for( i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor () {
    var random = Math.floor(Math.random() * colors.length + 1);
    return colors[random];
}

function generateRandomColors (num) {
    var arr = [];

    for(i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor () {
    var r = Math.floor(Math.random() * 255 + 1);
    var g = Math.floor(Math.random() * 255 + 1);
    var b = Math.floor(Math.random() * 255 + 1);

    return "rgb(" + r + ", " + g + ", " + b + ")";
  
}